import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfession } from '../../state/slices/controlsSlice';
import { type ProfessionName } from '../../utils/gw2-data';

const useAlternativeDamage = (): [string, boolean] => {
  const { t } = useTranslation();
  const profession = useSelector(getProfession);

  switch (profession) {
    case 'Mesmer':
      return [t('Power (Illusion)'), true];
    case 'Necromancer':
      return [t('Power (Shroud)'), true];
    default:
      return [t('Power (Alternative)'), false];
  }
};

export default useAlternativeDamage;

export const useAlternativeDamage2 = (profession: ProfessionName): [string, boolean] => {
  const { t } = useTranslation();

  switch (profession) {
    case 'Mesmer':
      return [t('Power (Illusion)'), true];
    case 'Necromancer':
      return [t('Power (Shroud)'), true];
    default:
      return [t('Power (Alternative)'), false];
  }
};
