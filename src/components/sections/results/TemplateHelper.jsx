import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, TextField } from '@material-ui/core';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { getTraitsTemplate } from '../../../state/slices/resultsSlice';
import { parseAmount } from '../../../state/optimizer/optimizerCore';

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

const indent = (str, amount) => str.replace(/^/gm, ' '.repeat(amount));

// replaces "Poison" with "Poisoned" (keeping the same key order)
const fixPoison = (input) =>
  Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const fixedKey = key === 'Poison' ? 'Poisoned' : key;
      return [fixedKey, value];
    }),
  );

const TemplateHelper = ({ character }) => {
  const traitsTemplate = useSelector(getTraitsTemplate);
  const { t } = useTranslation();

  const [input, setInput] = React.useState(initial);
  const data = Object.entries(input).map(([key, inputText]) => {
    const { value, error } = parseAmount(inputText);
    return { key, inputText, value, error };
  });

  const helperData = character.results.templateHelper;

  let values2 = Object.fromEntries(
    data.map(({ key, value }) => [key, (value ?? 0) / helperData[key]]),
  );

  // round
  Object.keys(values2).forEach((key) => {
    values2[key] = key === 'Power' ? roundZero(values2[key]) : roundOne(values2[key]);
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
                  // i18next-extract-mark-context-next-line ["Power","Burning","Bleeding","Poison","Torment", "Confusion"]
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

      <Typography variant="caption">
        <Trans>result:</Trans>
      </Typography>

      <table>
        <tbody>
          <tr>
            {Object.keys(values2).map((key) => {
              const type = key === 'Power' ? 'Power Coefficient' : `Avg. ${key} Stacks`;
              return <td key={type}>{type}</td>;
            })}
          </tr>
          <tr>
            {Object.values(values2).map((value, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={index}>
                <TextField disabled value={value} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px' }}>
        {indent(formattedDistribution, 6)}
      </pre>

      <Typography variant="h6">
        <Trans>Trait Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px' }}>
        {indent(JSON.stringify(traitsTemplate?.traits, null, 2) || '', 6)}
      </pre>

      <Typography variant="h6">
        <Trans>Skills Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px' }}>
        {indent(JSON.stringify(traitsTemplate?.skills, null, 2) || '', 6)}
      </pre>

      <Typography variant="h6">
        <Trans>Extras Template</Trans>
      </Typography>

      <pre style={{ userSelect: 'all', overflowY: 'auto', maxHeight: '250px' }}>
        {indent(JSON.stringify(traitsTemplate?.extras, null, 2) || '', 6)}
      </pre>
    </>
  );
};

export default React.memo(TemplateHelper);
