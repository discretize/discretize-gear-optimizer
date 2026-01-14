# Overview

The data located in [/src/assets/modifierdata](../../../src/assets/modifierdata) specifies what effect each trait, passive-buffing skill, rune, sigil, food, utility, and buff has on your character.

You can run `pnpm testData` in a clone of the repository to run the `testData.js` script, which will check every YAML file in this folder for most possible mistakes or omissions. This script will be run automatically by GitHub when you push to a the source branch of an open pull request, including draft PRs, so don't worry if you don't want to set up Node and PNPM just for this!

Note that this script is not perfect and may have bugs, so ask in Discord if something seems off or if you're not sure what the problem is!

You can also run `pnpm validateDataTypes` in the same way, which will verify that the Typescript types in `metadata.ts` describe the data correctly.

# Format

This data format was originally proposed in the [data format notes wiki page](https://github.com/discretize/discretize-gear-optimizer/wiki/data-format-notes) and some of the information there about future plans is still relevant.

### Organization:

Buffs, food, utility, sigils, and runes are split into sections for organization within the user interface.

Each class has a section for skills and a section for each traitline's traits. Note that there can be more than one item per individual trait, which you should do if a trait has more than one effect which the user might want to individually enable/disable (i.e. a trait with both a flat buff and an effect when using a greatsword).

### Example

```yaml
    - id: example
      text: Example Item
      subText: with hammer
      minor: true
      amountData:
        label: '% uptime'
        default: 50
        quantityEntered: 100
      modifiers:
        damage:
          Outgoing Strike Damage: [10%, mult]
          Outgoing All Damage: [20%, add]
          Outgoing Critical Damage: [20%, unknown]
          Burning Damage: [33%, unknown]
        attributes:
          Ferocity: [100, converted]
          Healing Power: [30, buff]
          Condition Damage: [60, converted]
          Critical Chance: 20%
          Quickness Duration: 10%
          Torment Duration: 25%
          Outgoing Healing: 5%
        conversion:
          Power: {Precision: 3%, Ferocity: 6%}
          Expertise: {Toughness: 3%}
          Outgoing Healing: {Healing Power: 0.006%}
      gw2id: 1234
      type: CommonEffect # gw2-ui component type (only used in buffs)
      defaultEnabled: true
```

(Of course you would never have all of these keys at once unless Arenanet runs out of expansion ideas and decides to go nuts.)

# Modifiers Section

> This section should align with [src/assets/modifierdata/metadata.js](../../../src/assets/modifierdata/metadata.js) but is not often updated; check that file for up-to-date information.

These fields apply to the required `modifiers` and optional `wvwModifiers` sections. `wvwModifiers`, if present, will completely override `modifiers` in WvW mode.

## damage

`key: [percentage amount, stacking mode]`

This section contains percentage bonuses to incoming/outgoing damage. One must specify if they stack additively or multiplicatively with each other, information which GW2 does not display anywhere and which must be inferred from ingame testing and arithmetic.

Two 50% multiplicative modifiers combine like this: (1 + 0.50) \* (1 + 0.50) = 2.25 => equivalent to one 125% modifier

Two 50% multiplicative modifiers combine like this: 1 + (0.50 + 0.50) = 2.00 => equivalent to one 100% modifier

**Keys:**

- Outgoing Strike Damage
- Outgoing Condition Damage
- Outgoing All Damage
- Damage Reduction
- Condition Damage Reduction
- Outgoing Critical Damage
- Outgoing Bleeding Damage
- Outgoing Burning Damage
- Outgoing Confusion Damage
- Outgoing Poison Damage
- Outgoing Torment Damage
- Outgoing Alternative Damage (i.e. in reaper shroud)
- Outgoing Alternative Critical Damage (i.e. in reaper shroud)
- Outgoing Phantasm Damage
- Outgoing Phantasm Critical Damage
- Outgoing Siphon Damage

(Note that the individual conditions' stacking modes don't currently matter, as I don't know of a way to have more than one.)

**Percentage amounts:**

These should always be percentages. (The percent character is technically meaningless; it's just there to clarify that these are percentages.)

**Stacking modes:**

- mult
- add
- target
- unknown

Use "unknown" if you don't know how a modifier stacks (defaults to "mult" at the moment, though better guesses may come in the future).

Use "add" for certain damage buffs that stack additively with each other. (Note that generic outgoing condition damage buffs have all been additive so far.)

Use "target" for damage buffs that are the result of an effect not on the player but on the target (vulnerability + exposed), which stack additively with each other separately from the other category. Yep, GW2's math is weird.

If an effect has both an additive and a multiplicative component, you can specify both with e.g. `Outgoing Strike Damage: [3%, add, 7%, mult]`. Yep, the syntax is kinda bad, sorry.

## attributes

`key: [amount of points, conversion mode]`

`key: percentage amount`

This section contains bonuses to player stats/attributes. Some are bonuses to attribute points (usually primary/secondary attributes), others are bonuses to percentages (usually derived attributes).

For attribute point bonuses, one must specify if they have an effect on "gain X based on Y" conversions like sharpening stones, information which GW2 does not display anywhere and which must be inferred from ingame testing and arithmetic.

**Keys (points/conversion):**

- [all 9 primary attributes]
- Agony Resistance
- Armor
- Alternative Power (i.e. in reaper shroud)
- Alternative Precision (i.e. in reaper shroud)
- Alternative Ferocity (i.e. in reaper shroud)

**Keys (percentage):**

- Critical Chance
- Alternative Critical Chance (i.e. in reaper shroud)
- Phantasm Critical Chance
- Clone Critical Chance
- Boon Duration
- [all 12 boons] Duration
- Condition Duration
- Condition Duration Uncapped (see https://github.com/discretize/discretize-gear-optimizer/pull/677)
- Bleeding Duration
- Burning Duration
- Confusion Duration
- Poison Duration
- Torment Duration
- Maximum Health
- Outgoing Healing

**Keys (coefficient):**

- Power Coefficient
- NonCrit Power Coefficient (for e.g. air sigil)
- Power2 Coefficient (i.e. in reaper shroud)
- Bleeding Coefficient
- Burning Coefficient
- Confusion Coefficient
- Poison Coefficient
- Torment Coefficient
- Siphon Coefficient
- Siphon Base Coefficient (portion of lifesteal damage unaffected by power)
- Flat DPS (not affected by any stat)

**Conversion modes:**

- converted
- buff
- unknown

Use "unknown" if you don't know if a modifier is converted (defaults to "buff" at the moment, though better guesses may come in the future).

## conversion

`destination: {source 1: percentage amount 1, source 2: percentage amount 2}`

This section contains "gain X based on Y" stat conversions like sharpening stones.

**Destinations:**

- various

**Sources:**

- [all 9 primary attributes]
- Agony Resistance
- Armor

Note that you can just as easily write

```
conversion:
  destination:
    source 1: percentage amount 1
    source 2: percentage amount 2
```

if you prefer. (YAML supports switching from indentation to braces at any depth.)

## conversionAfterBuffs

`destination: {source 1: percentage amount 1, source 2: percentage amount 2}`

Similar to `conversion`, but sourced after other buffs are applied. This is used for on-critical-hit effects, so that their strength is scaled by the player's critical chance value.

**Destinations:**

- various

**Sources:**

- Critical Chance
- Clone Critical Chance
- Phantasm Critical Chance

## calculationTweaks

`key: arbitrary value`

This section contains flags that trigger arbitrary code paths in the simulation module that would otherwise be impossible to represent with this data format.

*Note: if a calculation tweak key is used in multiple modifiers that could be applied at once, it should have the same value, as only one will be read and which one takes precedence is undefined behavior.*

**Keys:**

- `infernoBurningDamage: true` enables the Inferno trait's alternative power-scaling burning damage calculation.
- `sharpshooterBleedingDamage: true` enables the Sharpshooter trait's alternative power-scaling bleeding damage calculation. 

# Amount Section

The `amountData` object allows trait effects to specify that the user can change the amount of the effect in the optimizer UI. This can be used for stacking effects/per-boon or per-condition effects, for effects that are triggered with some average frequency, or to simulate effects with non-100% uptimes. (Of course, simulating 60% uptime of an effect as having 60% of the effect impact is an approximation that is only accurate if a class' damage output isn't very spiky.)

**Special Considerations: Attribute Caps**

By default, effects will be *linearly scaled up or down* based on how the user-specified amount compares to the `quantityEntered` value. This is a perfect simulation of a stacking effect with a constant number of stacks, and a reasonable approximation of most stacking effects with a varying average number of stacks or most uptime-based effects. For example:

<details>
<summary>Examples:</summary>

- The damage dealt by a character with a **fluctating average of 10 might stacks** is generally equal to that of a character with **exactly 10 might stacks**, or **halfway between that dealt with 0 and with 20**, because the power attribute has a linear effect on DPS.
- The damage dealt by a character with **100 extra power half the time** is generally equal to that of a character with **50 extra power all of the time**, or **halfway between that dealt with 0 and with 100 all of the time**, because the power attribute has a linear effect on DPS.

</details>

This not true for the attributes that can hit a cap: critical chance, condition duration, and stat points that affect them (precision, expertise).

<details>
<summary>Examples:</summary>

- The damage dealt by a character with a **fluctating average of 95% condition duration (of expertise points)** is not equal to that of a character with **exactly 95% condition duration**, or **halfway between that dealt with 85% and with 105%**, because they were over the cap some of the time and wasted some of their stat points.
- The damage dealt by a character with **7% extra critical chance half the time** is not equal to that of a character with **3.5% extra critical chance all of the time**, or **halfway between that dealt with 0% and with 7% all of the time**... if their baseline critical chance was 96.5%, so they're always wasting half their bonus!

</details>

Modifiers that affect these attributes and which will fluctuate or have inconsistent uptimes enough that users will want to simulate them accurately should thus specify `advancedUptimeSimulation`, which will cause the optimizer not to scale them up and down. Instead, a *separate simulation will be run for both/all modifier states* (see below). This is slow and complicated, especially when multiple modifiers specify this, so only do so when it would be legitimately useful (where possible, create a modifier entry for 100% uptime or for exactly n stacks instead).

Modifiers that affect these attributes for which the user's specified stack count can be assumed to always be accurate don't need this. Set `disableBlacklist: true` on a modifier to acknowledge and disable the warning given by the testModifers script when this is the case.

**Special Considerations: Attribute Targets**

In addition to damage optimization, the gear optimizer allows a boon duration target or survivability target to be set. This brings up questions such as whether having 100% boon duration half the time and 60% the other half of the time fulfill an 80% boon duration requirement. It depends!

To prevent confusion, prefer entries for 100% uptime or for exactly n stacks of modifiers that fluctuate or have inconsistent uptimes and affect boon durations, toughness, damage reduction, or maximum health.

Modifiers that affect these attributes for which the user's specified stack count can be assumed to always be accurate are fine. Set `disableBlacklist: true` on a modifier to acknowledge and disable the warning given by the testModifers script when this is the case.

### label

The label following the text in the textbox used to enter the amount. Should start with `%` if the user is to enter a percentage.

Note that strings beginning with a % character must be quoted in YAML files.

### default

The default quantity to simulate if the user does not specify one. This is a judgement call; just try and make reasonable assumptions about the most likely setup with this trait selected.

### defaultInput (optional)

Initial text to fill the quantity box with; use `???` (and set `default` to `0`) to indicate that the user definitely needs to specify this quantity manually to use this effect.

### quantityEntered

The quantity corresponding to the base modifier data you have specified.

For example, might could be entered as `Power: [30, buff]` with `quantityEntered: 1`. It could, with the exact same result, be entered as `Power: [750, buff]` with `quantityEntered: 25`. Do whichever you want!

### disableBlacklist (optional)

This tells the testModifiers script not to warn you if you use amountData with the aforementioned values to be careful about. Don't be afraid to use this when it makes sense to, such as for Target the Weak (gain critical chance per condition on your opponent).

### advancedUptimeSimulation

When this property is set, separate simulations ("scenarios") will be run independently with and without this modifier, and a weighted average will be taken as the result. If multiple modifiers have this property set, scenarios will be run for each combination of having/not having each modifier.

The value this property is set to determines how multiple advanced uptime modifiers will interact when creating scenarios. Modifers can be uncorrelated:

```yaml
        advancedUptimeSimulation:
          correlation: false
```

Multiple uncorrelated modifiers are simulated as if they overlap according to their combined percentages. For example, 40% severance sigil uptime and 30% fire signet uptime would be simulated as *12% both, 28% just severance, 18% just fire, and 42% neither*. Note that this might not be correct—maybe the rotation overlaps them, and it should thus be *30% both, 10% just severance, 0% just fire, and 60% neither*—and if this is the case, the optimization result will be based on overestimating or underestimating how often and how much the user might be over the crit cap and won't be accurate.

Modifers can also be correlated, taking a `category` and `group` value:

```yaml
        advancedUptimeSimulation:
          correlation:
            category: scholar
            group: true
```

```yaml
        advancedUptimeSimulation:
          correlation:
            category: troubadour-instruments
            group: '1'
```

If two modifiers have the same category and the same group value, the optimizer enforces that the user-entered amounts are the same, and a single scenario will be created with both modifiers applied. For example, all "player is above 10% health" effects will thus be combined into a "player is above 10% health" scenario (and corresponding empty "player is not above 10% health" scenario).

If two modifiers have the same category and a different group value, a set of non-overlapping scenarios will be created for each group value. For example, enabling multiple fortissimo modifier entries and entering 60% uptime on "1 troubador instrument" and 30% uptime on "2 troubador instruments" will produce exactly those two scenarios (and a corresponding empty scenario for the remaining 10% of the time—presumably "no troubador instruments").

As a final example, entering 60% uptime on "1 troubador instrument", 30% uptime on "2 troubador instruments", and 50% uptime on "severance sigil" (which isn't coordinated) would produce:

- 30% 1 instrument
- 30% 1 instrument, severance
- 15% 2 instruments
- 15% 2 instruments, severance
- 5% nothing
- 5% severance

Running the gear optimizer, selecting partial uptimes for the modifiers one is testing, and clicking the floating blue scenario info button to the lower right can be used to verify scenario functionality.

## Metadata

#### id

This string should uniquely identify the effect, as it's used throughout the codebase. Avoid special characters.

#### text

Usually unused (the optimizer just simulates the ingame UI using the gw2-UI library), but currently used in food items to show both regular and ascended variants.

> todo: possibly deprecate or remove this

#### textOverride (optional)

Used to override the UI text when representing something like "a slaying potion" that isn't represented by the single ingame item shown.

#### subText (optional)

Clarification text used to specify under what conditions this effect is being simulated and/or what sub-effect this is if there's more than one item for a trait.

#### minor (optional, traits)

Specifies if this is a minor trait (it will be displayed if its parent traitline is selected).

Minor traits without subtext or amount data are assumed to be always-on; if this minor trait effect should have a checkbox, add subtext indicating what condition its effect depends on.

#### gw2id (optional)

Numerical GW2 id of this effect. To find this, hover your mouse over the chatcode in the box on the right side of the GW2 wiki or file search in the files in [src/utils/mapping](../../../src/utils/mapping). Make sure your item is described in `subText` if not specifying a GW2 id to display.

#### displayIds (optional; extras only)

Array of numerical GW2 ids to show in the selection modal, if more than one item in the game has this effect.

#### priceIds (optional; extras only)

Array of numerical GW2 ids to select the cheapest price from if "show prices" is checked in the selection modal, if more than one item in the game has this effect. (This can be more complete than the displayIds list, which must be short enough not to overflow the UI.)

#### type (buffs only)

> source: [src/components/sections/buffs/Buffs.jsx](../../../src/components/sections/buffs/Buffs.jsx)

`Boon`, `Skill`, `Trait`, `CommonEffect`, `Condition`, `Aura`, or `Text`; used to specify what kind of component to use to render buffs.

(Food, utilities, runes, and sigils are always items; skills are always skills; traits are always traits. This can be changed if needed.)

#### componentNameProp (buffs only)

> source: [src/components/sections/buffs/Buffs.jsx](../../../src/components/sections/buffs/Buffs.jsx)

String used to set the "name" property passed to gw2-ui to render buffs.

#### defaultEnabled (traits only)

Specifies if this effect's checkbox should be checked when the user selects the corresponding trait for the first time. Often true. This is a judgement call; just try and make reasonable assumptions about the most likely setup with this trait selected.

#### hasLifesteal (optional; food only)

Specifies if this food effect should add lifesteal equal to the "lifesteal frequency" box in the UI.

#### temporaryBuff

Used for unbuffed, out-of-combat hero panel simulation. Required unless the item has no `attributes`, `conversion` or `conversionAfterBuffs` fields (and thus it can't affect the hero panel).

- `true`: This effect is temporary; exclude it from the out-of-combat hero panel simulation. (Alternatively: this effect is never shown in the hero panel; exclude it from the out-of-combat hero panel simulation.)
- `false`: Always include this effect.
- `'activeOutOfCombat'`: This effect is temporary, but it reasonably would or could be active at character idle (e.g. utility writs, signet passive effects, "when wielding a rifle" conditional effects). Include this effect in the the out-of-combat hero panel simulation, ignoring its `amountData` field.

This `activeOutOfCombat` implementation errs on the side of **including** both "when wielding a two-handed weapon" and "when wielding a one-handed weapon" buffs on e.g. dragonhunter, both "when in air attunement" and "when in fire attunement" on elementalist, etc. This can be inaccurate to the ingame hero panel. **Excluding** all of those effects would, of course, also be inaccurate to the ingame hero panel in some cases.

We can come up with standard rules for this in some cases for more consistency, but it will never be perfect (a condi ranger could plausibly have any combination of axe, torch, and dagger; good luck).

Currently used rules:

- Elementalist: assume the user is in fire attunement, not air (arbitrary, but seems common)
- Guardian: assume the user is on a dual-wield set (simulates better than the reverse if it's a full dual-wield build; a greatsword-only or staff-only build is less likely)
- Warrior: assume the user is on a dual-wield set (simulates better than the reverse if it's a full dual-wield build; a greatsword-only build is less likely)
