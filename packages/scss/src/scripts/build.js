const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");

const getComponents = () => {
  const types = ["atoms", "molecules", "organisms"];

  const allComponents = types.reduce((allComponents, type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `src/lib/${file.slice(0, -4) + "css"}`,
    }));
    return [...allComponents, ...allFiles];
  }, []);

  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: "expanded",
    outFile: "global.css",
    includePaths: [Path.resolve("src")],
  });

  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};

compile("src/global.scss", "src/lib/global.css");

getComponents().forEach((component) => {
  compile(component.input, component.output);
});
