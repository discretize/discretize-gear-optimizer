# Coefficients

The inputs in the skill coefficients section represent the combination of of each damaging skill and effect used by your character (as well as some effects/modifiers that are not input elsewhere in the optimizer). These inputs are usually reverse-engineered from ingame logs, but they can be changed manually to simulate different rotations, scenarios, equipment, etc.

While one could input the coefficient values for e.g. a single skill cast, resulting in the optimizer optimizing for and outputting the total damage dealt by that single skill, typically the skill coefficient inputs will be the averages over the entire duration of a rotation. This means the optimizer output will be the average DPS of that entire rotation.

**Power** coefficients are entered as the product of `weapon strength * skill coefficient`. For example, a [geomancy sigil](https://wiki.guildwars2.com/wiki/Superior_Sigil_of_Geomancy)'s effect has, according to the wiki, a coefficient of 0.25, and sigil effects have a weapon strength of 690.5. If it were triggered, for example, 5 times in a 60 second rotation, it would contribute:

`0.25 * 690.5 * (5 / 60) = 14.39` average power coefficient

**Condition** coefficients are entered as the total number of seconds of condition they deal (`stacks * duration`). For example, a [geomancy sigil](https://wiki.guildwars2.com/wiki/Superior_Sigil_of_Geomancy)'s effect inflicts 3 stacks of bleeding for 8 seconds, or 24 total bleed ticks. If it were triggered 5 times in a 60 second rotation, it would contribute:

`24 * (5 / 60) = 2.0` average bleeding

Summing every weapon and utility skill cast and every effect triggered in a rotation in this way should result in a good approximation of the total DPS output of the build.

---

There is a **caveat**, however:

As described in [How It Works](<How It Works.md#1-simulating>), some specific bonuses are not calculated by the optimizer, such as traits that buff skills of a certain type or only provide benefits some of the time.

Casting the scepter skill [Grasping Dead](https://wiki.guildwars2.com/wiki/Grasping_Dead), for example, normally has a power coefficient contribution of `0.8 * 1000 = 800` (with an ascended scepter) and a bleeding contribution of `3 * 10 = 30` stacks, but on a necromancer equipping the scepter-specific [Lingering Curse](https://wiki.guildwars2.com/wiki/Lingering_Curse) trait, one would instead add `3 * 10 * 1.5 = 45` stacks of bleeding per cast. This cannot be done automatically by the optimizer because it does not know what portion of the total bleeding comes from each source.

Be careful of this when making comparisons using coefficients. For example, if comparing 3% sigils and hydromancy sigils on power soulbeast, be sure to account for the hydromancy sigil always triggering with "Sic 'Em!" and Honed Axes active.
