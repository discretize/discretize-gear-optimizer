# Discretize.eu - Gear Optimizer

The Discretize Gear Optimizer helps find the strongest equipment setups for PvE builds in [Guild Wars 2](https://www.guildwars2.com/). Its core was originally created by [ManuelHaag](https://github.com/ManuelHaag), and it has been been extended and integrated into a new React-based UI by [gw2princeps](https://github.com/gw2princeps), [marcustyphoon](https://github.com/marcustyphoon), and contributors from the Discretize community!

Special thanks to hundreds of players across the GW2 theorycrafting community whose research and testing form our understanding of the combat system and are reflected across this code.

To learn about how the math works and its limitations, see [How It Works](<How It Works.md>)!

## Usage

The optimizer is hosted publicly at [optimizer.discretize.eu](https://optimizer.discretize.eu/). Development branches that are not from forks can be previewed using the automatic Cloudflare preview links in the branch thread.

There is a mirror of the optimizer at [discretize.github.io/discretize-gear-optimizer](https://discretize.github.io/discretize-gear-optimizer/) if the primary host cannot be accessed.

If you have an idea for a feature or improvement or find a bug, create a new issue in the Issues tab of this repository, or send us a message in our [Discord server](https://discord.gg/UDT2W6an2R)!

## Features

- Use preset templates to easily optimize common fractal builds.
- Optimize for damage output, effective health pool, or outgoing healing.
- Lock slots to specific gear types and limit stat infusions to certain quantities to work with what you already have or share gear between multiple builds.
- Specify minimum boon duration and/or healing power quantities.
- Provide a specific toughness range, such as to become or avoid becoming the tank on raid bosses with toughness-based tanking.
- Calculate the relative performance difference between setups. Estimate the value of stat infusions, buffs, or certain build changes! (Some limitations apply, see [How It Works](<How It Works.md>).)

Supports all 9 classes and 35 of the 36 current elite specs*, including power and condi builds with distribution information derived from game logs.

Not-yet-implemented game mechanics include mechanist mech simulation and ranger pet damage.

**sorry, mechanist.*

## Development and Contributing

See the [contributing information in the docs folder](./Contributing) to learn about contributing to the project!

## Roadmap

See the Projects tab of this repository for planned features and improvements and known bugs.

## Technologies

- [Vite](https://vitejs.dev/) as a static site builder
- [React](https://reactjs.org/)
- [gw2-ui](https://github.com/discretize/discretize-ui) for beautiful Guild Wars 2 components and tooltips
- [redux](https://github.com/reduxjs/redux) and
- [Material UI v5](https://material-ui.com/) and [emotion](https://emotion.sh/docs/introduction) for styling
- [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [EditorConfig](https://editorconfig.org/) for linting and formatting

## License

The Gear Optimizer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The Gear Optimizer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
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
