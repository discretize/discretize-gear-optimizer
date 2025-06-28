import { Alert, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { changeAllDistributionNew } from '../../../state/slices/distribution';
import { mapValues, parseDistribution, parseNumber } from '../../../utils/usefulFunctions';

const initial = {
  Power: 0,
  Power2: 0,
  Burning: 0,
  Bleeding: 0,
  Poison: 0,
  Torment: 0,
  Confusion: 0,
};

const roundTwo = (num) => Math.round(num * 100) / 100;
const roundZero = (num) => Math.round(num);

const indent = (str, amount) => str.replace(/^/gm, ' '.repeat(amount));

// replaces "Poison" with "Poisoned" (keeping the same key order)
const fixPoison = (input) =>
  Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const fixedKey = key === 'Poison' ? 'Poisoned' : key;
      return [fixedKey, value];
    }),
  );

const apiUrls = [
  {
    siteName: 'dps.report',
    subString: 'dps.report',
    performFetch: (permalink) => fetch(`https://dps.report/getJson?permalink=${permalink}`),
    loadingStatus: 'loading, please wait.',
  },
  {
    siteName: 'gw2wingman',
    subString: 'gw2wingman.nevermindcreations.de',
    performFetch: (permalink) =>
      fetch(`https://gw2wingman.nevermindcreations.de/api/getFullJson/${permalink}`, {
        cache: 'force-cache',
      }),
    loadingStatus: 'loading, please wait. this may take a long time!',
  },
];

