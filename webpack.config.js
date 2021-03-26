const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");

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
    { 
      path: "/boards",
      description: "Display all the boards",
      iconPath: "src/actions/boards/board_icons/board-icon-64.png",
      defaultAction: "index"
    },
    { 
      path: "/boards/option/lists",
      description: "Display all the lists of the board",
      iconPath: "src/actions/boards/option/lists/list_icons/list-icon-64.png"
    },
    {
      path: "/boards/option/lists/option/cards",
      description: "Display all cards of the list",
      iconPath: "src/actions/boards/option/lists/option/cards/card_icons/card-icon.png",
      defaultAction: "open"
    },
    {
      path: "/boards/option/lists/option/cards/option/addMembers",
      description: "Display members of the board that are not present in the card",
      iconPath: "src/actions/boards/option/lists/option/cards/option/member_icons/add-member-icon-64.png",
      defaultAction: "add"
    },
    {
      path: "/boards/option/lists/option/cards/option/cardMembers",
      description: "Display all the members of the card",
      iconPath: "src/actions/boards/option/lists/option/cards/option/member_icons/member-icon-64.png",
      defaultAction: "remove"
    }
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
      packageIcon: "https://i.pinimg.com/280x280_RS/0f/b8/e6/0fb8e676a1cd0eae9b0f7ea862c40f93.jpg",
      sites: [ "https://trello.com"],
      readmeFIle: "README.md",
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
