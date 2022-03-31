We use [react-i18next](https://react.i18next.com/) for localization. All you need to know can be found in this link. However, since I'm such a nice guy I will sum it up.

## Finding translatable strings

The first step is to find occurrences of english language in the code. When you find such an occurrence, you have two options to instruct React that this is a translatable string.

1. Wrap the string in a `Trans` component:

```js
import { Trans } from 'react-i18next';

<Trans>
  The gear optimizer is currently in beta! Templates are not final and phantasm and lifesteal damage
  is inaccurate. Please report potential issues to us in
</Trans>;
```

2. Alternatively, in case the string is a props you can translate it with the `useTranslation` hook and executing the `t`-function on the string:

```js
import { useTranslation } from 'react-i18next';

const ARSection = ({ first }) => {
  const { t } = useTranslation();

  return (
    <Section
      title={
        <>
          <Attribute name="Agony Resistance" disableLink disableText />{' '}
          <Trans>Agony Resistance</Trans>
        </>
      }
      first={first}
      helpText={t('Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration.')}
      content={<ARinput />}
    />
  );
};
```

## Preparing the translation.json file: extract!

Now that you found all the translations it would be a lot of work to manually copy paste them in the translation files, right? You don't have to! There is a system in place which extracts all the components wrapped via `Trans` or `t`-function. Simply execute `yarn extractLocale` and you will find a file `locale/en/translation.json`. Feel free to copy it over to `locale/zh/translation.json` and start translating.

## Important notes

Sometimes there are components disrupting a string or causing a string to change dynamically based on some condition. In that case just add all the different variations manually to the translation file.

The file `babel-extract.config.js` contains the config values for extraction. Specifically interesting is the option `discardOldKeys`. You might wanna switch it around depending on how you work best.
