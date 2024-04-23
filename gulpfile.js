/* ==================================================
   Path variables
================================================== */
var base = {
	src: 'src/',
	dist: 'dist/',
	assets: 'dist/_/',
	yaml: 'src/data/'
}

var dist = {
	img: base.assets + 'img/',
	fonts: base.assets + 'fonts/',
	js: 'min.js',
	gojs: 'go.js',
  modulejs: 'optimizer-core.js',
  datajs: 'gw2-data.js',
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
  yaml: [base.yaml + '**/*.yaml'],
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
  modulejs: [base.src + 'js/optimizer-core.js'],
  datajs: [base.src + 'js/gw2-data.js'],
	scss: base.src + 'scss/*.scss'
}

/* ==================================================
   Plugins
================================================== */
// var runSequence = require('run-sequence');

var gulp = require('gulp');
const { series, parallel } = require('gulp');

const del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

// var imagemin = require('gulp-imagemin');
// var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));

var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
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
	return gulp.src(src.copy, { allowEmpty: true })
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
   Get YAML data for index.HTML
================================================== */

const fs = require('fs');
const yaml = require('js-yaml');
const getYaml = function (mode) {
  const yamlData = fs.readFileSync(base.yaml + mode + '.yaml', 'utf8');
  const data = yaml.load(yamlData);
  let output = '';

  if (['mesmer', 'warrior', 'guardian', 'elementalist', 'ranger', 'revenant', 'engineer', 'buff'].includes(mode)) {
    data.forEach((section) => {
      const sectionName = section.SECTION;
      output +=
        `<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <strong>${sectionName}</strong>`;

      Object.entries(section).forEach(([id, resultItem]) => {
        if (id === 'SECTION') {
          return;
        }
        output +=
          `<div class="input ${resultItem.extraCSS || ''}">
            <input
              class="input-checkbox"
              type="checkbox"
              id="go-checkbox-${mode}-${id}"
              data-go-modifier='${JSON.stringify(resultItem.modifiers)}'
              ${resultItem['default-enabled'] ? 'checked' : ''}
            />
            <label
              class="input-label"
              for="go-checkbox-${mode}-${id}"
            >`;
        if (resultItem['armory-type']) {
          output +=
            `<span
              data-armory-size="24"
              data-armory-embed="${resultItem['armory-type']}"
              data-armory-ids="${resultItem['gw2-id']}"
            ></span>`;
        }
        output +=
          `   ${resultItem.text}
            </label>
          </div>`;
      });
      output +=
        `</div>`;
    });
    return output;

  } else if (['runes', 'sigils', 'food', 'utility'].includes(mode)) {
    output +=
      `<div class="dropdown-item active">None</div>`;

    data.forEach((section) => {
      const sectionName = section.SECTION;
      output +=
        `<div class="dropdown-divider"></div>
        <h6 class="dropdown-header">${sectionName}</h6>`;
      Object.entries(section).forEach(([id, resultItem]) => {
        if (id === 'SECTION') {
          return;
        }
        output +=
          `<div
            class="dropdown-item ${resultItem.extraCSS || ''}"
            data-go-modifier='${JSON.stringify(resultItem.modifiers)}'
          >`;
        if (resultItem['armory-type']) {
          output +=
            `<span
              data-armory-embed="${resultItem['armory-type']}"
              data-armory-ids="${resultItem['gw2-id']}"
              data-armory-size="24"
            ></span>`;
        }
        output +=
          ` ${resultItem.text}
          </div>`;
      });
    });
    return output;
  }
};