const TemplateHelper = ({ character }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [input, setInput] = React.useState(initial);

  const [url, setUrl] = React.useState('');
  const [inputOptions, setInputOptions] = React.useState(undefined);
  const [urlResult, setUrlResult] = React.useState('');
  const [probablyGolem, setProbablyGolem] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setUrlResult('');
      setInputOptions(undefined);

      if (url) {
        try {
          const permalink = url.split('/').slice(-1);
          if (!permalink) return;

          const { siteName, performFetch, loadingStatus } =
            apiUrls.find(({ subString }) => url.includes(subString)) ?? {};
          if (!siteName) {
            setUrlResult('unknown url!');
            return;
          }
          if (loadingStatus) setUrlResult(loadingStatus);

          console.log(`loading data from ${siteName}...`);
          const response = await performFetch(permalink);
          const data = await response.json();
          console.log(`got data from ${siteName}: `, data);

          if (data.error || !Array.isArray(data?.players)) {
            setUrlResult(JSON.stringify(data, null, 2));
            return;
          }

          const playerData =
            data.players.length > 1
              ? data.players.find((player) => player.name === data.recordedBy)
              : data.players[0];

          if (!playerData) {
            setUrlResult('no player data!');
            return;
          }

          const end = data.phases?.[0]?.end ?? 0;
          const start = data.phases?.[0]?.start ?? 0;
          const duration = (end - start) / 1000;

          let sum = 0;
          const powerDPS = playerData.dpsTargets?.[0]?.[0]?.powerDps;
          sum += powerDPS;

          const conditionIds = {
            Burning: 737,
            Bleeding: 736,
            Poison: 723,
            Torment: 19426,
            Confusion: 861,
          };

          const damageDist = playerData.targetDamageDist?.[0]?.[0] ?? [];

          const conditionData = mapValues(conditionIds, (id) => {
            const damage = damageDist.find((entry) => entry?.id === id)?.totalDamage;
            const dps = roundTwo((damage ?? 0) / duration);
            sum += dps;
            return dps;
          });

          const nonConditionBuffEntries = Object.entries(data.buffMap)
            .map(([buffId, { name }]) => [Number(buffId.replace('b', '')), name])
            .filter(([id]) => Object.values(conditionIds).includes(id) === false);

          const nonConditionDataEntries = nonConditionBuffEntries
            .map(([id, name]) => {
              const { totalDamage, connectedHits } =
                damageDist.find((entry) => entry?.id === id) ?? {};

              if (!totalDamage) return;

              const dps = roundTwo((totalDamage ?? 0) / duration);
              const hitsPerSecond = roundTwo(connectedHits / duration);

              return [`${name} "Power" DPS (${hitsPerSecond} hit/sec)`, dps];
            })
            .filter(Boolean);

          const possibleLifestealDamageSum = nonConditionDataEntries.reduce(
            (prev, [_, dps]) => prev + dps,
            0,
          );

          const powerDPSWithoutLifesteal = powerDPS - possibleLifestealDamageSum;

          const nonConditionDataSection = nonConditionDataEntries.length
            ? [
                '   -- lifesteal effects must be subtracted from power DPS! --',
                '      (not all of these are lifesteal; double check this!)',
                '\n',
                [`Power DPS raw`, powerDPS],
                ...nonConditionDataEntries,
                [`Power DPS minus buff damage`, powerDPSWithoutLifesteal],
              ]
            : ['      (no lifesteal effects detected)'];

          const totalDPS = playerData.dpsTargets?.[0]?.[0]?.dps;

          const hits = playerData.statsTargets?.[0]?.[0]?.critableDirectDamageCount;
          const crits = playerData.statsTargets?.[0]?.[0]?.criticalRate;

          const hitsPerSecond = (hits / duration) * 0.95;
          const critPercent = (crits / hits) * 100;

          const minions = playerData.minions ?? [];

          const minionCounts = {
            'Clone': { names: new Set(), minionHits: 0, minionCrits: 0, damage: 0 },
            'Phantasm': { names: new Set(), minionHits: 0, minionCrits: 0, damage: 0 },
            'Minion': { names: new Set(), minionHits: 0, minionCrits: 0, damage: 0 },
          };

          for (const { name, totalTargetDamage, targetDamageDist } of minions) {
            let type = 'Minion';
            if (name.includes('Clone')) type = 'Clone';
            if (name?.startsWith('Illusionary')) type = 'Phantasm';

            for (const skill of targetDamageDist?.[0]?.[0] ?? []) {
              const { indirectDamage, connectedHits: minionHits, crit: minionCrits } = skill;
              if (indirectDamage) continue;
              if (!minionHits && !minionCrits) continue;

              minionCounts[type].names.add(name);

              minionCounts[type].minionHits += minionHits ?? 0;
              minionCounts[type].minionCrits += minionCrits ?? 0;
            }

            minionCounts[type].damage += totalTargetDamage?.[0]?.[0] ?? 0;
          }

          const minionData = Object.entries(minionCounts)
            .filter(([_type, { minionHits }]) => minionHits)
            .flatMap(([type, { names, minionHits, minionCrits }]) => {
              const namesString = [...names].join(', ');

              const minionHitsPerSecond = (minionHits / duration) * 0.95;
              const minionCritPercent = (minionCrits / minionHits) * 100;

              return [
                [
                  `95% ${type} hits/sec (${minionCrits}/${minionHits}: ${minionCritPercent.toFixed(
                    2,
                  )}% crit)`,
                  minionHitsPerSecond,
                ],
                `            - ${namesString}\n`,
              ];
            });

          let splitDamageTotal = 0;
          let clonePhantasmDamageSum = 0;
          let minionDamageSum = 0;
          const powerDPSPlayer = playerData.dpsTargets?.[0]?.[0]?.actorPowerDps;
          splitDamageTotal += powerDPSPlayer;
          const minionDamageData = Object.entries(minionCounts)
            .filter(([_type, { damage }]) => damage)
            .map(([type, { damage }]) => {
              const dps = (damage ?? 0) / duration;
              splitDamageTotal += dps;
              if (['Clone', 'Phantasm'].includes(type)) {
                clonePhantasmDamageSum += dps;
              } else {
                minionDamageSum += dps;
              }

              return [`${type} DPS`, dps];
            });

          const result = [
            ['Duration (sec)', duration],
            '\n',
            ['Power DPS (including minions)', powerDPS],
            ...Object.entries(conditionData).map(([key, value]) => [`${key} DPS`, value]),
            '\n',
            ['Sum', sum],
            ['Total dps (log)', totalDPS],
            '\n',
            ...nonConditionDataSection,
            '\n',
            ['Power DPS (including minions, no "lifesteal")', powerDPSWithoutLifesteal],
            ...Object.entries(conditionData).map(([key, value]) => [`${key} DPS`, value]),
            '\n',
            '   -- minion damage split --',
            '\n',
            [
              'Power DPS (player only, no "lifesteal")',
              powerDPSPlayer - possibleLifestealDamageSum,
            ],
            ['Power DPS (player only, including "lifesteal")', powerDPSPlayer],
            ...minionDamageData,
            ['Power DPS Sum (should match total)', splitDamageTotal],
            '\n',
            ['Clone+Phantasm DPS', clonePhantasmDamageSum],
            '\n',
            '   -- hit per second counts --',
            '\n',
            [
              `95% Player crittable hits per second (${crits}/${hits}: ${critPercent.toFixed(
                2,
              )}% crit)`,
              hitsPerSecond,
            ],
            '\n',
            ...minionData,
            `      (~95% multiplier discounts on-crit stacks that expire at phase end)`,
          ];

          const resultAreaText = result
            .map((item) => {
              if (typeof item === 'string') return item;
              const [key, value] = item;
              return `${String(value.toFixed(2)).padStart(9)}: ${key}`;
            })
            .join('\n');

          setInput({
            Power: roundTwo(powerDPSWithoutLifesteal - clonePhantasmDamageSum),
            Power2: roundTwo(clonePhantasmDamageSum),
            ...conditionData,
          });

          if (minionDamageSum) {
            setInputOptions({
              'minions: use player power stats': {
                Power: roundTwo(powerDPSWithoutLifesteal - clonePhantasmDamageSum),
                Power2: roundTwo(clonePhantasmDamageSum),
                ...conditionData,
              },
              'minions: unaffected by stats': {
                Power: roundTwo(
                  powerDPSWithoutLifesteal - clonePhantasmDamageSum - minionDamageSum,
                ),
                Power2: roundTwo(clonePhantasmDamageSum),
                ...conditionData,
              },
            });
          }

          setProbablyGolem(data.players.length <= 5);
          setUrlResult(resultAreaText);
        } catch (e) {
          console.error(e);
          setUrlResult(String(e));
        }
      }
    }
    fetchData();
  }, [url]);

  const data = Object.entries(input).map(([key, inputText]) => {
    const { value, error } = parseDistribution(inputText);
    return { key, inputText, value, error };
  });

  const { cachedFormState } = character.settings;
  const { coefficientHelper } = character.results;

  // warn user if log might be golem and they didn't zero the boss section
  const confusionValue = data.find(({ key }) => key === 'Confusion').value;
  const tormentValue = data.find(({ key }) => key === 'Torment').value;

  const parseBoss = (val) => parseNumber(val, 0, false).value;
  const attackRate = parseBoss(character.settings?.cachedFormState?.boss?.attackRate);
  const movementUptime = parseBoss(character.settings?.cachedFormState?.boss?.movementUptime);

  const warnAboutAttackRate = probablyGolem && confusionValue !== 0 && attackRate !== 0;
  const warnAboutMovementUptime = probablyGolem && tormentValue !== 0 && movementUptime !== 0;

  // reverse engineer coefficient needed to reach target damage
  // DPS = slope * coefficient + intercept
  // coefficient = (DPS - intercept) / slope
  const calculateRequiredCoefficient = (key, targetDPS = 0) => {
    const { slope = 0, intercept = 0 } = coefficientHelper?.[key] ?? {};
    if (targetDPS === intercept) return 0;
    return (targetDPS - intercept) / slope;
  };

  let values2 = Object.fromEntries(
    data.map(({ key, value }) => [key, calculateRequiredCoefficient(key, value)]),
  );

  // round
  Object.keys(values2).forEach((key) => {
    values2[key] = key.startsWith('Power') ? roundZero(values2[key]) : roundTwo(values2[key]);
  });

  values2 = fixPoison(values2);

  const distribution = { values2 };

  const formattedDistribution = JSON.stringify(distribution, null, 2)
    .replaceAll('\n    ', ' ')
    .replaceAll('\n  }', ' }');

  return (
    <>
      <Typography variant="h6">
        <Trans>Distribution Template</Trans>
      </Typography>
      <Typography variant="caption">
        <Trans>input the DPS values from a golem log here:</Trans>
      </Typography>

      <table>
        <tbody>
          <tr>
            {data.map(({ key }) => (
              <td key={key}>
                {
                  // i18next-extract-mark-context-next-line ["Power","Power2","Burning","Bleeding","Poison","Torment", "Confusion"]
                  t('DPSType', { context: key })
                }
              </td>
            ))}
          </tr>
          <tr>
            {data.map(({ key, inputText, error }) => {
              return (
                <td key={key}>
                  <TextField
                    variant="standard"
                    error={error}
                    value={inputText}
                    onChange={(e) => {
                      const newInput = { ...input };
                      newInput[key] = e.target.value;
                      setInput(newInput);
                    }}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>

      <br />

      {(warnAboutAttackRate || warnAboutMovementUptime) && (
        <Alert severity="warning" sx={{ marginBottom: 2 }}>
          Is this a stationary golem log? If so, your attack rate or movement uptime are probably
          set incorrectly! Adjust them and rerun the calculation if so.
        </Alert>
      )}

      <Typography variant="caption">
        <Trans>
          or, enter a dps.report or gw2wingman URL to attempt to to fetch the data automatically:
        </Trans>
      </Typography>
      <br />
      <TextField
        fullWidth
        variant="standard"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />

      {inputOptions ? (
        <ButtonGroup variant="outlined" size="small" color="primary" sx={{ mt: 1 }}>
          {Object.entries(inputOptions).map(([label, newInput]) => (
            <Button onClick={() => setInput(newInput)}>{label}</Button>
          ))}
        </ButtonGroup>
      ) : undefined}

      <pre style={{ margin: '1rem' }}>{urlResult}</pre>

      <br />

      <Typography variant="caption">
        <Trans>result:</Trans>
      </Typography>

      <table>
        <tbody>
          <tr>
            {Object.keys(values2).map((key) => {
              const type = key.startsWith('Power') ? `${key} Coefficient` : `Avg. ${key} Stacks`;
              return <td key={type}>{type}</td>;
            })}
          </tr>
          <tr>
            {Object.values(values2).map((value, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={index}>
                <TextField disabled value={value} variant="standard" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px', margin: '1rem' }}>
        {indent(formattedDistribution, 6)}
      </pre>

      <Button variant="contained" onClick={() => dispatch(changeAllDistributionNew(values2))}>
        copy to coefficients section
      </Button>

      <Typography variant="h6" style={{ marginTop: '2rem' }}>
        <Trans>Trait Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px', margin: '1rem' }}>
        {indent(JSON.stringify(cachedFormState?.traits, null, 2) || '', 6)}
      </pre>

      <Typography variant="h6">
        <Trans>Skills Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px', margin: '1rem' }}>
        {indent(JSON.stringify(cachedFormState?.skills, null, 2) || '', 6)}
      </pre>

      <Typography variant="h6">
        <Trans>Extras Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px', margin: '1rem' }}>
        {indent(JSON.stringify(cachedFormState?.extras, null, 2) || '', 6)}
      </pre>
    </>
  );
};

export default React.memo(TemplateHelper);
