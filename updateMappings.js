/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable id-length */
import axios from 'axios';
import fs from 'node:fs/promises';
// eslint-disable-next-line import/no-unresolved
// const itemstatMapping = require('./src/utils/mapping/itemstats.json');
// const specializationMapping = require('./src/utils/mapping/specializations.json');

const MAX_ITEMS_PER_REQUEST = 200;
const MAPPINGS_PATH = './src/utils/mapping/';

const normalize = (str) =>
  str
    ? str
        .replaceAll(/[^A-Za-z]/g, '')
        .toLowerCase()
        .trim()
    : undefined;

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function fetchSpecializations() {
  console.log('Fetching specializations...');
  // get item stats (affixes)
  return axios
    .get('https://api.guildwars2.com/v2/specializations', { 'Cache-Control': 'no-cache' })
    .then((res) =>
      axios
        .get(`https://api.guildwars2.com/v2/specializations?ids=${res.data}`, {
          'Cache-Control': 'no-cache',
        })
        .then(async (response) => {
          const specs = response.data.map((spec) => {
            return {
              id: spec.id,
              name: normalize(spec.name),
              profession: normalize(spec.profession),
              minor_traits: spec.minor_traits,
              major_traits: spec.major_traits,
            };
          });
          // write to disk
          await fs.writeFile(
            `${MAPPINGS_PATH}specializations.json`,
            JSON.stringify(specs, null, 2),
            { flag: 'w+' },
          );
          console.log('Successfully wrote specializations.json');
          return specs;
        })
        .catch((error) => {
          console.log(error);
        }),
    );
}

function fetchTraits(specializationMapping) {
  console.log('Fetching traits...');
  // get item stats (affixes)
  axios.get('https://api.guildwars2.com/v2/traits', { 'Cache-Control': 'no-cache' }).then((res) => {
    const arrayOfArrays = [];
    for (let i = 0; i < res.data.length; i += MAX_ITEMS_PER_REQUEST) {
      arrayOfArrays.push(res.data.slice(i, i + MAX_ITEMS_PER_REQUEST));
    }

    const requests = arrayOfArrays.map((arr) =>
      axios.get(`https://api.guildwars2.com/v2/traits?ids=${arr}`, { 'Cache-Control': 'no-cache' }),
    );
    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          const traits = responses
            .flatMap((r) => r.data)
            .map((trait) => {
              const spec = specializationMapping.find((s) => s.id === trait.specialization);
              return {
                id: trait.id,
                name: normalize(trait.name),
                profession: normalize(spec ? spec.profession : 'bundle'),
              };
            });
          // write to disk
          fs.writeFile(`${MAPPINGS_PATH}traits.json`, JSON.stringify(traits, null, 2), {
            flag: 'w+',
          }).then(() => console.log('Successfully wrote traits.json'));
        }),
      )
      .catch((e) => {});
  });
}

function fetchSkills() {
  console.log('Fetching skills...');
  // get item stats (affixes)
  axios.get('https://api.guildwars2.com/v2/skills', { 'Cache-Control': 'no-cache' }).then((res) => {
    const arrayOfArrays = [];
    for (let i = 0; i < res.data.length; i += MAX_ITEMS_PER_REQUEST) {
      arrayOfArrays.push(res.data.slice(i, i + MAX_ITEMS_PER_REQUEST));
    }

    const requests = arrayOfArrays.map((arr) =>
      axios.get(`https://api.guildwars2.com/v2/skills?ids=${arr}`, { 'Cache-Control': 'no-cache' }),
    );
    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          const skills = responses
            .flatMap((r) => r.data)
            .map((skill) => {
              return {
                id: skill.id,
                name: normalize(skill.name),
                profession: normalize(skill.professions ? skill.professions[0] : 'bundle'),
              };
            });
          // write to disk
          fs.writeFile(`${MAPPINGS_PATH}skills.json`, JSON.stringify(skills, null, 2), {
            flag: 'w+',
          }).then(() => console.log('Successfully wrote skills.json'));
        }),
      )
      .catch((e) => {});
  });
}