/* ==================================================
   HTML
================================================== */
const html = function () {
	return gulp.src(src.html)
    .pipe(replace(/<!-- INSERT MESMER DATA-->/g, getYaml('mesmer')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT WARRIOR DATA-->/g, getYaml('warrior')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT GUARDIAN DATA-->/g, getYaml('guardian')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT ELEMENTALIST DATA-->/g, getYaml('elementalist')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT RANGER DATA-->/g, getYaml('ranger')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT REVENANT DATA-->/g, getYaml('revenant')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT ENGINEER DATA-->/g, getYaml('engineer')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT BUFF DATA-->/g, getYaml('buff')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT RUNES DATA-->/g, getYaml('runes')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT SIGILS DATA-->/g, getYaml('sigils')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT FOOD DATA-->/g, getYaml('food')))
      .on('error', swallowError)
    .pipe(replace(/<!-- INSERT UTILITY DATA-->/g, getYaml('utility')))
      .on('error', swallowError)
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
			.on('error', swallowError)
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
			presets: [['@babel/preset-env', { 'modules': false }]]
		}))
			.on('error', swallowError)
		.pipe(concat(dist.gojs))
			.on('error', swallowError)
		.pipe(uglify())
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets));
};

const modulejs = function () {
	return gulp.src(src.modulejs)
		.pipe(babel({
			presets: [['@babel/preset-env', { 'modules': false }]]
		}))
			.on('error', swallowError)
		.pipe(concat(dist.modulejs))
			.on('error', swallowError)
		.pipe(uglify())
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets));
};

const datajs = function () {
	return gulp.src(src.datajs)
		.pipe(babel({
			presets: [['@babel/preset-env', { 'modules': false }]]
		}))
			.on('error', swallowError)
		.pipe(concat(dist.datajs))
			.on('error', swallowError)
		.pipe(uglify())
			.on('error', swallowError)
		.pipe(gulp.dest(base.assets));
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
    parallel(copy, /* dl,*/ css, fonts, html, js, gojs, modulejs, datajs),
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
		},
    ghostMode: false
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
    gulp.watch(src.yaml, series(html, refresh));
    gulp.watch(src.js, series(js, refresh));
    gulp.watch(src.gojs, series(gojs, refresh));
    gulp.watch(src.datajs, series(datajs, refresh));
    gulp.watch(src.modulejs, series(modulejs, refresh));
    gulp.watch([src.scss, base.src + 'scss/**/*.scss'], series(css, refresh));
    done();
};

const watch = series(build, sync, initWatch);

const initWatchNoRefresh = function (done) {
  gulp.watch(src.copy, series(copy));
  /* gulp.watch(src.dl, runSequence(dl) }); */
  gulp.watch(src.img, series(img));
  gulp.watch(src.fonts, series(fonts));
  gulp.watch(src.html, series(html));
  gulp.watch(src.yaml, series(html));
  gulp.watch(src.js, series(js));
  gulp.watch(src.gojs, series(gojs));
  gulp.watch(src.datajs, series(datajs));
  gulp.watch(src.modulejs, series(modulejs));
  gulp.watch([src.scss, base.src + 'scss/**/*.scss'], series(css));
  done();
};

const watchNoRefresh = series(build, sync, initWatchNoRefresh);

// this was used to transition to YAML
// const cheerio = require('cheerio');
// const generateYaml = function (done) {
//   try {
//     del.sync([base.src + 'yaml/**/*']);
//     const html = fs.readFileSync(base.src + 'index_html_backup', 'utf8');
//     const $ = cheerio.load(html);

//     const generate = function (mode) {
//       const result = [];
//       $(`#insert-${mode}-data`).children().each(function () {
//         const section = $(this);
//         let sectionName = section.find('strong').first().html() || '';
//         sectionName = sectionName.replace(/\s+/g, ' ').trim();
//         const sectionItems = { SECTION: sectionName };
//         section.children('.input').each(function () {
//           const item = $(this);
//           const input = item.children('input');
//           const label = item.children('label');
//           const span = label.children('span').filter('[data-armory-ids]');

