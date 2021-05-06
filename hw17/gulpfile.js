const { src, task, dest, series, watch } = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

function transpile() {
  return src(
    ["src/Login/login.js",
    "src/User/UserListComponent.js",
    "src/script.js"]
  )
    .pipe(
      babel({
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-proposal-class-properties"],
      })
    )
    .pipe(concat("all.js"))
    .pipe(dest("./distJS"));
}

function gluingCss() {
  return src("src/**/*.css").pipe(concat("all.css")).pipe(dest("./distCSS"));
}

function watchAll() {
  watch(["src/**/*.js"], transpile);
  watch(["src/**/*.css"], gluingCss);
}

task("transpile", transpile);
task("gluingCss", gluingCss);

task("build", series(transpile, gluingCss));
task("watch", watchAll);