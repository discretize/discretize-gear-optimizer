/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable dot-notation */
/* eslint-disable prefer-template */

import * as optimizerCore from './optimizer-core.js';
// import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';

import {
  Slots,
  ForcedSlots,
  Omnipotion,
  Attributes,
  MAX_INFUSIONS,
  INFUSION_BONUS,
} from './gw2-data.js';

(function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const Prefix = Object.freeze({
    GEAR_OPTIMIZER: '#go-',
    CHECKBOX: 'checkbox-',
    INPUT: 'input-',
    SELECT: 'select-',
  });

  const Selector = Object.freeze({
    TOTAL: '#gear-optimizer',

    CHECKBOX: {
      AFFIX: {
        BERSERKER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-berserker',
        ASSASSIN: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-assassin',
        COMMANDER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-commander',
        HARRIER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-harrier',
        DIVINER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-diviner',
        VIPER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-viper',
        GRIEVING: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-grieving',
        SINISTER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-sinister',
        MINSTREL: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-minstrel',
        MAGI: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-magi',
        SERAPH: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-seraph',
        CELESTIAL: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-celestial',
      },

      BUFF: {
        MIGHT: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-might',
        FURY: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-fury',
        VULNERABILITY: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-vulnerability',
        BANNER_OF_STRENGTH: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-banner-of-strength',
        BANNER_OF_DISCIPLINE: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-banner-of-discipline',
        EMPOWER_ALLIES: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-empower-allies',
        BANE_SIGNET: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-bane-signet',
        SPOTTER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-spotter',
        FROST_SPIRIT: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-frost-spirit',
        ASSASSINS_PRESENCE: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-assassins-presence',
      },

      OMNIPOTION: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'omnipotion',
    },

    CHECKBOXES: 'input[type="checkbox"]',
    CHECKBOXES_CHECKED: 'input[type="checkbox"]:checked',

    INPUT: {
      OPTIMIZER: Prefix.GEAR_OPTIMIZER + 'input',

      CLASS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'class',
      TAB_PANE_ACTIVE: '.tab-pane.active',
      AFFIXES: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'affixes',
      BUFFS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'buffs',

      MIN_BOON_DURATION: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'min-boon-duration',
      MIN_TOUGHNESS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'min-toughness',
      MIN_HEALING_POWER: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'min-healing-power',
      MAX_TOUGHNESS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'max-toughness',
      AGONY_RESISTANCE: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'agony-resistance',

      MAX_RESULTS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'max-results',

      FORCE: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'force-',
    },

    SELECT: {
      RANKBY: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'rank-by',
      WEAPON_TYPE: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'weapon-type',
      RUNES: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'runes',
      SIGIL_1: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'sigils-1',
      SIGIL_2: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'sigils-2',
      FOOD: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'food',
      UTILITY: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'utility',
      INFUSION: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'infusion',
    },

    OUTPUT: {
      LIST: Prefix.GEAR_OPTIMIZER + 'output',
      PROGRESS_BAR: Prefix.GEAR_OPTIMIZER + 'progress-bar',
      HEADER: Prefix.GEAR_OPTIMIZER + 'output-header',
    },

    LABEL: 'label',
    SPAN: 'span',

    DROPDOWN_SELECT: '.dropdown-select',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_MENU: '.dropdown-menu',
    DROPDOWN_ITEM: '.dropdown-item',

    START: 'button' + Prefix.GEAR_OPTIMIZER + 'start',
    STOP: 'button' + Prefix.GEAR_OPTIMIZER + 'stop',
  });

  const ClassName = Object.freeze({
    ACTIVE: 'active',
    DISABLED: 'disabled',
  });

  const PropertyName = Object.freeze({
    CHECKED: 'checked',
    DISABLED: 'disabled',
  });

  const DataAttribute = Object.freeze({
    PRIORITIES: 'go-priorities',
    BUFFS: 'go-buffs',
    MODIFIER: 'go-modifier',
    CLASS: 'go-class',
    PRESELECTION: 'go-preselection',
    DISTRIBUTION: 'go-distribution',
  });

  // Globals

  let startTime;
  let STOP_SIGNAL = false;
  const jQueryList = $(Selector.OUTPUT.LIST);
  let currentList = [];

  /**
   * ------------------------------------------------------------------------
   * DOM-handling functions
   * ------------------------------------------------------------------------
   */

  /**
   * Fetches values from the html file, selected checkboxes and optimization goals, then calls
   * optimizerCore.calculate to run the calculation.
   */
  async function run() {
    startTime = new Date();

    const input = {};
    input.modifiers = [];
    input.tags = [];

    // Checkbox modifiers
    $.each(
      $(
        [`${Selector.INPUT.CLASS} ${Selector.INPUT.TAB_PANE_ACTIVE}`, Selector.INPUT.BUFFS].join(
          ',',
        ),
      ).find(`${Selector.CHECKBOXES_CHECKED}[data-${DataAttribute.MODIFIER}]`),
      function () {
        input.modifiers.push($(this).data(DataAttribute.MODIFIER));
        const span = $(this).siblings(Selector.LABEL).children(Selector.SPAN);
        if (span.is('[data-armory-ids]')) {
          const type = span.children('div').attr('class').split(' ')[1];
          input.tags.push(
            `<div
            data-armory-size="40"
            data-armory-embed="${type.slice(5, -6)}"
            data-armory-ids="${span.data('armory-ids')}"
          ></div>`,
          );
        } else if (span.hasClass('icon')) {
          input.tags.push(`<div class="icon icon-lg ${span.attr('class').split(' ')[1]}"></div>`);
        }
      },
    );

    // Select modifiers
    $.each(
      $(
        [
          Selector.SELECT.RUNES,
          Selector.SELECT.SIGIL_1,
          Selector.SELECT.SIGIL_2,
          Selector.SELECT.FOOD,
          Selector.SELECT.UTILITY,
        ].join(','),
      )
        .children(Selector.DROPDOWN_MENU)
        .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}[data-${DataAttribute.MODIFIER}]`),
      function () {
        input.modifiers.push($(this).data(DataAttribute.MODIFIER));
        input.tags.push(
          `<div
          data-armory-size="40"
          data-armory-embed="items"
          data-armory-ids="${$(this).children(Selector.SPAN).data('armory-ids')}"
        ></div>`,
        );
      },
    );

    // Omnipotion
    if ($(Selector.CHECKBOX.OMNIPOTION).prop(PropertyName.CHECKED)) {
      input.modifiers.push(Omnipotion);
      input.tags.push(
        '<div data-armory-size="40" data-armory-embed="items" data-armory-ids="79722"></div>',
      );
    }

    input.modifiers.push({
      flat: {
        'Agony Resistance': Number.parseInt($(Selector.INPUT.AGONY_RESISTANCE).val(), 10) || 0,
      },
    });

    // Extra stats
    $('#go-extra')
      .find('input[id^="go-input-extra"]')
      .each(function () {
        const value = Number.parseInt($(this).val(), 10);
        if (value && value !== 0) {
          input.modifiers.push({
            flat: {
              [$(this).attr('data-go-modifier')]: value,
            },
          });
        }
      });

    // Extra multipliers
    $('#go-extramods')
      .find('input[id^="go-input-extramods"]')
      .each(function () {
        const value = Number.parseFloat($(this).val());
        if (value && value !== 0) {
          input.modifiers.push({
            multiplier: {
              [$(this).attr('data-go-modifier')]: value,
            },
          });
        }
      });

    input.profession = $(Selector.TOTAL)
      .find(`a.nav-link[data-${DataAttribute.CLASS}].${ClassName.ACTIVE}`)
      .data(DataAttribute.CLASS);

    input.weapontype = $(Selector.SELECT.WEAPON_TYPE)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();

    input.affixes = $(Selector.INPUT.AFFIXES)
      .find(Selector.CHECKBOXES_CHECKED)
      .map(function () {
        return $(this).siblings(Selector.LABEL).text().trim();
      })
      .get();

    input.forcedAffixes = [];
    for (const ForcedSlot of ForcedSlots) {
      const inputValue = $(Selector.INPUT.FORCE + ForcedSlot).val();
      input.forcedAffixes.push(inputValue || '');
    }

    input.rankby = $(Selector.SELECT.RANKBY)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();

    input.minBoonDuration = Number.parseFloat($(Selector.INPUT.MIN_BOON_DURATION).val());
    input.minHealingPower = Number.parseInt($(Selector.INPUT.MIN_HEALING_POWER).val(), 10);
    input.minToughness = Number.parseInt($(Selector.INPUT.MIN_TOUGHNESS).val(), 10);
    input.maxToughness = Number.parseInt($(Selector.INPUT.MAX_TOUGHNESS).val(), 10);
    input.maxResults = Number.parseInt($(Selector.INPUT.MAX_RESULTS).val(), 10) || 10;

    input.primaryInfusion = $(`${Selector.SELECT.INFUSION}-primary`)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();
    input.secondaryInfusion = $(`${Selector.SELECT.INFUSION}-secondary`)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();
    input.primaryMaxInfusions = Math.max(
      Number.parseInt($(`${Selector.SELECT.INFUSION}-primary-max`).val(), 10) || MAX_INFUSIONS,
      0,
    );
    input.secondaryMaxInfusions = Math.max(
      Number.parseInt($(`${Selector.SELECT.INFUSION}-secondary-max`).val(), 10) || MAX_INFUSIONS,
      0,
    );
    input.infusionNoDuplicates = $('#go-select-infusion-duplicates').prop('checked');

    if ($('#go-checkbox-distribution-advanced').prop('checked')) {
      const distribution = ['Power', ...Attributes.CONDITION].map((key) => {
        const lowerKey = key.toLowerCase();
        const value =
          Number.parseFloat($(`#go-checkbox-distribution-advanced-${lowerKey}`).val()) || 0;
        return [key, value];
      });
      input.distribution = Object.fromEntries(distribution);
    } else {
      input.percentDistribution = {
        Power: 0,
        ...Object.fromEntries(Attributes.CONDITION.map((condition) => [condition, 0])),
      };
      $.each(
        $('#go-condition-distribution-input').find('input[data-go-distribution]'),
        function () {
          const percentage = Number.parseInt($(this).val(), 10);
          if (percentage) {
            input.percentDistribution[$(this).data('go-distribution')] = percentage;
          }
        },
      );
    }

    // the next time the DOM updates after this is after ≥1 iteration loop;
    // if the calculation is really really fast the main UI won't even flicker 😎
    jQueryList.children().css('visibility', 'hidden');
    await new Promise((resolve) => { setTimeout(resolve, 0); });

    jQueryList.empty();
    lockUI(true);

    STOP_SIGNAL = false;

    const settings = optimizerCore.setup(input);
    const generator = optimizerCore.calculate(settings);

    $(Selector.OUTPUT.PROGRESS_BAR)
      .closest('td')
      .attr(
        'colspan',
        Slots[settings.weapontype].length +
          1 +
          Boolean(settings.primaryInfusion) +
          Boolean(settings.secondaryInfusion),
      );
    $(Selector.OUTPUT.PROGRESS_BAR).css('width', `${0}%`).children(Selector.SPAN).text('0%');
    $(Selector.OUTPUT.PROGRESS_BAR).parent().show();

    $(Selector.OUTPUT.HEADER).html(
      `<th>
      ${settings.rankby}
      </th>` +
        $.map(
          Slots[settings.weapontype],
          (slot) =>
            `<th title="${slot.name}">
          ${slot.short}
          </th>`,
        ).join('') +
        (settings.primaryInfusion
          ? `<th title="${settings.primaryInfusion}">
              ${settings.primaryInfusion.slice(0, 4)}
            </th>`
          : '') +
        (settings.secondaryInfusion
          ? `<th title="${settings.secondaryInfusion}">
              ${settings.secondaryInfusion.slice(0, 4)}
            </th>`
          : ''),
    );

    // calculation loop
    let done = false;
    let oldPercent = 0;
    let newPercent;
    let count = 0;
    let isChanged = true;
    currentList = [];
    let newList;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      ({
        done,
        value: { percent: newPercent, isChanged, newList },
      } = generator.next());

      if (done) {
        updateDOM(newList);
        updateProgressBar(newPercent, `Completed in ${Date.now() - startTime}ms`);
        break;
      } else {
        if (isChanged && count++ % 3 === 0) {
          updateDOM(newList);
        }

        if (newPercent !== oldPercent) {
          updateProgressBar(newPercent, `${newPercent}%`);
          oldPercent = newPercent;
        }

        // pause to let UI update and register a stop button press
        await new Promise((resolve) => { setTimeout(resolve, 0); });

        if (STOP_SIGNAL) {
          updateProgressBar(
            newPercent,
            `Cancelled after ${Date.now() - startTime}ms (${newPercent}%)`,
          );
          break;
        }
      }
    }

    lockUI(false);
    if (jQueryList.children().length > 0) {
      prettyResults();
    }
  }

  function characterToRow(character) {
    const { settings, attributes, gear, infusions } = character;

    return $(
      `<tr>
        <td><strong>
          ${Number(attributes[settings.rankby].toFixed(2)).toLocaleString('en-US')}
        </strong></td>
        ${$.map(gear, (attribute) => `<td><samp>${attribute.slice(0, 4)}</samp></td>`).join('')}
        ${$.map(infusions, (count) => `<td><samp>${count}</samp></td>`).join('')}
      </tr>`,
    ).data('character', character);
  }

  // this algorithm assumes you only ever insert into this list
  function updateDOM(newList) {
    // insert all new items
    let newItem = null;
    // eslint-disable-next-line unicorn/no-for-loop
    for (let index = 0; index < newList.length; index++) {
      if (newList[index] !== currentList[index]) {
        newItem = characterToRow(newList[index]);
        currentList.splice(index, 0, newList[index]);

        if (index) {
          jQueryList
            .children()
            .eq(index - 1)
            .after(newItem);
        } else {
          jQueryList.prepend(newItem);
        }
      }
    }

    // remove extra items
    for (let index = currentList.length - 1; index > newList.length - 1; index--) {
      jQueryList.children().eq(index).remove();
    }

    currentList = [...newList];
  }

  // Generates the card, that shows up when one clicks on the result.
  function toModal(_character) {
    const toCard = (title, items) =>
      `<div class="card card-${_character.settings.profession} mb-3">
        <div class="card-header card-header-small">${title}</div>
        <div class="card-body p-0">
          <table class="table table-sm table-hover">
            ${
              items
                ? Object.entries(items)
                    .map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`)
                    .join('')
                : ''
            }
          </table>
        </div>
      </div>`;

    optimizerCore.updateAttributes(_character);
    console.debug('character:', _character);
    const { attributes, settings, results, infusions, gearStats } = _character;

    let modal = '<div class="modal">';
    modal += '<div class="modal-dialog modal-lg">';
    modal += '<div class="modal-content">';

    // Header
    modal += '<div class="modal-header">';
    modal += '<h5 class="modal-title">Character Overview</h5>';
    modal +=
      '<button type="button" class="close" data-dismiss="modal">' +
      '<span class="fa fa-times"></span></button>';
    modal += '</div>';

    // Body
    modal += '<div class="modal-body">';
    modal += '<div class="container-fluid">';
    modal += '<div class="row">';

    // Tags
    modal += `<div class="col-12 text-center">
        <div class="card card-${settings.profession} mb-3">
          <div class="card-header card-header-small">
            Modifiers
          </div>
          <div class="card-body character-tags">
            ${settings.tags.join('')}
          </div>
        </div>
      </div>`;

    // First column
    modal += '<div class="col-12 col-lg-6">';

    modal += toCard('Indicators', results.indicators);

    const gear = {};
    $.each(_character.gear, (index, value) => {
      gear[Slots[settings.weapontype][index].name] = value;
    });
    modal += toCard('Gear', gear);

    if (infusions) {
      modal += toCard('Stat Infusions', infusions);
    }

    // effective gain from adding +5 infusions
    modal += toCard('Damage increase from +5 of attribute', results.effectivePositiveValues);

    // effective loss by not having +5 infusions
    modal += toCard('Damage loss from -5 of attribute', results.effectiveNegativeValues);

    if (infusions) {
      const statsFromGear = { ...gearStats };
      for (const [stat, value] of Object.entries(infusions)) {
        statsFromGear[stat] = (statsFromGear[stat] || 0) + value * INFUSION_BONUS;
      }

      modal += toCard('Stat total from affixes/infusions only', statsFromGear);
    } else {
      modal += toCard('Stat total from affixes only', gearStats);
    }

    modal += '</div>';
    // End of first column

    // Second column
    modal += '<div class="col-12 col-lg-6">';

    const primaryAttributes = {};
    $.each(Attributes.PRIMARY, (index, attribute) => {
      primaryAttributes[attribute] = attributes[attribute] || 0;
    });
    modal += toCard('Primary Attributes', primaryAttributes);

    const secondaryAttributes = {};
    $.each(Attributes.SECONDARY, (index, attribute) => {
      secondaryAttributes[attribute] = attributes[attribute] || 0;
    });
    modal += toCard('Secondary Attributes', secondaryAttributes);

    const derivedAttributes = {};
    $.each(Attributes.DERIVED, (index, attribute) => {
      switch (attribute) {
        case 'Critical Chance':
        case 'Boon Duration':
        case 'Condition Duration':
          derivedAttributes[attribute] =
            attributes[attribute] > 100
              ? `100.00% (${attributes[attribute].toFixed(2)})`
              : `${attributes[attribute].toFixed(2)}%`;
          break;
        case 'Critical Damage':
          derivedAttributes[attribute] = `${attributes[attribute].toFixed(2)}%`;
          break;
        default:
          derivedAttributes[attribute] = attributes[attribute];
          break;
      }
    });
    modal += toCard('Derived Attributes', derivedAttributes);

    const effectiveAttributes = {};
    $.each(Attributes.EFFECTIVE, (index, attribute) => {
      const value = attributes[attribute] || 0;
      effectiveAttributes[attribute] = Number(value.toFixed(5)).toLocaleString('en-US');
    });
    modal += toCard('Effective Attributes', effectiveAttributes);

    const durationAttributes = {};
    let showDurations = false;
    $.each(Attributes.BOON_DURATION, (index, attribute) => {
      let value = attributes[attribute];
      if (value) {
        showDurations = true;
        value += attributes['Boon Duration'];
        durationAttributes[attribute] =
          value > 100 ? `100.00% (${value.toFixed(2)})` : `${value.toFixed(2)}`;
      }
    });
    $.each(Attributes.CONDITION_DURATION, (index, attribute) => {
      let value = attributes[attribute] || 0;
      if (value) {
        showDurations = true;
        value += attributes['Condition Duration'];
        durationAttributes[attribute] =
          value > 100 ? `100.00% (${value.toFixed(2)})` : `${value.toFixed(2)}`;
      }
    });
    if (showDurations) {
      modal += toCard('Special Durations', durationAttributes);
    }

    const conditionAttributes = {};
    $.each(Attributes.CONDITION_DAMAGE, (index, attribute) => {
      conditionAttributes[attribute] = (attributes[attribute] || 0).toFixed(2);
    });
    modal += toCard('Condition Damage Ticks', conditionAttributes);

    if (!settings.percentDistribution || settings.percentDistribution['Power'] !== 100) {
      // effective damage distribution
      modal += toCard('Effective Damage Distribution', results.effectiveDamageDistribution);

      // damage indicator breakdown
      modal += toCard('Damage indicator breakdown', results.damageBreakdown);
    }

    modal += '</div>';
    // End of second column

    modal += '</div>';
    modal += '</div>';
    modal += '</div>';
    // End of Body

    modal += '</div>';
    modal += '</div>';
    modal += '</div>';

    return $(modal);
  }

  function updateProgressBar(percent, text) {
    $(Selector.OUTPUT.PROGRESS_BAR).css('width', `${percent}%`).children('span').text(text);
  }

  function lockUI(locked) {
    $('body').css('cursor', locked ? 'progress' : 'default');
    $(Selector.INPUT.OPTIMIZER).css('opacity', locked ? 0.5 : 1);
    $(Selector.INPUT.CLASS).css('opacity', locked ? 0.5 : 1);
    $(Selector.START).prop(PropertyName.DISABLED, locked);
    $(Selector.START).find('.fa').toggleClass('fa-spin', locked);
    $(Selector.STOP).prop(PropertyName.DISABLED, !locked);
  }

  function prettyResults() {
    const getSortValue = (character) => character.attributes[character.settings.rankby];

    // display indicator line under the results identical to the best
    const bestValue = getSortValue(jQueryList.children().eq(0).data('character'));
    // eslint-disable-next-line consistent-return
    jQueryList.children().each((index, element) => {
      if (getSortValue($(element).data('character')) !== bestValue) {
        $(element).prev().css('border-bottom', '4px solid #2f3238');
        return false; // jquery loop break
      }
    });

    // slightly fade the most common affix
    const attributeCount = {};
    $('#go-output samp').each((index, element) => {
      const attribute = $(element).text();
      attributeCount[attribute] = (attributeCount[attribute] || 0) + 1;
    });
    const max = Math.max(...Object.values(attributeCount));
    let mostFrequent = '';
    for (const [attribute, count] of Object.entries(attributeCount)) {
      if (count === max) {
        mostFrequent = attribute;
      }
    }

    $('#go-output samp').each((index, element) => {
      if ($(element).text() === mostFrequent) {
        $(element).css('opacity', '0.7');
      } else {
        $(element).css('color', '#ddd');
      }
    });
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  // Dropdown select
  $(Selector.DROPDOWN_SELECT)
    .children(Selector.DROPDOWN_MENU)
    .children(Selector.DROPDOWN_ITEM)
    .on(Event.CLICK, function (event_) {
      if ($(this).hasClass(ClassName.DISABLED)) {
        event_.stopPropagation();
        return;
      }

      $(this).siblings(Selector.DROPDOWN_ITEM).removeClass(ClassName.ACTIVE);
      $(this).addClass(ClassName.ACTIVE);
      $(this).parent().siblings(Selector.DROPDOWN_TOGGLE).html($(this).html());
    });

  // Priorities presets
  $(`[data-${DataAttribute.PRIORITIES}]`).on(Event.CLICK, function () {
    if ($(this).data(DataAttribute.PRIORITIES) === 'power-dps') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.BERSERKER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.ASSASSIN).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(0);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'power-boon') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.BERSERKER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.ASSASSIN).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.DIVINER).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(100);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'condi-dps') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.VIPER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.SINISTER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.GRIEVING).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(0);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'heal') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.HARRIER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.MINSTREL).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.MAGI).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(100);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'condi-boon') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.VIPER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.SERAPH).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.CELESTIAL).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(79);
    }
  });

  $(`[data-${DataAttribute.PRESELECTION}]`).on(Event.CLICK, function () {
    if ($(this).data(DataAttribute.PRESELECTION) === 'pchrono') {
      $('[id^="go-checkbox-mesmer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-mesmer-fragility').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-egotism').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-vicious-expression').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-fencers-finesse').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-superiority-complex').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'staffmirage') {
      $('[id^="go-checkbox-mesmer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-mesmer-signet-of-domination').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-signet-of-midnight').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-illusionary-membrane').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-chaotic-potency').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-chaotic-potency-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-chaotic-persistence').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-nomads-endurance').prop(PropertyName.CHECKED, true);
    } else if (
      $(this).data(DataAttribute.PRESELECTION) === 'dh' ||
      $(this).data(DataAttribute.PRESELECTION) === 'pqfb'
    ) {
      $('[id^="go-checkbox-guardian-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-guardian-fiery-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-symbolic-avenger').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-symbolic-exposure').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-zealous-blade').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-retribution').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-power').prop(PropertyName.CHECKED, true);

      if ($(this).data(DataAttribute.PRESELECTION) === 'dh') {
        $('#go-checkbox-guardian-zealots-aggression').prop(PropertyName.CHECKED, true);
        $('#go-checkbox-guardian-pure-of-sight').prop(PropertyName.CHECKED, true);
        $('#go-checkbox-guardian-big-game-hunter').prop(PropertyName.CHECKED, true);
      } else {
        $('#go-checkbox-guardian-imbued-haste').prop(PropertyName.CHECKED, true);
      }
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cfb') {
      $('[id^="go-checkbox-guardian-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-guardian-signet-of-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-fire').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-power').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-amplified-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-inspired-virtue-9').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-virtue-of-retribution').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-power-of-the-virtuous').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-imbued-haste').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cfb2') {
      $('[id^="go-checkbox-guardian-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-guardian-signet-of-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-fiery-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-symbolic-exposure').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-kindled-zeal').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-fire').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-power').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-amplified-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-imbued-haste').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pbers') {
      $('[id^="go-checkbox-warrior-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-warrior-peak-performance').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-signet-of-might').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-great-fortitude').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-pinnacle-of-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-berserkers-power').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-warriors-sprint').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-double-standards').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-axe-mastery-one').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-axe-mastery-two').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-blood-reaction-with').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-fatal-frenzy').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-bloody-roar').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cbers') {
      $('[id^="go-checkbox-warrior-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-warrior-wounding-precision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-deep-strikes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-blade-master').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-blade-master-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-bloodlust').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-furious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-double-standards').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-heat-the-soul').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-heat-the-soul-with').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-fatal-frenzy').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-king-of-fires').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pwea') {
      $('[id^="go-checkbox-elementalist-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-elementalist-empowering-flame').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-burning-precision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-power-overwhelming').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-power-overwhelming-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-pyromancers-training').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-ferocious-winds').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-stormsoul').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-aeromancers-training').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-bolt-to-the-heart').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-masters-fortitude').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elements-of-rage').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-swift-revenge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elemental-polyphony-fire').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cwea') {
      $('[id^="go-checkbox-elementalist-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-elementalist-empowering-flame').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-burning-precision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-burning-rage').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-pyromancers-training').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-stone-flesh').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-serrated-stones').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-strength-of-stone').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-geomancers-defense').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-superior-elements').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-weavers-prowess').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elemental-polyphony-fire').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elements-of-rage').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pslb') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-farsighted').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-predators-onslaught').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-signet-of-the-wild').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-ferocious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-1').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-4').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cslb') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-hidden-barbs').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-hunters-tactics').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-light-on-your-feet').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-taste-for-danger').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-poison-master').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-deadly').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cslb2') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-hidden-barbs').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-hunters-tactics').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-taste-for-danger').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-poison-master').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-deadly').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'hslb') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-hidden-barbs').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-hunters-tactics').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-vicious-quarry').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-deadly').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-1').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-4').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pren') {
      $('[id^="go-checkbox-revenant-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-revenant-rising-tide').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-ferocious-aggression').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-unsuspecting-strikes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-destructive-impulses-dual').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-targeted-destruction').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-swift-termination').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-ambush-commander').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-brutal-momentum').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cren-deva') {
      $('[id^="go-checkbox-revenant-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-revenant-acolyte-of-torment').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-seething-malice').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-pact-of-pain').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-yearning-empowerment').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-unsuspecting-strikes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-destructive-impulses-mix').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-targeted-destruction').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-ambush-commander').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-blood-fury').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-heartpiercer').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-brutal-momentum').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-lasting-legacy').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pholo') {
      $('[id^="go-checkbox-engineer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-engineer-glass-cannon').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-explosive-temper').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-shaped-charge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-big-boomer').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-high-caliber').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-hematic-focus').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-no-scope').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-serrated-steel').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-modified-ammunition-10').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pscrap') {
      $('[id^="go-checkbox-engineer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-engineer-glass-cannon').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-explosive-temper').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-shaped-charge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-big-boomer').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-high-caliber').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-hematic-focus').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-no-scope').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-serrated-steel').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-modified-ammunition-10').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-object-in-motion-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-impact-savant').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-applied-force').prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cholo') {
      $('[id^="go-checkbox-engineer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-engineer-glass-cannon').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-explosive-temper').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-shaped-charge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-chemical-rounds').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-hematic-focus').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-thermal-vision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-serrated-steel').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-incendiary-powder').prop(PropertyName.CHECKED, true);
    }
  });

  // Infusion presets
  $(`${Selector.SELECT.INFUSION}-presets button`).click(function () {
    const infusions = $(this).text() === 'None' ? ['None', 'None'] : $(this).text().split(' + ').map(text => text.trim());
    $('#go-select-infusion-primary .dropdown-item').each(function () {
      if ($(this).text().trim() === infusions[0]) {
        $(this).click();
      }
    });
    $('#go-select-infusion-secondary .dropdown-item').each(function () {
      if ($(this).text().trim() === infusions[1]) {
        $(this).click();
      }
    });
  });

  // Buff presets
  $(`[data-${DataAttribute.BUFFS}]`).on(Event.CLICK, function () {
    if ($(this).data(DataAttribute.BUFFS) === 'none') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, false);
    } else if ($(this).data(DataAttribute.BUFFS) === 'fractal') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.MIGHT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.FURY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.VULNERABILITY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_STRENGTH).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_DISCIPLINE).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.EMPOWER_ALLIES).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.SPOTTER).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.BANE_SIGNET).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.FROST_SPIRIT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.ASSASSINS_PRESENCE).prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.BUFFS) === 'benchmark') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.MIGHT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.FURY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.VULNERABILITY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_STRENGTH).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_DISCIPLINE).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.EMPOWER_ALLIES).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.SPOTTER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANE_SIGNET).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.FROST_SPIRIT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.ASSASSINS_PRESENCE).prop(PropertyName.CHECKED, false);
    } else if ($(this).data(DataAttribute.BUFFS) === 'all') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, true);
    }
  });

  const setAdvanced = (array) => {
    for (const [index, key] of ['Power', ...Attributes.CONDITION].entries()) {
      const lowerKey = key.toLowerCase();
      $(`#go-checkbox-distribution-advanced-${lowerKey}`).val(array[index]);
    }
  }

  // Distribution presets
  $(`[data-${DataAttribute.DISTRIBUTION}]`).on(Event.CLICK, function () {
    switch ($(this).data(DataAttribute.DISTRIBUTION)) {
      case 'power':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([100, 100, 100, 100, 100]);
        break;
      case 'cwarr':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([27, 81, 96, 99, 100]);
        setAdvanced([1694, 10.1, 16.9, 1.9, 1.2, 0]);
        break;
      case 'cfb':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([31, 96, 99, 99, 100]);
        setAdvanced([2400, 15.4, 4.7, 0, 1.2, 0]);
        break;
      case 'cfb2':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([24, 96, 99, 99, 100]);
        break;
      case 'cweasw':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([36, 89, 100, 100, 100]);
        setAdvanced([2796, 12.8, 16.2]);
        break;
      case 'cweadagg':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([29, 84, 100, 100, 100]);
        break;
      case 'cren-deva':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([44, 64, 75, 80, 100]);
        setAdvanced([2978, 4.6, 10, 4.9, 18.3]);
        break;
      case 'cren-invo':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([42, 64, 75, 80, 100]);
        break;
      case 'cslb':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([30, 45, 75, 100, 100]);
        break;
      case 'cslb2':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([30, 52, 78, 100, 100]);
        break;
      case 'hslb':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([43, 61, 89, 100, 100]);
        break;
      case 'cholo':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([31, 77, 86, 95, 95]);
        break;
      default:
        throw new Error(`Error: unimplemented button: ${$(this).data(DataAttribute.DISTRIBUTION)}`);
    }
  });

  // Advanced distribution show/hide
  function toggleAdvancedDistribution () {
    if($('#go-checkbox-distribution-advanced').prop('checked')) {
      $('#go-distribution-advanced').show();
    } else {
      $('#go-distribution-advanced').hide()
    }
  }
  toggleAdvancedDistribution();
  $('#go-checkbox-distribution-advanced').click(toggleAdvancedDistribution);

  // Calculate button
  $(Selector.START).on(Event.CLICK, () => {
    run().catch((error) => {
      alert('There was an error in the calculation!\n\n' + error);
      console.log('Caught error in calculation:');
      lockUI(false);
      throw error;
    });
  });
  $(Selector.STOP).on(Event.CLICK, () => {
    STOP_SIGNAL = true;
  });

  // Modal window
  $(Selector.OUTPUT.LIST).on(Event.CLICK, 'tr', function () {
    toModal($(this).data('character')).modal('show');
    $.getScript('https://unpkg.com/armory-embeds/armory-embeds.js');
  });

  // After class select
  $('#gear-optimizer')
    .find('> .card-nav > .nav-tabs')
    .on('shown.bs.tab', 'a.nav-link', () => {
      $('#go-input-class').siblings().removeClass('d-none');
    });

  /* global noUiSlider */
  noUiSlider.create($('#go-condition-distribution-slider')[0], {
    range: {
      min: [0],
      max: [100],
    },
    start: [100, 100, 100, 100, 100],
    connect: [true, true, true, true, true, true],
    step: 1,
    pips: {
      mode: 'values',
      values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      density: 1,
    },
  });

  for (let index = 0; index < 6; index++) {
    $('#go-condition-distribution-slider')[0]
      .querySelectorAll('.noUi-connect')
      [index].classList.add(`slider-bar-${index}`);
  }

  $('#go-condition-distribution-slider')[0].noUiSlider.on('update', (values, handle) => {
    switch (handle) {
      case 0:
        $('#go-input-power-percentage').val(Number.parseInt(values[0], 10));
        $('#go-input-burning-percentage').val(values[1] - values[0]);
        break;
      case 1:
        $('#go-input-burning-percentage').val(values[1] - values[0]);
        $('#go-input-bleeding-percentage').val(values[2] - values[1]);
        break;
      case 2:
        $('#go-input-bleeding-percentage').val(values[2] - values[1]);
        $('#go-input-poison-percentage').val(values[3] - values[2]);
        break;
      case 3:
        $('#go-input-poison-percentage').val(values[3] - values[2]);
        $('#go-input-torment-percentage').val(values[4] - values[3]);
        break;
      case 4:
        $('#go-input-torment-percentage').val(values[4] - values[3]);
        $('#go-input-confusion-percentage').val(100 - values[4]);
        break;
      // no default
    }
  });

  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('#debug-additive').click(() => {
    if ($('.debug-legend').length === 0) {
      $('#go-input-class .card-body').prepend($('<div class="debug-legend"></div>'));
    } else {
      $('#debug-legend').empty();
    }

    $('.debug-legend').html(`
      Damage bonus stacks:
      <span style="color: green">multiplicatively (normal)</span> ///
      <span style="color: blue">additively with other additive mods</span>
    `);

    $('#go-input-class .input').css('color', 'inherit');

    $('#go-input-class .input').each((index, inputElement) => {
      const modifier = $(inputElement).find('input').attr('data-go-modifier');
      if (!modifier) {
        return;
      }

      if (modifier.includes('add: ')) {
        $(inputElement).css('color', 'blue');
      }

      if (modifier.includes('"Effective Power')) {
        $(inputElement).css('color', 'green');
      }

      if (modifier.includes('"Effective Condition Damage')) {
        $(inputElement).css('color', 'green');
      }

      if (
        modifier.includes('add: ') &&
        (modifier.includes('"Effective Power') || modifier.includes('"Effective Condition Damage'))
      ) {
        $(inputElement).css('color', 'purple');
      }
    });
  });

  $('#debug-converted').click(() => {
    if ($('.debug-legend').length === 0) {
      $('#go-input-class .card-body').prepend($('<div class="debug-legend"></div>'));
    } else {
      $('#debug-legend').empty();
    }

    $('.debug-legend').html(`
      Added buff stats will be:
      <span style="color: yellow">converted by e.g. sharpening stones</span> ///
      <span style="color: orange">not converted by e.g. sharpening stones</span>
    `);

    $('#go-input-class .input').css('color', 'inherit');

    $('#go-input-class .input').each((index, inputElement) => {
      const modifier = $(inputElement).find('input').attr('data-go-modifier');
      if (!modifier) {
        return;
      }

      if (modifier.includes('flat')) {
        $(inputElement).css('color', 'yellow');
      }

      if (modifier.includes('buff')) {
        $(inputElement).css('color', 'orange');
      }

      if (modifier.includes('flat') && modifier.includes('buff')) {
        $(inputElement).css('color', 'purple');
      }
    });
  });
})(jQuery);
