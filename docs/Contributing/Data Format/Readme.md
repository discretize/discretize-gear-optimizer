Internal data for what effects modifiers have (like traits, food, etc) and for all of the presets and templates are stored in YAML files in [/src/assets/modifierdata](../../../src/assets/modifierdata) and [/src/assets/presetdata](../../../src/assets/presetdata).

See [Templates and Presets](<Templates and Presets.md>) and [Modifiers](Modifiers.md) for information about the specific formats of those sections.

> To do: split up "trait" template files into traits / extras, to allow users to mix and match.

> To do: add a user interface (Netlify CMS) so contributors need not edit YAML directly.

---

If you've never seen YAML before, the big thing you need to know is that indentation is important! Make sure to copy-paste blocks of YAML including the whitespace at the beginning of the lines. Use an editor like [Visual Studio Code](https://code.visualstudio.com/) or an online tool like [transform.tools's editor](https://transform.tools/yaml-to-json) to see in real time if your YAML has problems.

```yaml
# text after a hash mark is a comment!
```
```yaml
# each key corresponds with one value!

a dictionary:
  a number: 123.45
  a string: hi             # quotation marks around strings are optional!
  a big string: >
    hello, this is
    an entire paragraph
    which is one string
```
```yaml
a list:
- apple
- banana
- carrot
```
```yaml
a list of dictionaries:

- class: revenant
  armor: heavy

- class: thief
  armor: medium

- class: mesmer
  armor: light
```

```yaml
a dictionary of lists:

revenant builds:
  - power alacrity
  - condi RR
  
thief builds:
  - condi deadeye
  - power daredevil

mesmer builds:
  - power chrono
  - condi mirage
```

You can learn more about YAML from tutorials like [this one](https://keleshev.com/yaml-quick-introduction), from [learnxinyminutes.com](https://learnxinyminutes.com/docs/yaml/), or from the [Wikipedia article on YAML](https://en.wikipedia.org/wiki/YAML).