const { series, parallel } = require("gulp");
const gulp = require("gulp");

const { appHTML, appCSS, appJS, appIMG } = require("./gulpTasks/app");
const { depsCSS, depsFonts } = require("./gulpTasks/deps");
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor");

module.exports.default = series(
  parallel(appHTML, appCSS, appJS, appIMG, depsCSS, depsFonts),
  monitorarArquivos,
  servidor
);
