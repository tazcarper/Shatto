// generated on 2016-02-04 using generator-gulp-webapp 1.1.1
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    //.pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'ie 9-10']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('scripts', () => {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      compact: false
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({
      stream: true
    }));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({
        stream: true,
        once: true
      }))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['views', 'styles', 'scripts'], () => {
  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe($.useref({
      searchPath: ['.tmp', 'app', '.']
    }))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({
      autoprefixer: false
    })))
    .pipe($.if('*.html', $.htmlmin({
      collapseWhitespace: false,
      conservativeCollapse: false
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false,
        removeDoctype: true
      }],
      use: [pngquant()],

    }))
    .on('error', function(err) {
      console.log(err);
      this.end();
    })
    .pipe(gulp.dest('dist/images'));
});

// Copy images from App to Dist without optimizing (used in serve:php)
gulp.task('imageCopy', () => {
  return gulp.src('app/images/**/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function(err) {})
      .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('views', () => {
  $.nunjucksRender.nunjucks.configure(['app/'], {
    watch: false
  });

  return gulp.src('app/*.html')
    .pipe($.nunjucksRender())
    .pipe(gulp.dest('.tmp'))
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['html', 'styles', 'scripts', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    injectChanges: true,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    '.tmp/*.html',
    '.tmp/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);


  gulp.watch('app/**/*.html', ['views', reload]);
  gulp.watch('app/images/**/*', ['imageCopy', reload]);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

gulp.task('serve:php', function() {
  browserSync({
    notify: false,
    ui: false,
    proxy: 'localhost:8888/shatto-website/',
    port: 9005,
    injectChanges: true
  });

  gulp.watch('app/**/*.html', ['views', reload]);
  gulp.watch('**/*.php', reload);
  // gulp.watch('app/images/**/*', ['imageCopy', reload]);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:rob', function() {
  browserSync({
    notify: false,
    ui: false,
    proxy: 'quest.local',
    port: 9005,
    injectChanges: true
  });

  gulp.watch('app/**/*.html', ['views', reload]);
  gulp.watch('**/*.php', reload);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/images/**/*', ['imageCopy', reload]);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/layouts/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app/layouts'));
});

gulp.task('build', ['html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});