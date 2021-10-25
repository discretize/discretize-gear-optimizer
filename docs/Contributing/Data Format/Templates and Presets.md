# Overview

(This section of the data will probably get refactored at some point. This section subject to change.)

The data located in [/src/assets/presetdata](../../../src/assets/presetdata) specifies presets for combinations of gear affixes, selected buffs, selected traits, selected "extras" (runes/sigils/food/utility) and distribution values, and combinations of those presets to form build templates.

For the most part, this data is currently formatted as YAML metadata containing indented text blocks, which are copied from the optimizer's Redux state:

```yaml
  - name: Preset Name
    value: >-
      {
        "this": "part",
        "is": "embedded",
        "JSON": "!"
      }
```

## preset-traits.yaml

This file currently contains the metadata for the build templates as well as their trait, skill, and extras data.

> todo: extract this out to templates.yaml and preset-extras.yaml

```yaml
      - name: CFB DPS
        id: cfb
        specialization: Firebrand
        boons: 'Condi'
        priority: Condi DPS
        distribution: 'CFB (Virtues, 5 page, allies)'
        traits: >-
          {
              "profession": "GUARDIAN",
          ...etc
```

The JSON section of these entries can be easily copied from the optimizer from the accordion at the bottom of the page labelled "Development." (Hopefully you have a YAML editor that can auto indent!)

## preset-buffs.yaml

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

## preset-distribution.yaml

The JSON section of these entries can be easily created from the optimizer from the accordion at the bottom of the page labelled "Development." (Hopefully you have a YAML editor that can auto indent!)

To do so, test the build in question ingame and measure its DPS output (power, burning, bleeding, etc). [Arcdps](https://www.deltaconnected.com/arcdps/) logs can be processed with [Elite Insights](https://github.com/baaron4/GW2-Elite-Insights-Parser) on your PR or through [dps.report](https://dps.report/) to easily obtain this information. Be sure to choose a scenario that best represents what you want to optimize for, like benchmarking with allies when relevant.

Then, force the optimizer to run the tested scenario as closely as possible, and enter the measured DPS into the tool at the bottom of the optimizer's results section under "Development."

The optimizer calculates what skill coefficient slider inputs would result in the measured ingame damage output with the currently selected settings and gear.

```yaml
  - name: Power Banner Warrior
    profession: BERSERKER
    value: >-
      {
        "values1": { "Power": 93, "Burning": 7, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 },
        "values2": { "Power": 3089, "Burning": 0.7, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
      }
```