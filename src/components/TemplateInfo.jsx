import { Profession } from '@discretize/gw2-ui-new';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from '@mui/material';
import { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import creditData from '../assets/presetdata/credit.yaml';
import { getSelectedDistribution } from '../state/slices/distribution';
import data from '../utils/data';
import Info from './baseComponents/Info';

const TemplateLabel = ({ preset }) => {
  const { t } = useTranslation();
  return preset.profession ? (
    <Profession
      disableLink
      name={preset.profession}
      text={t(`preset`, { context: `distribution_${preset.name}` })}
    />
  ) : (
    t(`preset`, { context: `distribution_${preset.name}` })
  );
};

const Author = ({ name }) => {
  const url = creditData[name]?.authorUrl;
  return url ? (
    <Link href={url} target="_blank" rel="noopener">
      {name}
    </Link>
  ) : (
    <strong>{name}</strong>
  );
};

const BeginningLinks = ({ credit }) =>
  credit
    .slice(0, -1)
    .map((entry) => <Author name={entry.author} />)
    .reduce((prev, curr) => [prev, ', ', curr]);

const EndingLinks = ({ credit }) =>
  credit.slice(-1).map((entry) => <Author key={entry.author} name={entry.author} />);

export default function TemplateInfo() {
  const selectedDistribution = useSelector(getSelectedDistribution);

  const distributionData = data.presetDistribution.list.find(
    (entry) => entry.name === selectedDistribution,
  );
  const credit = distributionData?.credit;
  if (!credit) return null;
  // if (credit.some((entry) => !creditData[entry.author])) return null;

  return (
    <Info variant="body2">
      {credit.length > 1 ? (
        <Trans>
          <TemplateLabel preset={distributionData} /> preset coefficient data is based on rotation
          logs by <BeginningLinks credit={credit} /> and <EndingLinks credit={credit} />!
        </Trans>
      ) : (
        <Trans>
          <TemplateLabel preset={distributionData} /> preset coefficient data is based on a rotation
          log by <EndingLinks credit={credit} />!
        </Trans>
      )}
      {credit
        .filter((entry) => creditData[entry.author]?.authorUrl && entry.url)
        .map((entry) => (
          <Fragment key={`${entry.url}`}>
            {' '}
            <Link href={entry.url} target="_blank" rel="noreferrer">
              <OpenInNewIcon fontSize="inherit" />
            </Link>
          </Fragment>
        ))}
    </Info>
  );
}
