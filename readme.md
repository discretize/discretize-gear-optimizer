# 🌌 Discretize.eu - Gear optimizer

Welcome to the source repository of gear optimizer on the [old.discretize.eu](https://old.discretize.eu) website.

This code is not public, but its source data is being moved to the public [discretize/discretize-guides](https://github.com/discretize/discretize-guides/tree/master/data/gear-optimizer) repository. To update the source data, commit changes to or submit pull requests to that repository, then update the submodule link here.

## 💻 Technologies

- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) and [jQuery](https://jquery.com/)
- [armory-embeds](https://github.com/madou/armory-embeds) for beautiful Guild Wars 2 components and tooltips.
- [ESLint](https://github.com/eslint/eslint) and [EditorConfig](https://editorconfig.org/) for JavaScript linting. (Formatting can be applied via [Prettier](https://github.com/prettier/prettier), though it is not automatically installed.)
- [gulp 4](https://github.com/gulpjs/gulp) for build and development scripts.


## 🔄 Continuous integration

We use Github actions for continuous integration and deployment. Any push to the master branch will trigger the CI and deploy to the bucket of old.discretize.eu

| Domain                        | Branch  | Build                                                                                                                                                |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://old.discretize.eu         | master  | [![build and deploy](https://github.com/discretize/discretize-old/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/discretize/discretize-old/actions/workflows/build-deploy.yml) |

## 👨‍💻 Developing

This project requires node 16! Please make sure to select the correct version of node via nvm or a comparable software before running `yarn install`

```sh
git clone git@github.com:ManuelHaag/discretize-old.git
cd discretize-old
git submodule update --init --recursive
yarn install
```

To start the browsersync server to see your changes live whenever you save, use:

```sh
gulp watch
```

## 📞 Communication

Feel free to join our [discord server](https://discord.gg/UDT2W6an2R) for state-of-the-art team communication.