//           let id = input.attr('id').replace(`go-checkbox-${mode}-`, 'X-X-X-X');
//           // console.log(id);
//           id = id.replace('X-X-X-X', '');
//           // const modifiers = input.attr('data-go-modifier');
//           let modifiers = '';
//           try {
//             modifiers = JSON.parse(input.attr('data-go-modifier'));
//           } catch (e) {
//             console.log('JSON parse error');
//             console.log(e);
//             console.log(id);
//           }
//           const dataArmoryEmbed = span.attr('data-armory-embed');
//           const dataArmoryId = parseInt(span.attr('data-armory-ids'), 10);
//           const text = label.html().replace(/<span.*?data-armory-ids.*?><\/span>/s, '').replace(/\s+/g, ' ').trim();
//           const enabled = input.attr('checked');
//           const extraCSS = item.attr('class').split(/\s+/).filter((item) => item != 'input').join(' ');

//           const resultItem = { text, modifiers };
//           if (dataArmoryEmbed) {
//             resultItem['gw2-id'] = dataArmoryId;
//             resultItem['armory-type'] = dataArmoryEmbed;
//           }
//           if (enabled) {
//             resultItem['default-enabled'] = true;
//           }
//           if (extraCSS) {
//             resultItem.extraCSS = extraCSS;
//           }
//           sectionItems[id] = resultItem;
//         });
//         result.push(sectionItems);
//       });
//       let resultYaml = yaml.dump(result, {
//         forceQuotes: true,
//         lineWidth: -1,
//         flowLevel: 4
//       });
//       resultYaml = resultYaml.replace(/\n/g, '\n\n').replace(/\n\n    /g, '\n    ')

//       fs.writeFileSync(base.src + 'yaml/' + mode + '.yaml', resultYaml, 'utf8');
//     };

//     ['mesmer', 'warrior', 'guardian', 'elementalist', 'ranger', 'revenant', 'engineer', 'buff'].forEach((mode) => {
//       generate(mode);
//     });

//     const generateUpgrade = function (mode) {
//       const result = [];
//       $(`#go-select-${mode}`).children('.dropdown-menu').children().each(function () {
//         const item = $(this);
//         if (item.hasClass('dropdown-divider')) {
//           return;
//         }
//         if (item.hasClass('dropdown-header')) {
//           result.push({ SECTION: item.text().replace(/\s+/g, ' ').trim() });
//           return;
//         }
//         const span = item.children('span').filter('[data-armory-ids]');
//         let modifiers = '';
//         try {
//           if (item.attr('data-go-modifier')) {
//             modifiers = JSON.parse(item.attr('data-go-modifier'));
//           }
//         } catch (e) {
//           console.log('JSON parse error');
//           console.log(e);
//         }
//         const dataArmoryEmbed = span.attr('data-armory-embed');
//         const dataArmoryId = parseInt(span.attr('data-armory-ids'), 10);
//         const text = item.html().replace(/<span.*?data-armory-ids.*?><\/span>/s, '').replace(/\s+/g, ' ').trim();
//         const id = text.replace(/<*?>/s, '')
//           .replace('Superior Sigil of the ', '')
//           .replace('Superior Sigil of ', '')
//           .replace('Superior Rune of the ', '')
//           .replace('Superior Rune of ', '')
//           .replace('Bowl of ', '')
//           .replace('Plate of ', '')
//           .replace(/\s+/g, '-').trim().toLowerCase();

//         const resultItem = { text, modifiers };
//         if (dataArmoryEmbed) {
//           resultItem['gw2-id'] = dataArmoryId;
//           resultItem['armory-type'] = dataArmoryEmbed;
//         }
//         if (result.length) {
//           // no ids, so using text label as key
//           result[result.length - 1][id] = resultItem;
//         }
//       });
//       let resultYaml = yaml.dump(result, {
//         forceQuotes: true,
//         lineWidth: -1,
//         flowLevel: 4
//       });
//       resultYaml = resultYaml.replace(/\n/g, '\n\n').replace(/\n\n    /g, '\n    ');

//       fs.writeFileSync(base.src + 'yaml/' + mode + '.yaml', resultYaml, 'utf8');
//     };

//     ['runes', 'sigils-1', 'food', 'utility'].forEach((mode) => {
//       generateUpgrade(mode);
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   done();
// };

exports.build = build;
exports.watch = watch;
exports.watchNoRefresh = watchNoRefresh;
// exports.generateYaml = generateYaml;
