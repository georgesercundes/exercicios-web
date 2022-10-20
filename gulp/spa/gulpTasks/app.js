const { src, dest, task } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

function appHTML() {
  return src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("build"));
}

function appCSS() {
  return src("src/assets/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("app.min.css"))
    .pipe(dest("build/assets/css"));
}

function appJS() {
  return src("src/assets/js/**/*.js")
    .pipe(babel({ presets: "ENV" }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(dest("build/assets/js"));
}

function appIMG() {
  return src("src/assets/imgs/**/*.*").pipe(dest("build/assets/imgs"));
}

task("appHTML", appHTML);
task("appCSS", appCSS);
task("appJS", appJS);
task("appIMG", appIMG);

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};
