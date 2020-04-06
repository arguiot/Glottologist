const gulp = require("gulp");
const rigger = require("gulp-rigger");
const rename = require("gulp-rename");
const babili = require("gulp-babel-minify");
const copy = () => {
    return gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "glottologist"
        }))
        .pipe(gulp.dest("dist"));
};

const minify = () => {
    return gulp
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
}
const test = () => {
    return gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "glottologist"
        }))
        .pipe(gulp.dest("__test__"));
};
exports.copy = copy;
exports.minify = minify;
exports.test = test;
exports.default = gulp.parallel(copy, minify, test);
