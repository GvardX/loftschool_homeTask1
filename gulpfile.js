const gulp = require("gulp"),
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
    .pipe(gp.pug({pretty: true}))
    .pipe(gulp.dest(paths.root));
}

function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({outputStyle: 'compressed'}))
        .pipe(gp.sourcemaps.write())
        .pipe(gp.rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dist))
}
exports.templates = templates;
exports.styles = styles;