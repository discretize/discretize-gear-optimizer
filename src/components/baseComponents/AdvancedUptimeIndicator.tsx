import { Tooltip } from '@discretize/gw2-ui-new';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useTranslation } from 'react-i18next';
import type { AmountData } from '../../assets/modifierdata/metadata';
import { scaleValue } from '../../state/optimizer/utils/utils';
import { parseAmount } from '../../utils/usefulFunctions';

export default function AdvancedUptimeIndicator({
  amountData,
  amount,
}: {
  amountData?: AmountData;
  amount?: string;
}) {
  const { t } = useTranslation();

  if (amountData?.advancedUptimeSimulation) {
    const { value: amountInput } = parseAmount(amount);
    const uptime = scaleValue(1, amountInput, amountData);

    const active = uptime > 0 && uptime < 1;

    return (
      <Tooltip
        content={
          active
            ? t(
                'Advanced uptime simulation enabled. Select "scenarios" below for details. This will decrease calculation performance.',
              )
            : t('Advanced uptime simulation will be enabled only with <100% uptime.')
        }
      >
        <DataSaverOnIcon
          color={active ? 'info' : undefined}
          fontSize="small"
          sx={{
            verticalAlign: 'middle',
            marginInline: '0.5ch',
            alignSelf: 'center',
            opacity: active ? '1' : '0.5',
          }}
        />
      </Tooltip>
    );
  }
}

export function AppliedModifierAdvancedUptimeIndicator({
  amountData,
  amount,
}: {
  amountData?: AmountData;
  amount?: string;
}) {
  const { t } = useTranslation();

  if (amountData?.advancedUptimeSimulation) {
    const { value: amountInput } = parseAmount(amount);
    const uptime = scaleValue(1, amountInput, amountData);

    const active = uptime > 0 && uptime < 1;

    return (
      <Tooltip content={active ? t('Advanced uptime simulation enabled.') : undefined}>
        <DataSaverOnIcon
          color={active ? 'info' : undefined}
          fontSize="small"
          sx={{
            verticalAlign: 'middle',
            marginInline: '0.5ch',
            alignSelf: 'center',
            opacity: active ? '1' : '0.5',
          }}
        />
      </Tooltip>
    );
  }
}
