const gulp = require("gulp"),
      del = require("del"),
      browserSync = require("browser-sync").create(),
      webpack = require("webpack"),
      webpackConfig = require("./webpack.config.js"),
      gulpWebpack = require('gulp-webpack'),
      gp = require("gulp-load-plugins")();
    
const paths = {
    root: './build',
    teamplates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dist: 'build/assets/styles/'        
    },
    images: {
        src: 'src/images/**/*.*',
        dist: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dist: 'build/assets/scripts/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dist: 'build/assets/fonts'
    }
}

function templates() {
    return gulp.src(paths.teamplates.pages)
    .pipe(gp.plumber())
    .pipe(gp.pug({pretty: true}))
    .pipe(gulp.dest(paths.root));
}

function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(gp.plumber())
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({outputStyle: 'compressed'}))
        .pipe(gp.autoprefixer())
        .pipe(gp.sourcemaps.write())
        .pipe(gp.rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dist))
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(gp.imagemin())
        .pipe(gulp.dest(paths.images.dist))
}

function scripts() {
    return gulp.src("./src/scripts/app.js")
       // .pipe(gp.eslint())
       // .pipe(gp.eslint.format())
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dist))
}

function fonts() {
    return gulp.src(paths.fonts.src)

        .pipe(gulp.dest(paths.fonts.dist))
}

function clean() {
    return del(paths.root);
}

function watch() {
    gulp.watch(paths.teamplates.src, templates);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.scripts.src, scripts);
}


function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

exports.templates = templates;
exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.scripts = scripts;


gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, fonts, scripts),
    gulp.parallel(watch, server)
));