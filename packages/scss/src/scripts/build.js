const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");

const main = () => {
  compile("src/global.scss", "lib/global.css");

  getComponents().forEach((component) => {
    compile(component.input, component.output);
  });
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: "compressed",
    outFile: "global.css",
    includePaths: [Path.resolve("src")],
  });

  try {
    Fs.mkdirSync(Path.resolve("lib"));
  } catch (error) {}

  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};

const getComponents = () => {
  const types = ["atoms", "molecules"];

  const allComponents = types.reduce((allComponents, type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + "css"}`,
    }));
    return [...allComponents, ...allFiles];
  }, []);

  return allComponents;
};

main();
