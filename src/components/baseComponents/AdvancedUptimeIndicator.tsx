import { Tooltip } from '@discretize/gw2-ui-new';
import DataSaverOn from '@mui/icons-material/DataSaverOn';
import { useTranslation } from 'react-i18next';
import type { AmountData } from '../../assets/modifierdata/metadata';
import { clamp, scaleValue } from '../../state/optimizer/utils/utils';
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
    const uptime = clamp(scaleValue(1, amountInput, amountData), 0, 1);

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
        <DataSaverOn
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
