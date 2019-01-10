const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const watch = require('gulp-watch');
const DIST = "./public/dist";
const HTML_SOURCE = "./public/**/*.html";
const SCRIPT_SOURCE = "./public/js/**/*.js";

gulp.task("scripts", () => {
  gulp
    .src(SCRIPT_SOURCE)
    .pipe(
      plumber(err => {
        console.log("THIS IS THE ERRORRRRR /n/n/n/n/ " + err);
        this.emit("end");
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    // .pipe(uglify())
    // .pipe(concat("app.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/dist/js/"))
    // .pipe(livereload())
    .pipe(browserSync.stream());
  console.log("scripts");
});

gulp.task("js-watch", ["scripts"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
gulp.task("watch", () => {
  gulp.watch([SCRIPT_SOURCE, HTML_SOURCE], ["js-watch", "scripts"]);
});
gulp.task("default", ["js-watch", "watch"], function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("js/*.js", ["js-watch"]);
});