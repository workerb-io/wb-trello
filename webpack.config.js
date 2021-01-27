const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("meta-json-generator");

const fileSystem = helpers.generateFS(`${__dirname}/src/actions`, "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const entryPaths = helpers
  .getFiles(entryFiles, ".ts")
  .map((file) => file.replace(".ts", ""))
  .filter((k) => !/meta\.json/g.test(k));

// const metaFiles = helpers.getFiles(entryFiles, ".json");

// const copyPatterns = metaFiles.map((metaFile) => ({
//   from: `./src/actions/${metaFile}`,
//   to: `./${metaFile}`,
// }));

// const rootJSON = fs.readFileSync("./src/actions/meta.json", "utf8");
// const rootJSONParsed = rootJSON ? JSON.parse(rootJSON) : {};

// let iconPath = "";

// if (rootJSONParsed.icon) {
//   iconPath = path.join("./src/actions", rootJSONParsed.icon);
//   // copyPatterns.concat({ from: iconPath, to: "./" });
// }

module.exports = {
  entry: entryPaths.reduce((result, entryPath) => {
    result[entryPath] = `./src/actions${entryPath}.ts`;
    return result;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    globalObject: "this",
    libraryTarget: "umd",
    library: "main",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { presets: ["@babel/preset-env"] },
      },
    ],
  },
  plugins: [
    new WBMetaJsonGenerator({
      package: "trello package update",
      packageDescription: "automate all the trello tasks",
      folderDescriptionList:[
        {path: "/boards", description: "Display all the boards!"},
        {path: "/boards/option/lists", description: "Display all the lists of the board"},
        {path: "/boards/option/lists/option/cards", description: "Display all cards of the list"},
        {path: "/boards/option/lists/option/cards/option/addMembers", description: "Display members of the board that are not present in the card"},
        {path: "/boards/option/lists/option/cards/option/cardMembers", description: "Display all the members of the card"}
      ]
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: /(@description|@name|@ignore)/i,
          },
        }
      }),
    ],
  }
};
