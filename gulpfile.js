const gulp = require("gulp");
const rigger = require("gulp-rigger");
const rename = require("gulp-rename");
const babili = require("gulp-babel-minify");
gulp.task("copy", () => {
    gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "glottologist"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("minify", () => {
    gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(babili({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(rename({
            basename: "glottologist",
			suffix: ".min"
        }))
        .pipe(gulp.dest("dist"));
})
gulp.task("test", () => {
    gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "glottologist"
        }))
        .pipe(gulp.dest("__test__"));
});
gulp.task("default", ["copy", "minify", "test"])