function fetchItemStats() {
  console.log('Fetching itemStats...');
  // get item stats (affixes)
  return axios
    .get('https://api.guildwars2.com/v2/itemstats', { 'Cache-Control': 'no-cache' })
    .then((res) =>
      axios
        .get(`https://api.guildwars2.com/v2/itemstats?ids=${res.data}`, {
          'Cache-Control': 'no-cache',
        })
        .then(async (response) => {
          const itemStats = response.data;
          const grouped = groupBy(itemStats, 'name');
          const statsFinal = Object.keys(grouped)
            .filter((i) => i !== '')
            .map((i) => {
              return { name: normalize(i.replace("'s", '')), ids: grouped[i].map((t) => t.id) };
            });
          // write to disk
          await fs
            .writeFile(`${MAPPINGS_PATH}itemstats.json`, JSON.stringify(statsFinal, null, 2), {
              flag: 'w+',
            })
            .then(() => console.log('Successfully wrote itemstats.json'));
          return statsFinal;
        })
        .catch((error) => {
          console.log(error);
        }),
    );
}

function fetchItems(itemstatMapping) {
  console.log('Fetching items...');
  // get item stats (affixes)
  axios
    .get(`https://api.datawars2.ie/gw2/v1/item_data/json`, { 'Cache-Control': 'no-cache' })
    .then((response) => {
      const items = [];
      response.data
        .filter(
          (item) =>
            (item.rarity === 'Ascended' && ['Armor', 'Trinket', 'Weapon'].includes(item.type)) ||
            item.name === 'Beta Fractal Capacitor (Infused)' ||
            (item.details &&
              item.rarity === 'Exotic' &&
              ['Sigil', 'Rune'].includes(item.details.type)) ||
            // Match special ids for consumables
            [49940, 78978, 44642, 78786, 8764, 8801, 8686, 8664, 8759, 8678, 8732, 85244].includes(
              item.id,
            ) ||
            // Match food
            (item.details &&
              item.level === 80 &&
              item.rarity === 'Fine' &&
              (item.details.type === 'Food' || item.details.type === 'Utility')) ||
            // match infusions
            (item.details &&
              item.name.match('.*?Infusion') &&
              item.level === 0 &&
              item.type === 'UpgradeComponent' &&
              item.details.type === 'Default'),
        )
        .forEach((item) => {
          const category = normalize(item.type);
          const subCategory = item.details ? normalize(item.details.type) : '';

          let normalizedName;
          let type = subCategory;
          if (category === 'back') {
            type = 'backitem';
          } else if (category === 'gizmo') {
            type = 'gizmo';
          } else if (category === 'upgradecomponent' && subCategory === 'default') {
            type = 'infusion';
          } else if (
            category === 'consumable' &&
            !subCategory === 'food' &&
            !subCategory === 'utility'
          ) {
            type = category;
          }

          if (type === 'rune') {
            normalizedName = normalize(item.name.replaceAll(/(Superior|Rune|of|the)/g, ''));
          } else if (type === 'sigil') {
            normalizedName = normalize(item.name.replaceAll(/(Superior|Sigil|of|the)/g, ''));
          } else {
            normalizedName = normalize(item.name);
          }

          const iu = item.details ? item.details.infix_upgrade : undefined;
          const tmp = iu ? itemstatMapping.find((stat) => stat.ids.includes(iu.id)) : undefined;
          const affix = tmp ? tmp.name : undefined;
          const weight = item.details ? normalize(item.details.weight_class) : undefined;

          if (
            affix !== undefined ||
            (category !== 'armor' &&
              category !== 'weapon' &&
              category !== 'trinket' &&
              category !== 'back')
          ) {
            if (type === 'ring' && !normalizedName.match(/attuned[a-z]*infused/)) {
              return;
            }
            // do something
            const itemNode = {
              id: item.id,
              name: normalizedName,
              type,
              affix,
              weight,
            };
            items.push(itemNode);
          }
        });

      // write to disk
      fs.writeFile(`${MAPPINGS_PATH}items.json`, JSON.stringify(items, null, 2), {
        flag: 'w+',
      }).then(() => console.log('Successfully wrote items.json'));
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchSpecializations().then(fetchTraits);
fetchSkills();
fetchItemStats().then(fetchItems);
