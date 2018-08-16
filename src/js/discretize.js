/* ==================================================
   Constants
================================================== */
let Selector = {
  NAVBAR: '.navbar',
  NAVBAR_ITEMS: '.navbar-brand, .navbar ul li a, .navbar-toggler',
  NAVBAR_COLLAPSE: '.navbar-collapse',

  NAV_LINK: '.nav-link',

  ANCHOR_INTERNAL: 'a[href*="#"]:not([href*="/"]):not([href="#"])',

  TAB_PANEL: '.tab-panel',
  TAB_CONTENT_CONTAINER: '.tab-content .container',

  SECTION: 'section',
  SECTION_TWITCH: '#twitch .section-content',
};

let DataAttribute = {
  LOAD: 'load',
  TWITCH: 'twitch'
};

let ClassName = {
  ACTIVE: 'active',
  SELECTED: 'selected',
  FADE: 'fade'
};

let Event = {
  CLICK: 'click',
  TOUCHSTART: 'touchstart',
  TOUCHEND: 'touchend',
  INVIEW: 'inview',
  HASHCHANGE: 'hashchange',
  CHANGE: 'change'
};

/* ==================================================
   Binders
================================================== */

$('body').delegate(
    '.card > .card-nav > .nav-tabs > .nav-item > a.nav-link[data-toggle="tab"]',
    'hide.bs.tab', function(e) {
      let nestedCard = $(e.target.getAttribute('href')).children('.card');
      nestedCard.find(
          '> .card-nav > .nav-tabs > .nav-item > .nav-link.active').removeClass(
          ClassName.ACTIVE);
      nestedCard.find(
          '> .card-body.tab-content > .tab-pane.active').removeClass(
          ClassName.ACTIVE).addClass(ClassName.FADE);
    });
$('body').delegate(
    '.card > .card-nav > .nav-tabs > .nav-item > a.nav-link[data-toggle="tab"]',
    'shown.bs.tab', function(e) {
      let nestedCard = $(e.target.getAttribute('href')).children('.card');
      nestedCard.find(
          '> .card-nav > .nav-tabs > .nav-item:first-child > .nav-link').addClass(
          ClassName.ACTIVE);
      nestedCard.find('> .card-body.tab-content > .tab-pane:first-child').tab(
          'show');
    });

