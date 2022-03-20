import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Typography } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
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
      title={t('Share Builds')}
      helpText={t('Generate shareable links here!')}
      content={
        <>
          <URLStateExport />{' '}
          <Typography variant="body1" component="span">
            Share settings.
          </Typography>{' '}
          <Typography variant="caption">
            Includes the current selected options on this page only. Does not include result builds
            in the table above
          </Typography>
          <br />
          <BuildShareModal title="Build Share Settings" character={character}>
            {(handleOpen) => (
              <IconButton onClick={() => handleOpen()} size="large">
                <ShareIcon />
              </IconButton>
            )}
          </BuildShareModal>{' '}
          <Typography variant="body1" component="span">
            Share Character.{' '}
          </Typography>
          <Typography variant="caption"> Select weapons and skills as you please.</Typography>
        </>
      }
      extraInfo={<></>}
    />
  );
};

export default SharingSection;
