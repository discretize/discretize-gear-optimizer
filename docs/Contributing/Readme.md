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

This project requires [Node.js](https://nodejs.org/) and [PNPM 9](https://pnpm.io/).

Setting up your editor with [EditorConfig](https://editorconfig.org/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/) integrations is also recommended.

After cloning the repository, install its dependencies with:

```sh
pnpm install
```

If you want your development build's experimental Rust-based multicore mode to function (optional), compile the Rust code to Webassembly by [installing Rust](https://www.rust-lang.org/learn/get-started) and running:

```sh
pnpm wasm
```

To start the vite development server, which will build the site on your computer and update with your changes in real time, use:

```sh
pnpm develop
```

Note that the Rust/Webassembly code will not update in real time; the `pnpm wasm` command must be rerun to compile any changes to it.

*To install an optional pre-commit git hook that will lint and format your code before you commit it, run `pnpm enable-hooks`. Note that this does not currently perform typescript type checking. This command must be run manually whenever the git hook code is changed. To disable hooks, run `pnpm disable-hooks`.*

### Pull Requests

Feel free to open PRs for unfinished work as [draft PRs](https://github.blog/2019-02-14-introducing-draft-pull-requests/)!

Note that due to GitHub limitations, contributors without repository write access can't request reviews using the GitHub UI, so mention in a dev channel in Discord if a maintainer doesn't see that you're ready for one.

Make sure your commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).

## Project Information

### Hosting:

The optimizer is currently hosted on [Cloudflare Pages](https://pages.cloudflare.com/). This build can be accessed at [optimizer.discretize.eu](https://optimizer.discretize.eu/). For users that cannot access Cloudflare, there is also a mirror hosted on [Github Pages](https://pages.github.com/) at [discretize.github.io/discretize-gear-optimizer](https://discretize.github.io/discretize-gear-optimizer/).

Commiting to the `main` branch will automatically deploy to both hosts using the github action found in `../../.github/workflows/build-deploy.yml` unless the description of the head commit (the merge commit, if you are merging a PR) contains `[skip ci]`.

Opening a pull request will deploy a preview version to Cloudflare pages as well (action in `../../.github/workflows/previews-cf.yml`). A bot will notify about the deployment in the pullrequest. Every commit in a pullrequest will rebuild the preview. If you want to skip deploying a preview build, use `skip ci` in the commit description.

Previews can be disabled with a [no previews] comment anywhere in the PR description body, and can be force-enabled in draft PRs with a [draft previews] comment.

> todo: integrate the optimizer directly into the discretize.eu website and document its deploy process here.

### Site Framework

The site is built using [Vite](https://vitejs.dev/), which generates static sites using React.js.

To start the Vite development server, which will build the site on your computer and update with your changes in real time, use:

```sh
pnpm dev
```

Note that this builds in development mode, with verbose error messages but reduced performance. To build the site in production mode to test actual performance, you can run `pnpm build` and then `pnpm serve`, or shortcut both steps using `pnpm buildserve`.

To test changes to builds quickly in production mode, you can run `pnpm build --watch` in one terminal window and `pnpm serve` in another.

To test the Cloudflare functions used to shorten shared state links, use `pnpm cfdev` in place of `pnpm dev` or `pnpm cfbuild` and `pnpm cfserve` in place of `pnpm build` and `pnpm serve`. This will use Cloudflare's Wrangler CLI to simulate the real server using a proxy. The data generated in this local environment is stored in `.mf/kv/SHORT_LINKS/`.

For more options, run `npx vite --help`.

### UI Components

Most of the optimizer UI is built from React components from [Material UI v5](https://mui.com/).

[add something about how best to import them here]

Check out the [MUI v5 documentation](https://mui.com/) for more information.

### Styling

For styling we use emotion (comes with MUIv5) and [tss-react](https://www.tss-react.dev/). For creating styles there are two options:

1. Use the `sx` [prop](https://mui.com/system/the-sx-prop/) from emotion. All Mui components support styling with `sx`. Ideally, you only use short statements in `sx`. There are performance implications when using `sx`.
2. Use `makeStyles` from tss-react. [Example usage here](https://github.com/discretize/discretize-gear-optimizer/blob/db4e9afee6219b504cb013f79310fa801bbb3aa2/src/components/baseComponents/AffixesSelect.jsx#L29)

### GW2 Components

GW2 items, traits, skills, etc are rendered using the [gw2-ui](https://github.com/discretize/gw2-ui/tree/develop) library, created in-house for the discretize website and the optimizer by Kulinda and Princeps. This version of gw2-ui is a fork of the original one by [ManuelHaag](https://github.com/ManuelHaag/gw2-ui).

Feel free to check the [storybook](https://storybook.js.org/) [here](https://discretize.github.io/gw2-ui/?path=/story/components-attribute--boon-duration). It demonstrates most of the available props for the GW2-UI components. For more information, ask in Discord.

Alternatively you can clone the gw2-ui repository and run `yarn dev`, which will open a [storybook](https://storybook.js.org/).

### UI State

This app uses [Redux](https://redux.js.org/), including [Redux Toolkit](https://redux-toolkit.js.org/), to store and manipulate the UI state. [src/state](../../src/state) contains these files.

[Redux Saga](https://redux-saga.js.org/) is used to integrate the asynchronous optimization process with Redux.

> todo: refactor some of the frontend to more cleanly split UI view code into React components, UI updating code into Redux reducers, and the calculation itself into Redux sagas

### Core

The optimizer core itself, [/src/state/optimizer/optimizerCore.js](../../src/state/optimizer/optimizerCore.js), is a vanilla Javascript file that exhaustively loops though every possible permutation of the selected gear. It exports a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) that yields periodically so as not to freeze the browser window.

> todo: clean up and remove code and assumptions left over from old.discretize.eu

> todo: move optimization to a web worker thread

### Data

See [Data Format](<Data Format>) for information about the data files that contain the templates and presets and the data describing the effects of ingame traits, buffs, and upgrades.
