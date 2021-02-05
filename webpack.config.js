const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("meta-json-generator");

const fileSystem = helpers.generateFS(`${__dirname}/src/actions`, "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const mode = process.argv.filter(val => val.includes("--mode"));
let environment = "production";
if(mode.length > 0 && mode[0].includes("dev")) {
  environment = "development";
}

const entryPaths = helpers
  .getFiles(entryFiles, ".ts")
  .map((file) => file.replace(".ts", ""))
  .filter((k) => !/meta\.json/g.test(k));

const folderDescriptionList = [
    { path: "/boards", description: "Display all the boards!" },
    { path: "/boards/option/lists", description: "Display all the lists of the board" },
    { path: "/boards/option/lists/option/cards", description: "Display all cards of the list" },
    { path: "/boards/option/lists/option/cards/option/addMembers",
      description: "Display members of the board that are not present in the card" },
    { path: "/boards/option/lists/option/cards/option/cardMembers",
      description: "Display all the members of the card" }
]

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
      environment,
      package: "Trello",
      packageDescription: "workerB package for trello.com",
      folderDescriptionList
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
