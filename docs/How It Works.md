# How It Works

This tool, internally, does 4 fundamental things:

1. Simulate the change in effective attributes (like DPS output) of a GW2 build when pieces of that build are changed.

2. Choose a scenario (buffs, traits, valid equipment affixes, constraints, etc) and loop through every possible gear variation the user has selected.

3. Compare the results and report the strongest combinations in a table.

4. Provide detailed information about a selected combination.

Each of these steps has some limitations, which will be described below.

## 1) Simulating

This tool calculates player attributes that are the same all of the time (or can be approximated like they are), and draws conclusions about how changes to these attributes change the resulting damage output (or healing output, etc).

It does not implement a full simulation of the GW2 combat system, of course, so it does a better job of simulating some effects than others. For more advanced uses of the optimizer, like estimating the percentage damage difference between traits or optimizing builds without a template, understanding these limitations is important. If you're using the built-in templates without adjusting traits, you don't need to worry about this.

<details>
<summary>About modifiers and changing traits:</summary>

The optimizer's simulation breaks down damage into components for power and for each damaging condition, but no further. It doesn't break things down by skill type or by individual skill cast, though both of these are theoretically possible to simulate with much more input data.

Therefore, these types of modifiers are not simulated by the optimizer's attribute system:

**a) Bonuses to a specific skill type**, like "conditions dealt by a scepter are stronger." The effect of toggling these can't be accurately simulated without knowing what portion of damage/condition application/healing was performed by each type of skill or effect.

**b) Bonuses which change your rotation or have direct effects of their own**, like "consecrations have reduced cooldown" or "deal damage when you dodge." The effect of toggling these these can't be accurately simulated without simulating your entire rotation.

> todo: mark these kinds of traits with a warning somehow!

The effects of these types of modifiers are quietly included in the the "skill coefficients" data of the optimizer's built-in templates, which results in an accurate simulation when the trait data and coefficient data match. Toggling them without also changing the "skill coefficients" section may lead to inaccurate results, however.**\*** Making these comparisons correctly requires a separate template with each trait.

These general types of modifiers, on the other hand, are simulated by the optimizer's attribute system:

**c) Consistent bonuses**. ex: "+100 precision", or "+5% critical damage." These have a predictable, calculable effect on every skill you use, so the math to simulate adding or removing one is simple and generally very accurate.

**d) Bonuses with uptime**, like "+120 ferocity while holding an axe (which is about 40% of the time)." These can be estimated by averaging out the bonus and assuming that the build's damage is fairly even over time. This assumption would be far off if, say, a build actually did 70% of its damage during the 40% of the time it was holding an axe, but is usually reasonable.

After loading a template, these general bonuses can be removed, added, or changed in quantity freely, and the template should continue to yield accurate results. This is not only useful for optimizing builds in different scenarios or with certain trait changes, it can also be used for comparisons like "About how much DPS is Assassin's Presence worth?" or "Which is better, thief runes or accuracy sigil?"

---

\*For example, loading a condi renegade template with Dance of Death (a lifesteal effect; category B) and then changing it to Swift Termination (an uptime-based buff; category D) would correctly add the damage buff effect in the optimizer's attribute system but would not remove the lifesteal effect, resulting in a power damage component that is slightly too high.

Most of the time this doesn't change the optimal gear, but it can result in unrealistic DPS output values.

All this means is that to be able to, for example, compare a quickbrand build with Legendary Lore and more quickness duration with a build with Stalwart Speed and more offensive gear, one needs to change "skill coefficients" templates, not just traits, but this is not obvious from the UI.

</details>

If you want to understand the raw values in the "skill coefficients" section, for use with spreadsheets or for template generation, expand this section:

<details>
<summary>Math breakdown:</summary>

As mentioned, the optimizer calculates generally-applicable attributes like effective power and burning duration, and multiplies the "skill coefficients" data by these values to output DPS. How do we calculate this data so that it results in the correct damage and distribution?

### From ingame results (Elite Insights log)...

