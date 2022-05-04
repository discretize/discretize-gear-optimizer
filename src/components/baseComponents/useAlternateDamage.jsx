import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfession } from '../../state/slices/controlsSlice';

const useAlternateDamage = () => {
  const { t } = useTranslation();
  const profession = useSelector(getProfession);

  switch (profession) {
    case 'Mesmer':
      return [t('Power (Illusion)'), true];
    case 'Necromancer':
      return [t('Power (Shroud)'), true];
    default:
      return [t('Power (Alternate)'), false];
  }
};

export default useAlternateDamage;
