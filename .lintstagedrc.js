import { ESLint } from 'eslint';

// https://github.com/lint-staged/lint-staged?tab=readme-ov-file#how-can-i-ignore-files-from-eslintignore
const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(' ');
};

export default {
  '*': ['prettier --check --cache --ignore-unknown'],
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --max-warnings=0 ${filesToLint} --cache`];
  },
};
