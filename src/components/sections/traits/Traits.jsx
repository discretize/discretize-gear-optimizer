import { Specialization, Trait, TraitLine } from '@discretize/gw2-ui-new';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, FormControl, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classModifiers, traitSectionsById } from '../../../assets/modifierdata';
import { getProfession } from '../../../state/slices/controlsSlice';
import {
  changeTrait,
  changeTraitLine,
  getShowAllTraits,
  getTraitItems,
  getTraitLines,
  getTraits,
  setTraitModiferAmount,
  toggleTraitModifier,
} from '../../../state/slices/traits';
import AmountInput from '../../baseComponents/AmountInput';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import Info from '../../baseComponents/Info';

const Traits = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const profession = useSelector(getProfession);

  const data = classModifiers[profession]?.filter((section) => section.id > 0) ?? [];

  // selected trait lines
  const traitlines = useSelector(getTraitLines);
  // 2D array: traits[n] is the n-th selected trait line. So the trait id in traitlines[i] has the selected values traits[i]
  const selectedTraits = useSelector(getTraits);
  // all the currently applied modifiers
  const items = useSelector(getTraitItems);

  const showAll = useSelector(getShowAllTraits);
  const hiddenCss = showAll ? { opacity: 0.5 } : { display: 'none' };

  // Handles a change from one traitline to another.
  const handleTraitlineChange = (index) => (e) => {
    const newTraitLine = e.target.value;
    dispatch(changeTraitLine({ index, newTraitLine }));
  };

  // Handles a change from one trait to another within a traitline.
  const handleTraitChange = (index) => (e) => {
    const { tier, id: newTrait } = e;
    dispatch(changeTrait({ index, tier, newTrait }));
  };

  // handles a modifer's checkbox being toggled on or off.
  // Checkboxes which pop up for selected traits are necessary because some traits contain different conditional values.
  const handleCheckboxChange = (index, id) => (e) => {
    dispatch(toggleTraitModifier({ index, id, enabled: e.target.checked }));
  };

  const handleAmountChange = (index, id) => (e) => {
    dispatch(setTraitModiferAmount({ index, id, amount: e.target.value }));
  };

  const traitSections = [1, 2, 3].map((lineNr, index) => {
    const traitlineIdString = traitlines[index];
    const traitlineId = traitlineIdString ? parseInt(traitlineIdString, 10) : null;

    // hide checkboxes for minor traits without configuration or subtext
    const checkboxModis = [];
    const noCheckboxModis = [];
    traitSectionsById[traitlineId]?.items.forEach((itemData) => {
      const { minor, subText, amountData } = itemData;
      if (minor && !subText && !amountData) {
        noCheckboxModis.push(itemData);
      } else {
        checkboxModis.push(itemData);
      }
    });

    const note = traitSectionsById[traitlineId]?.note;

    const key = `traitNr${lineNr}`;
    return (
      <React.Fragment key={key}>
        <FormControl
          variant="standard"
          sx={{
            minWidth: 210,
            margin: 1,
          }}
        >
          <InputLabel id={`Traitline${lineNr}`}>{t('Traitline', { lineNr })}</InputLabel>
          <Select
            label={t('Traitline', { lineNr })}
            labeldid={`Traitline${lineNr}`}
            value={traitlineIdString}
            input={<Input name={t(`Traitline`, { lineNr })} id={key} />}
            onChange={handleTraitlineChange(index)}
            renderValue={(selected) => (
              <Specialization
                id={parseInt(selected, 10)}
                disableLink
                style={{ lineHeight: '1 !important' }}
              />
            )}
          >
            {data
              .map((line) => line.id)
              .filter((id) => !traitlines.includes(id.toString()) || traitlineId === id)
              .map((id) => (
                <MenuItem key={id} value={String(id)}>
                  <Specialization id={id} disableLink />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {traitlineId ? (
          <TraitLine
            id={traitlineId}
            selectable
            selected={selectedTraits[index]}
            onSelect={handleTraitChange(index)}
          />
        ) : (
          <br />
        )}
        {
          // minor traits that have an effect on the outcome of the optimization
          noCheckboxModis.length > 0 && (
            <div>
              <Typography variant="caption">
                <Trans>Minors</Trans>:{' '}
                {noCheckboxModis.map((itemData) => {
                  const { id, gw2id, subText } = itemData;
                  return (
                    <React.Fragment key={id}>
                      {gw2id && <Trait id={gw2id} disableLink />}{' '}
                      <Typography variant="caption">{subText}</Typography>
                    </React.Fragment>
                  );
                })}
              </Typography>
            </div>
          )
        }
        {
          // Major traits, that the user might want to enable or not
          checkboxModis.map((itemData) => {
            const { id, gw2id, minor, subText, amountData } = itemData;
            const visible = minor || selectedTraits[index].includes(gw2id);
            const enabled = Boolean(items[index][id]);
            const amount = items[index][id]?.amount;
            return (
              <Box
                key={id}
                style={visible ? {} : hiddenCss}
                justifyContent="space-between"
                display="flex"
                maxWidth="648px"
              >
                <Box>
                  <CheckboxComponent
                    value={id}
                    checked={visible && enabled}
                    label={
                      <>
                        {gw2id && <Trait id={gw2id} disableLink />}{' '}
                        <Typography variant="caption">
                          {
                            // i18next-extract-mark-context-next-line {{traitSubText}}
                            t('traitSubText', { context: subText })
                          }
                        </Typography>
                      </>
                    }
                    onChange={handleCheckboxChange(index, id)}
                    disabled={!visible}
                  />
                </Box>

                {amountData ? (
                  <Box>
                    <AmountInput
                      placeholder={amountData.default}
                      // i18next-extract-mark-context-next-line {{amountLabel}}
                      endLabel={t('amountLabel', { context: amountData.label })}
                      handleAmountChange={handleAmountChange(index, id)}
                      value={amount}
                      disabled={!visible || !enabled}
                      maxWidth={amountData?.label === 'dps' ? 58 : 38}
                    />
                  </Box>
                ) : null}
              </Box>
            );
          })
        }
        {note ? (
          <Box sx={{ p: 1 }} maxWidth="648px">
            <Info icon={<WarningAmberIcon />}>
              {
                // i18next-extract-mark-context-next-line {{traitNote}}
                t('traitNote', { context: note })
              }
            </Info>
          </Box>
        ) : null}
      </React.Fragment>
    );
  });

  const classNote = classModifiers[profession]?.find(
    (section) => section.section === 'Skills',
  )?.note;

  return (
    <>
      {classNote ? (
        <Box sx={{ p: 1 }} maxWidth="648px">
          <Info icon={<WarningAmberIcon />}>
            {
              // i18next-extract-mark-context-next-line {{traitNote}}
              t('traitNote', { context: classNote })
            }
          </Info>
        </Box>
      ) : null}
      {traitSections}
    </>
  );
};

export default Traits;
