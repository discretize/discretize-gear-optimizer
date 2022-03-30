import yaml from "js-yaml";

const fileRegex = /\.yaml$/;

export default function discretizeVitePluginYaml() {
  return {
    name: "@discretize/load-yaml",

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: `const e = ${JSON.stringify(yaml.load(src))}; export default e;`,
          map: null, // there is no sourcemap here
        };
      }
    },
  };
}
