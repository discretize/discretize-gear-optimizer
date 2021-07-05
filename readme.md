# 🌌 Discretize.eu - Gear optimizer

Welcome to the source repository of gear optimizer on the [old.discretize.eu](https://old.discretize.eu) website.

## 💻 Technologies

- jQuery :O
- [armory-component-ui](https://github.com/madou/armory-component-ui) for beautiful Guild Wars 2 components and tooltips
- [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [EditorConfig](https://editorconfig.org/) for linting and formatting


## 🔄 Continuous integration

We use Github actions for continuous integration and deployment. Any push to the master branch will trigger the CI and deploy to the bucket of old.discretize.eu

| Domain                        | Branch  | Build                                                                                                                                                |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://old.discretize.eu         | master  | [![build and deploy](https://github.com/discretize/discretize-old/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/discretize/discretize-old/actions/workflows/build-deploy.yml) |

## 👨‍💻 Developing

This project requires node 10! Please make sure to select the correct version of node via nvm or a comparable software before running `yarn install`

```sh
git clone git@github.com:ManuelHaag/discretize-old.git
cd discretize-old
git submodule update --init --recursive
yarn install
gulp watch
```

## 📞 Communication

Feel free to join our [discord server](https://discord.gg/7C4TBTu) for state-of-the-art team communication.
