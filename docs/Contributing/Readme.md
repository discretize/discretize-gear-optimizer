
# Contributing

Thanks for considering contributing to the gear optimizer!

## Communication and Planning

For real-time coordination with other developers and contributors, feel free to join the [Discretize discord server](https://discord.gg/UDT2W6an2R)! To establish initial contact write a message in the `#gear-optimizer` channel. 

The Projects tab of this repository contains a to-do list of features, improvements, and bug fixes for reference. (Contributors without repository write access cannot directly make/propose changes to GitHub project boards, unfortunately). Ideally you will create an issue based on the open cards on the Projects board, which the maintainers then integrate into the board. The issue should contain data, which is important to understand the resolution process and to avoid duplicate work. 

> todo: improve project board automation

## Getting Started

To contribute to this repository, create a fork, make improvements, and submit a pull request with your changes! If you're new to GitHub, check out the [GitHub guides](https://guides.github.com/) to learn about forks.

To work on the optimizer's JavaScript code, you can clone your fork build the site locally, so you can see and debug your changes in real time.

This is optional if you just want to contribute to the optimizer's database and aren't familiar with using the command line. If so, skip the next section!

### Building the Site

This project requires [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/). We recommend installing Node using a version manager like NVM so you can easily switch to the correct version for different projects ([here are some methods to do so](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

Setting up your editor with [EditorConfig](https://editorconfig.org/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/) integrations is also recommended.

After cloning the repository, install its dependencies with:

```sh
yarn install
```

To start the gatsby-cli development server, which will build the site on your computer and update with your changes in real time, use:

```sh
yarn develop
```

### Pull Requests

Be sure to base your development work and pull requests on the `staging` branch - this isn't the default!

Feel free to open PRs for unfinished work as [draft PRs](https://github.blog/2019-02-14-introducing-draft-pull-requests/)!

Note that due to GitHub limitations, contributors without repository write access can't request reviews using the GitHub UI, so mention in a dev channel in Discord if a maintainer doesn't see that you're ready for one.

Make sure your commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).

## Project Information

### Repository:

Discretize projects do development work on the `staging` branch and periodically merge changes into the `main` branch. 

At present, this project is built directly off `staging` while in beta; the plan is to integrate `main` into the discretize.eu website, which will benefit from a slower release cycle.

### Hosting:

The optimizer is currently hosted on [Github Pages](https://pages.github.com/). Pushing to the `staging` branch of this repository will automatically deploy to Github Pages using the [gh-pages](https://www.npmjs.com/package/gh-pages) package in a Github action, unless the description of the head commit (the merge commit, if you are merging a PR) contains `[skip ci]`.

> todo: integrate the optimizer directly into the discretize.eu website and document its deploy process here.

### Site Framework

The site is built in [Gatsby v3](https://www.gatsbyjs.com/), which generates static sites using React.js.

To start the gatsby-cli development server, which will build the site on your computer and update with your changes in real time, use:

```sh
yarn develop
```

Note that this builds in development mode, with verbose error messages but reduced performance. To build the site in production mode to test actual performance, you can run `yarn build --profile` and then `yarn serve`, or shortcut both steps using `yarn profile`. 

Check out the [Gatsby documentation](https://www.gatsbyjs.com/docs/) for more information.

### UI Components

Most of the optimizer UI is built from React components from [Material UI v4](https://material-ui.com/).

[add something about how best to import them here]

Check out the [MUI v4 documentation](https://v4.mui.com/) for more information.

> todo: migrate to MUI v5

### Styling

> todo: document styling solution

(this will change with MUI v5)

### GW2 Components

GW2 items, traits, skills, etc are rendered using the [gw2-ui](https://github.com/ManuelHaag/gw2-ui) library, created in-house for the discretize website and the optimizer. The latest version with performance improvements is actually currently on [a branch in Princeps' fork](https://github.com/gw2princeps/gw2-ui/tree/refactor-build), which is published to NPM as gw2-ui-bulk.

> todo: fix the branching mess on princeps' gw2-ui repo

Running `yarn develop` in a clone of that repository will open a [storybook](https://storybook.js.org/) which demonstrates most of the available props for the GW2-UI components. For more information, ask in Discord. 

### UI State

This app uses [Redux](https://redux.js.org/), including [Redux Toolkit](https://redux-toolkit.js.org/), to store and manipulate the UI state. [src/state](../../src/state) contains these files.

[Redux Saga](https://redux-saga.js.org/) is used to integrate the asynchronous optimization process with Redux.

> todo: refactor some of the frontend to more cleanly split UI view code into React components, UI updating code into Redux reducers, and the calculation itself into Redux sagas

### Core

The optimizer core itself, [/src/state/optimizer/optimizerCore.js](../src/state/optimizer/optimizerCore.js), is a vanilla Javascript file that exhaustively loops though every possible permutation of the selected gear. It exports a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) that yields periodically so as not to freeze the browser window.

> todo: clean up and remove code and assumptions left over from old.discretize.eu

> todo: move optimization to a web worker thread

> todo (maybe): port optimization to webassembly

### Data

See [Data Format](<Data Format>) for information about the data files that contain the templates and presets and the data describing the effects of ingame traits, buffs, and upgrades.
