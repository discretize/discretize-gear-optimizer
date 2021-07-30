# 🌌 Discretize.eu - Gear optimizer

Welcome to the source repository of the gear optimizer on the [old.discretize.eu](https://discretize.eu) website. The gear optimizer calculates the most optimal gearset for a given build of the game Guild Wars 2. 

## 💻 Technologies

- [Gatsby v3](https://www.gatsbyjs.org/) as a static site builder
- [React](https://reactjs.org/)
- [gw2-ui](https://github.com/ManuelHaag/gw2-ui) for beautiful Guild Wars 2 components and tooltips
- [redux](https://github.com/reduxjs/redux) and 
- [redux-saga](https://github.com/redux-saga/redux-saga) to manage our state
- [Material UI v4](https://material-ui.com/) and [JSS](http://cssinjs.org) for styling
- [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [EditorConfig](https://editorconfig.org/) for linting and formatting

## 🔄 Continuous integration

We use Github actions for continuous integration and deployment. Any push to the master branch will trigger the CI and deploy to the bucket of old.discretize.eu

| Domain                        | Branch  | Build                                                                                                                                                |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://old.discretize.eu         | master  | [![build and deploy](https://github.com/discretize/discretize-old/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/discretize/discretize-old/actions/workflows/build-deploy.yml) |

## 👨‍💻 Developing

This project requires node 16! Please make sure to select the correct version of node via nvm or a comparable software before running `yarn install`

```sh
git clone git@github.com:discretize/discretize-old.git
cd discretize-old
yarn install
```

To start the browsersync server to see your changes live whenever you save, use:

```sh
yarn develop
```

## Contributing

Make sure your commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).

## 📞 Communication

Feel free to join our [discord server](https://discord.gg/UDT2W6an2R) for state-of-the-art team communication.

## License

The Gear Optimizer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The Gear Optimizer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with discretize-gear-optimizer. If not, see <http://www.gnu.org/licenses/>.

### Additional permission under GNU GPL version 3 section 7

_The source files of discretize-gear-optimizer without any exception have
the following additional permission, as allowed under GNU GPL version 3
section 7:_

If you modify this Program, or any covered work, by linking or
combining it with the project for the discretize.eu website, 
containing parts covered by the terms of the respective license agreement, 
the licensors of this Program grant you additional permission to convey 
the resulting work.
