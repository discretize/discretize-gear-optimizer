const fs = require('fs');

// removes underscores and any text preceding them from translation values
const regex = /.*_/;
const path = 'locales/en/translation.json';

const fileData = fs.readFileSync(path);
const data = JSON.parse(fileData.toString());
const fixedEntries = Object.entries(data).map(([key, value]) => [key, value.replace(regex, '')]);
const fixedData = Object.fromEntries(fixedEntries);
fs.writeFileSync(path, `${JSON.stringify(fixedData, null, 2)}\n`);
