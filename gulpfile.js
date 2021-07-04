/* ==================================================
   Path variables
================================================== */
var base = {
	src: 'src/',
	dist: 'dist/',
	assets: 'dist/_/'
}

var dist = {
	img: base.assets + 'img/',
	fonts: base.assets + 'fonts/',
	js: 'min.js',
	gojs: 'go.js',
	css: 'min.css',
	dl: base.dist + 'dl/'
}

var src = {
	copy: [/*base.src + '.htaccess', */
		base.src + 'favicon.ico',
		base.src + 'sitemap.xml',
		base.src + 'robots.txt'],
	dl:	[base.src + 'dl/*',
		base.src + 'dl/**/*'],
	img: [base.src + 'img/*.+(gif|jpeg|jpg|png|svg)',
		base.src + 'img/**/*.+(gif|jpeg|jpg|png|svg)'],
	fonts: base.src + 'fonts/*.+(woff2|woff|eot|ttf)',
	html: [base.src + '*.html',
		base.src + '**/*.html'],
	vendorjs: [base.src + 'js/vendor/jquery-3.2.1.min.js',
		base.src + 'js/vendor/jquery.scrollTo.min.js',
		base.src + 'js/vendor/jquery-inview.js',
		base.src + 'js/vendor/nouislider.min.js',
		base.src + 'js/vendor/popper.min.js',
		base.src + 'js/vendor/bootstrap/util.js',
		base.src + 'js/vendor/bootstrap/alert.js',
		base.src + 'js/vendor/bootstrap/button.js',
		// base.src + 'js/vendor/bootstrap/carousel.js',
		base.src + 'js/vendor/bootstrap/collapse.js',
		base.src + 'js/vendor/bootstrap/dropdown.js',
		base.src + 'js/vendor/bootstrap/modal.js',
		// base.src + 'js/vendor/bootstrap/popover.js',
		base.src + 'js/vendor/bootstrap/scrollspy.js',
		base.src + 'js/vendor/bootstrap/tooltip.js',
		base.src + 'js/vendor/bootstrap/tab.js',
		base.assets + dist.js
	],
	js: [base.src + 'js/discretize.js'],
	gojs: [base.src + 'js/gear-optimizer.js'],
	scss: base.src + 'scss/*.scss'
}

/* ==================================================
   Plugins
================================================== */
var runSequence = require('run-sequence');

var gulp = require('gulp');
const { series, parallel } = require('gulp');

const del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var flexbugsfixes = require('postcss-flexbugs-fixes');
var cssnano = require('cssnano');

var replace = require('gulp-replace');
var gw2wikihost = 'https://wiki.guildwars2.com/wiki/';

var browserSync = require('browser-sync').create();

/* ==================================================
   Clean dist folder
================================================== */
const cleandist = function (done) {
    return del([base.dist + '**/*'], done);
	// return gulp.src(base.dist, { read: false, force: true })
	// 	.pipe(clean())
	// 		.on('error', swallowError);
};

/* ==================================================
   Copy static resources and fonts
================================================== */
const copy = function () {
	return gulp.src(src.copy, { 'allowEmpty': true })
		.pipe(gulp.dest(base.dist));
};
const fonts = function () {
	return gulp.src(src.fonts)
		.pipe(gulp.dest(dist.fonts));
};
const dl = function () {
	return gulp.src(src.dl)
		.pipe(gulp.dest(dist.dl));
};

/* ==================================================
   Images
================================================== */
const img = function () {
	return gulp.src(src.img)
		// .pipe(imagemin([
		// 	imagemin.gifsicle({interlaced: true}),
		// 	imagemin.mozjpeg({progressive: true}),
		// 	imagemin.optipng({optimizationLevel: 5})
		// ]))
		// 	.on('error', swallowError)
		.pipe(gulp.dest(dist.img));
};

