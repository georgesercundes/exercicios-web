const { src, series } = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function monitorarArquivos() {
  return src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
}

function servidor(cb) {
  watch("src/**/*.html", () => series("appHTML")());
  watch("src/**/*.scss", () => series("appCSS")());
  watch("src/**/*.js", () => series("appJS")());
  watch("src/assets/imgs/**/*.*", () => series("appIMG")());
  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor,
};
