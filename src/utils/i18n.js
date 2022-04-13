import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from '../../locales/de/translation.json';
import en from '../../locales/en/translation.json';
import zh from '../../locales/zh/translation.json';
import { loadedSettings } from '../state/slices/userSettings';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  zh: {
    translation: {
      ...zh,
    },
  },
  de: {
    translation: {
      ...de,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: loadedSettings?.language || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
