import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, TextField } from '@material-ui/core';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { getControl } from '../../../state/controlsSlice';
import { parseAmount } from '../../../state/optimizer/optimizerCore';
import { Condition } from '../../../utils/gw2-data';

const initial = {
  Power: 0,
  Burning: 0,
  Bleeding: 0,
  Poison: 0,
  Torment: 0,
  Confusion: 0,
};

const roundOne = (num) => Math.round(num * 10) / 10;
const roundZero = (num) => Math.round(num);

// reverse legacy percent distribution conversion
// see: https://github.com/discretize/discretize-gear-optimizer/discussions/136
const coefficientsToPercents = (values2) => {
  const { Power, ...rest } = values2;
  const values1 = {};

  // reverse magic numbers
  values1.Power = (Power / 2597) * 1025;
  for (const [key, value] of Object.entries(rest)) {
    values1[key] = value * Condition[key].baseDamage;
  }

  // scale up/down so sum is 100
  const sum = Object.values(values1).reduce((prev, cur) => prev + cur, 0);
  if (sum) {
    for (const key of Object.keys(values1)) {
      values1[key] *= 100 / sum;
    }
  }

  return values1;
};

const fixPoison = (input) =>
  Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const fixedKey = key === 'Poison' ? 'Poisoned' : key;
      return [fixedKey, value];
    }),
  );

const TemplateHelper = ({ character }) => {
  const traitsTemplate = useSelector(getControl('traitsTemplate'));
  const { t } = useTranslation();

  const [input, setInput] = React.useState(initial);
  const data = Object.entries(input).map(([key, inputText]) => {
    const { value, error } = parseAmount(inputText);
    return { key, inputText, value, error };
  });

  const helperData = character.results.templateHelper;

  const values2 = Object.fromEntries(
    data.map(({ key, value }) => [key, (value ?? 0) / helperData[key]]),
  );
  const values1 = coefficientsToPercents(values2);

  // round
  Object.keys(values2).forEach((key) => {
    values2[key] = key === 'Power' ? roundZero(values2[key]) : roundOne(values2[key]);
    values1[key] = roundZero(values1[key]);
  });

  const distribution = { values1: fixPoison(values1), values2: fixPoison(values2) };

  return (
    <>
      <Typography variant="h6">
        <Trans>Trait Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px' }}>
        {JSON.stringify(traitsTemplate, null, 2)}
      </pre>

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
              <td key={key}>{t(`${key} DPS`)}</td>
            ))}
          </tr>
          <tr>
            {data.map(({ key, inputText, error }) => {
              return (
                <td key={key}>
                  <TextField
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
      <p>
        <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px' }}>
          {JSON.stringify(distribution, null, 2)}
        </pre>
      </p>
    </>
  );
};

export default React.memo(TemplateHelper);
