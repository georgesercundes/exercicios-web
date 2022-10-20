const gulp = require("gulp");
const { series, parallel, dest } = require("gulp");

const antes1 = (cb) => {
  console.log("Tarefa antes 1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa antes 2!");
  return cb();
};

function copiar(cb) {
  gulp
    .src("pastaA/**/*.txt")
    // .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB"));
  // .pipe(transformacaoA())
  // .pipe(transformacaoB())
  // .pipe(transformacaoC())
  return cb();
}

const fim = (cb) => {
  console.log("Tarefa Fim!");
  return cb();
};

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
