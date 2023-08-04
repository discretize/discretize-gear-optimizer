const babelTypes = require('@babel/types');

module.exports = function () {
  return {
    visitor: {
      Program(path, state) {
        if (babelTypes.isFile(path.container)) {
          path.container.comments.forEach((comment) => {
            if (comment.value.trim().split(/\s+/)[0].startsWith('i18next-extract-mark-context')) {
              const varName = comment.value.match(/(?<={{).+(?=}})/g);
              if (!varName || varName.length === 0) {
                return;
              }
              if (varName && varName.length > 1) {
                console.error(
                  `Error: Only one variable is supported for i18next-extract-mark-context. at:${state.filename}:${comment.loc.start.line}`,
                );
                return;
              }
              if (!this.opts || !(varName[0] in this.opts)) {
                console.error(
                  `Error: No "${varName[0]}" is specified in plugin options. Please check again. at:${state.filename}:${comment.loc.start.line}`,
                );
              }
              comment.value = comment.value.replace(
                `{{${varName[0]}}}`,
                JSON.stringify(this.opts[varName[0]]),
              );
            }
          });
        }
      },
    },
  };
};
