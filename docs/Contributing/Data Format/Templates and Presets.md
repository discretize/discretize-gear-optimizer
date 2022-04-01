# Overview

(This section of the data will probably get refactored at some point. This section subject to change.)

The data located in [/src/assets/presetdata](../../../src/assets/presetdata) specifies presets for combinations of gear affixes, selected buffs, selected traits, selected "extras" (runes/sigils/food/utility) and distribution values, and combinations of those presets to form build templates.

This data is currently formatted as YAML metadata containing indented text blocks, which can be easily copied from the optimizer from the accordion at the bottom of the page labelled "Development."

```yaml
  - name: Preset Name
    value: >-
      {
        "this": "part",
        "is": "embedded",
        "JSON": "!"
      }
```

## templates.yaml

This file contains the metadata for the build templates.

```yaml
      - name: CFB DPS 5 page
        id: cfb
        specialization: Firebrand
        boons: Condi
        priority: Condi DPS
        distribution: CFB (Virtues, 5 page, allies)
        traits: CFB DPS 5 page
        extras: CFB DPS
```

You can run `yarn testPresets` in a clone of the repository to run the testPresets.js script, which will make sure the boons, priority, distribution, traits, and extras all refer to entries in the other YAML files.

This script will be run automatically by GitHub when you push to a the source branch of an open pull request if it is not set to draft, so don't worry if you don't want to set up NPM and Yarn just for this!

## preset-buffs.yaml

Buff presets do not have a `profession` key (they are all always shown).

```yaml
  - name: Condi
    value: >-
      {
        "might": true,
        "fury": true,
        "protection": true,
        "vulnerability": true,
        "assassinsPresence": true
      }
```

## preset-affixes.yaml

Affix presets do not currently have a `profession` key (they are all always shown).

> todo: figure out whether and how to further customize min boon duration (refactor?)

```yaml
  - name: Condi DPS
    value: >-
      {
        "affixes": ["VIPER", "SINISTER"],
        "optimizeFor": "Damage",
        "minBoonDuration": 0
      }
```

## preset-traits.yaml

```yaml
  - name: CFB DPS 5 page
    profession: Firebrand
    traits: |-
      {
        "showAll": false,
        "selectedLines": [
          "16",
          "46",
          
          [...etc]
      }
    skills: |-
      {
        "skills": {
          "signet-of-wrath": {
            "amount": ""
          }
        }
      }
```

## preset-extras.yaml

```yaml
  - name: CFB DPS
    profession: Firebrand
    value: |-
      {
        "Runes": "balthazar",
        "Sigil1": "bursting",
        "Sigil2": "",
        "Enhancement": "toxic-focusing-crystal",
        "Nourishment": "beef-rendang"
      }
```

## preset-distribution.yaml

To generate distribution data, test the build in question ingame and measure its DPS output (power, burning, bleeding, etc). [Arcdps](https://www.deltaconnected.com/arcdps/) logs can be processed with [Elite Insights](https://github.com/baaron4/GW2-Elite-Insights-Parser) on your PC or through [dps.report](https://dps.report/) to easily obtain this information. Be sure to choose a scenario that best represents what you want to optimize for, like benchmarking with allies when relevant.

Then, force the optimizer to run the tested scenario as closely as possible, and enter the measured DPS into the tool at the bottom of the optimizer's results section under "Development."

The optimizer calculates what skill coefficient slider inputs would result in the measured ingame damage output with the currently selected settings and gear.

```yaml
  - name: CFB (Virtues, 5 page, allies)
    profession: Firebrand
    value: >-
      {
        "values1": { "Power": 30, "Burning": 65, "Bleeding": 3, "Poisoned": 0, "Torment": 1, "Confusion": 0 },
        "values2": { "Power": 2325, "Burning": 15.2, "Bleeding": 4.8, "Poisoned": 0, "Torment": 1.3, "Confusion": 0 }
      }
```