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

The JSON section of these entries can be easily generated from the optimizer by opening the Javascript console after running any optimization. Template creation data is logged there, which can be copied as JSON with a right click. Hopefully you have a YAML editor that can auto indent!

<img src="https://user-images.githubusercontent.com/8336245/137229434-baaa5c7d-3ea5-4113-9be7-0f36f9a38dae.png" width="775">

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

> todo: remove the old "distribution" key that was used in the old optimizer

```yaml
  - name: Power Banner Warrior
    profession: BERSERKER
    distribution: [93, 100, 100, 100, 100]
    value: >-
      {
        "values1": { "Power": 93, "Burning": 7, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 },
        "values2": { "Power": 3089, "Burning": 0.7, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
      }
```