Test the build in question ingame and measure its DPS output (power, burning, bleeding, etc). [Arcdps](https://www.deltaconnected.com/arcdps/) logs can be processed with [Elite Insights](https://github.com/baaron4/GW2-Elite-Insights-Parser) on your PR or through [dps.report](https://dps.report/) to easily obtain this information. Be sure to choose a scenario that best represents what you want to optimize for, like benchmarking with allies when relevant.

Then, force the optimizer to run the tested scenario as closely as possible, and enter the measured DPS into the tool at the bottom of the optimizer's results section under "Development."

The optimizer calculates what skill coefficient slider inputs would result in the measured ingame damage output with the currently selected settings and gear.

This inherently includes everything the optimizer does not simulate in the skill coefficient data, without needing to know exactly what it represents.

### From a spreadsheet

Exactly what _does_ skill coefficient data represent?

The damage dealt by a skill can be broken down completely as:

```
Power Damage = (Weapon Strength * Coefficient / Target Armor) * Effective Power * Optimizer simulated modifiers * Optimizer ignored modifiers
```

```
Burning/bleeding/etc Damage = (Stacks Applied * Base Duration) * Damage Per Tick * Optimizer simulated modifiers * Optimizer ignored modifiers
```

Total DPS is calculated as the sum of these damages for every skill cast, divided by the total combat time.

These can be rearranged to separate out what the optimizer simulates, and what it does not:

```
Power Damage = (Effective Power * Optimizer simulated modifiers / Target Armor)
  * (Weapon Strength * Coefficient * Optimizer ignored modifiers)

Power DPS = (optimizer stuff)
  * average (Weapon Strength * Coefficient * Optimizer ignored modifiers) per second
```

```
Burning/bleeding/etc Damage = (Damage Per Tick * Optimizer simulated modifiers)
  * (Stacks Applied * Base Duration * Optimizer ignored modifiers)

Burning/bleeding/etc DPS = (optimizer stuff)
  * average (Stacks Applied * Base Duration * Optimizer ignored modifiers) per second
```

Thus, the skill coefficient data for power is "the average amount of `skill coefficient * weapon strength` my skills deal per second," and for burning it is "the average amount of `stacks of burning * duration` my skills deal per second" (both including specific modifiers).

In short, it is exactly how strong your build's rotation is, independent of gear or buffs.

</details>

## 2) Iterating Through Variations

At the moment, this tool takes **one** set of runes, sigils, food, and utility nourishment, a **technically-unlimited** number of gear affixes like berserker or assassin, and up to **two** types of stat infusions, and checks every possible combination of gear slots and infusion counts.

Be careful enabling large numbers of affixes without using the "force slots" feature to reduce the number of possibilities. Enabling 3 affixes and a full set of infusions results in around 90 million combinations, and the math gets far worse from there.

> todo: allow simultaneous selection of multiple runes, sigils, foods, and/or utility types. Investigate algorithms to intelligently skip some of the hundreds of millions of resulting combinations.

## 3) Quantifying and Comparing Results

The strongest builds are, of course, the ones that perform their roles the best. This tool allows you to optimize for damage output, for healing output, or for survivability.

**Damage** sorts by total damage output, in DPS. This is also used to optimize offensive boon builds (by setting a minimum boon duration) or offensive heal builds (by setting a minimum healing power value)

**Survivability** sorts by _effective health_ (the amount of direct damage you can take between heals without being downed), which starts with your health pool and is increased by armor, defensive buffs and effects, or being a medium or heavy armor class.

Note that this doesn't take healing into account (having 15k HP and a 50% damage reduction effect is treated the same way as having 30k HP, even though healing is twice as effective in the first scenario), and it only takes power damage into account, so it is very simplified.

**Healing** sorts by the amount healed by a representative skill (Druid celestial avatar 4, with a 390 base heal and 0.3 coefficient). This has some slight advantages over sorting by the healing power attribute, as it better represents how outgoing healing bonuses (bountiful maintenance oil) affect the base heal values as well as the healing power component.

> todo: allow users to specify bases and coefficients for healing optimization

> todo (long-term): provide more sorting variants for investigating hybrid builds, like setting a minimum amount of DPS and optimizing for healing.

## 4) Detailed Result Information

Selecting a build from the table of optimizer results shows a simulated ingame equipment pane showing example equipment that matches the build result and the attributes that the optimizer is calculating this equipment to result in, given the selected ingame boons and buffs.

### Gear Notes

The displayed gear isn't designed to perfectly represent what you should run ingame. There are lots of types of gear in GW2 with the same stat bonuses. Plus, the optimizer doesn't calculate things like which agony resistance infusions you need for a certain AR value.

### Attribute Notes

Three important notes about the displayed attributes panel:

1. This display assumes you currently have the buffs you selected, as the optimizer does internally. Thus, unfortunately, they won't match the hero panel if you equip the selected gear and food, unless you also supply yourself with boons and buffs.

(Adding a toggle for this would be possible, if every single buff/trait in the internal database had data about whether it's temporary; contact us if you want to help add it!)

Additionally...

2. This display shows attributes with every active effect active, including effects that do not actually show up in the real hero panel. For example, "Gain bonus critical-hit chance when hitting a foe from behind or the side" is an effect that doesn't affect the hero panel's critical chance display, but does affect your true critical chance if you are flanking, so the optimizer's critical chance display does show it, and thus it will differ from the ingame interface.

(Adding a more specific display of this would be possible, if every single buff/trait in the internal database had data about whether it's shown in the hero panel; contact us if you want to help add it!)

3. Some attributes are averages. If you select 50% uptime of an effect that gives +120 power, the optimizer will average this out and estimate your power value as halfway in between +0 and +120. `TODO: Attributes that are averaged are marked with a ~ character, e.g. "~1567".`

### Other Notes

The information below the equipment pane should mostly be fairly self-explanatory. Here are some additional notes:

**Special Durations:** `todo: add base durations to these, then document this`

**Stats from Affixes:** This is the total stat points contributed by armor/weapons/trinkets/backpiece, to save you adding them up if you're verifying with/comparing to other tools.

**Damage increase/loss from +/-5 of attribute**: These can help provide intuitive insight about the way damage optimization works. For example, maybe it shows you that losing a point of precision on your build is about 1.25x as valuable as losing a point of ferocity, which would indicate that the 150 points of ferocity from Assassin's Presence is more valuable than the 100 points of precision from Spotter, but not by as much as the difference in point quantities.
