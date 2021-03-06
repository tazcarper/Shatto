// generated on 2016-02-04 using generator-gulp-webapp 1.1.1
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {
  stream as wiredep
} from 'wiredep';

var concatJS = require('gulp-concat');

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
      outputStyle: 'compact',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'ie 9-10']}))
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
      compact: true
    }))
    .pipe($.sourcemaps.write('.'))
    .on('error', function(err) {
      console.log(err);
      this.end();
    })
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
  },
  rules: {
    'comma-spacing': 0,
    'semi-spacing': 0,
    'space-infix-ops': 0,
    'camelcase': 0,
    'key-spacing': 0

  }
};

gulp.task('lint', lint('dist/scripts/**/*.js', testLintOptions));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));


gulp.task('html', ['views', 'styles', 'scripts','concatScripts'], () => {
  return gulp.src(['app/*.html', '.tmp/*.html', 'app/*.jade'])
    .pipe($.useref({
      searchPath: ['.tmp', 'app', '.']
    }))
    .pipe($.if('*.js', $.uglify({
      mangle: false,
      compress: false,
      preserveComments: 'all'
    })))
    .pipe($.if('*.css', $.cssnano({
      autoprefixer: true
    })))
    .pipe($.if('*.html', $.htmlmin({
      collapseWhitespace: false,
      conservativeCollapse: false
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('concatScripts', function() {
  return gulp.src(
      [
        'app/scripts/map/jplist.min.js',
        'app/scripts/map/jlocator/jlocator.js',
        'app/scripts/map/jlocator/controller/controller.js',
        'app/scripts/map/jlocator/view/panel.js',
        'app/scripts/map/jlocator/view/map.js',
        'app/scripts/map/jlocator/models/store.js',
        'app/scripts/map/jlocator/controls/autocomplete.js',
        'app/scripts/plugins/sticky.js',
        'app/scripts/plugins/slick.js',
        'app/scripts/plugins/jquery.vide.js',
        'app/scripts/plugins/unveil.js',
        'app/scripts/plugins/picturefill.js',
        'app/scripts/plugins/datedropper.js',
        'app/scripts/plugins/formValidation.js',
        'app/scripts/plugins/framework/bootstrap.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
        'app/scripts/plugins/jquery.waypoints.js',
        'app/scripts/plugins/oldBrowser.js',
        'app/scripts/contact/nlform.js',
        'app/scripts/main.js'
      ]
    )
    .pipe(concatJS('all.js'))
    .pipe($.uglify({
      mangle: true
    }))
    .pipe(gulp.dest('dist/scripts'));
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
    '!app/*.html',
    '!app/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('views', () => {
  return gulp.src('app/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['html', 'views', 'styles', 'scripts', 'concatScripts', 'fonts'], () => {
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
    '.app/*.html',
    '.tmp/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);


  gulp.watch('app/**/*.html', ['views']);
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch('app/images/**/*', ['imageCopy', reload]);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts','concatScripts']);
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

gulp.task('serve:php', ['fonts'], function() {
  browserSync({
    notify: false,
    ui: false,
    proxy: 'localhost:8888/shatto-wordpress/',
    port: 9005,
    injectChanges: true
  });

  gulp.watch('app/**/*.html', ['views', reload]);
  gulp.watch('app/**/*.jade', ['views', 'scripts']);
  gulp.watch('**/*.php', reload);
  gulp.watch('app/images/**/*', ['imageCopy']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts', 'concatScripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:rob', function() {
  browserSync({
    notify: false,
    ui: false,
    proxy: 'shatto.local',
    port: 9005,
    injectChanges: true
  });

  gulp.watch('app/**/*.html', ['views', reload]);
  gulp.watch('**/*.php', reload);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/images/**/*', ['imageCopy', reload]);
  gulp.watch('app/scripts/**/*.js', ['scripts', 'concatScripts']);
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

  gulp.src('app/layouts/*.jade')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app/layouts'));
});

// gulp.task('build', ['html', 'fonts', 'extras'], () => {
gulp.task('build', ['html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