/* ==================================================
   HTML
================================================== */
const html = function () {
	return gulp.src(src.html)
		.pipe(replace(/<a\s+?data-wiki>(.+?)<\/a>/g, function(match, p1, offset, string) {
			return '<a href=\"' + gw2wikihost + encodeURIComponent(p1) + '\" target=\"_blank\" rel=\"external\">' + p1 + '</a>';
		}))
		.pipe(replace(/<a\s+?data-wiki=\"(.+?)\">(.+?)<\/a>/g, function(match, p1, p2, offset, string) {
			return '<a href=\"' + gw2wikihost + encodeURIComponent(p1) + '\" target=\"_blank\" rel=\"external\">' + p2 + '</a>';
		}))
		.pipe(replace(/<a\s+?data-instability>(.+?)<\/a>/g, function(match, p1, offset, string) {
			return '<a class=\"text-instability\" href=\"' + gw2wikihost + encodeURIComponent('Mistlock Instability: ' + p1) + '\" target=\"_blank\" rel=\"external\"><span class=\"icon icon-instability\"></span> ' + p1 + '</a>';
		}))
		.pipe(replace(/<a\s+?data-(boon|condition|control|misc)>(.+?)<\/a>/g, function(match, p1, p2, offset, string) {
			return '<a class=\"text-' + p1 + '\" href=\"' + gw2wikihost + encodeURIComponent(p2) + '\" target= \"_blank\" rel=\"external\"><span class=\"icon icon-' + p2.toLowerCase() + '\"></span> ' + p2 + '</a>';
		}))
		// .pipe(htmlmin({
		// 	collapseBooleanAttributes: true,
		// 	collapseWhitespace: true,
		// 	decodeEntities: true,
		// 	minifyCSS: true,
		// 	minifyJS: true,
		// 	processConditionalComments: true,
		// 	removeAttributeQuotes: true,
		// 	removeComments: true,
		// 	removeEmptyAttributes: true,
		// 	removeOptionalTags: true,
		// 	removeRedundantAttributes: true,
		// 	removeScriptTypeAttributes: true,
		// 	removeStyleLinkTypeAttributes: true,
		// 	trimCustomFragments: true,
		// 	useShortDoctype: true
		// }))
		// 	.on('error', swallowError)
		.pipe(gulp.dest(base.dist));
};

/* ==================================================
   JavaScript
================================================== */
// gulp.task('js', function(callback) {
// 	runSequence(['customjs'], 'vendorjs', callback);
// });
const customjs = function () {
	return gulp.src(src.js)
		.pipe(babel({
			presets: [ '@babel/preset-env' ]
		}))
			.on('error', swallowError)
		.pipe(concat(dist.js))
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets));
};
const vendorjs = function () {
	return gulp.src(src.vendorjs)
		.pipe(uglify())
			.on('error', swallowError)
		.pipe(concat(dist.js))
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets));
};

const js = series(customjs, vendorjs);

const gojs = function () {
	return gulp.src(src.gojs)
		.pipe(babel({
			presets: [ '@babel/preset-env' ]
		}))
			.on('error', swallowError)
		.pipe(concat(dist.gojs))
			.on('error', swallowError)
		.pipe(uglify())
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets))
};

/* ==================================================
   SASS / CSS
================================================== */
const css = function () {
	return gulp.src(src.scss)
		.pipe(sass())
			.on('error', swallowError)
		.pipe(postcss([
			/* uncss({
				html: html
			}),
			csso(),*/
			flexbugsfixes(),
			cssnano({
				autoprefixer: {
					browsers: ['last 2 versions'],
					cascade: false
				},
				discardComments: {
					removeAll: true
				}
			})
		]))
			.on('error', swallowError)
		.pipe(rename(dist.css))
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets));
};

/* ==================================================
   Build
================================================== */
const build = series(
    cleandist,
    parallel(copy, /* dl,*/ css, fonts, html, js, gojs),
    img
);

// gulp.task('build', function(callback) {
// 	runSequence('clean', ['copy', /*'dl',*/ 'css', 'fonts', 'html', 'js', 'gojs'], 'img', callback);
// });

/* ==================================================
   Initialize browserSync
================================================== */
const sync = function (done) {
	browserSync.init({
		server: {
			baseDir: base.dist
		}
	});
    done();
};
const refresh = function (done) {
	browserSync.reload();
    done();
};

/* ==================================================
   Helper function to continue on errors
================================================== */
function swallowError(error) {
	console.log(error.toString());
	this.emit('end');
}

/* ==================================================
   Watch
================================================== */
const initWatch = function (done) {
    gulp.watch(src.copy, series(copy, refresh));
    /* gulp.watch(src.dl, runSequence(dl, refresh) }); */
    gulp.watch(src.img, series(img, refresh));
    gulp.watch(src.fonts, series(fonts, refresh));
    gulp.watch(src.html, series(html, refresh));
    gulp.watch(src.js, series(js, refresh));
    gulp.watch(src.gojs, series(gojs, refresh));
    gulp.watch([src.scss, base.src + 'scss/**/*.scss'], series(css, refresh));
    done();
}

const watch = series(build, sync, initWatch);

// gulp.task('watch', ['build', 'sync'], function() {
// 	gulp.watch(src.copy, function() { runSequence('copy', 'refresh') });
// 	/*gulp.watch(src.dl, function() { runSequence('dl', 'refresh') });*/
// 	gulp.watch(src.img, function() { runSequence('img', 'refresh') });
// 	gulp.watch(src.fonts, function() { runSequence('fonts', 'refresh') });
// 	gulp.watch(src.html, function() { runSequence('html', 'refresh') });
// 	gulp.watch(src.js, function() { runSequence('js', 'refresh') });
// 	gulp.watch(src.gojs, function() { runSequence('gojs', 'refresh') });
// 	gulp.watch([src.scss, base.src + 'scss/**/*.scss'], function() { runSequence('css', 'refresh') });
// });

exports.build = build;
exports.watch = watch;
