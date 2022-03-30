import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import Section from '../../baseComponents/Section';
import URLStateExport from '../../url-state/URLStateExport';
import BuildShareModal from '../results/BuildShareModal/BuildShareModal';

const SharingSection = () => {
  const { t } = useTranslation();
  const character = useSelector(getSelectedCharacter);

  return (
    <Section
      title={
        <a style={{ textDecoration: 'none', color: 'inherit' }} id="#share" href="#share">
          {t('Share Builds')}
        </a>
      }
      helpText={t('Generate shareable links here!')}
      content={
        <>
          <URLStateExport />{' '}
          <Typography variant="body1" component="span">
            <Trans>Share settings.</Trans>
          </Typography>{' '}
          <Typography variant="caption">
            <Trans>
              Includes the current selected options on this page only. Does not include result
              builds in the table above
            </Trans>
          </Typography>
          <br />
          <BuildShareModal title={t('Build Share Settings')} character={character}>
            {(handleOpen) => (
              <IconButton disabled={!character} onClick={() => handleOpen()} size="large">
                <ShareIcon />
              </IconButton>
            )}
          </BuildShareModal>{' '}
          <Typography variant="body1" component="span">
            <Trans>Share Character.</Trans>{' '}
          </Typography>
          <Typography variant="caption">
            {' '}
            <Trans>Select weapons and skills as you please.</Trans>
          </Typography>
        </>
      }
      extraInfo={<></>}
    />
  );
};

export default SharingSection;
