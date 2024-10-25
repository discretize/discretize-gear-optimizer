import { compress, decompress } from '@discretize/object-compression';
import {
  BuildPageSchema,
  version as schemaVersion,
} from '../../components/url-state/schema/BuildPageSchema_v3';
import { buffsDict } from '../../components/url-state/schema/SchemaDicts';
import { PARAMS } from '../../utils/queryParam';
import { objectKeys } from '../../utils/usefulFunctions';
import type { AppThunk } from '../redux-hooks';
import { changeBuildPage, changeCharacter, getSkills, getWeapons } from '../slices/buildPage';
import { getProfession, getSelectedCharacter } from '../slices/controlsSlice';
import { getGameMode } from '../slices/userSettings';

export const exportStateCharacter =
  ({
    newPage,
    copyToClipboard,
  }: {
    newPage?: ReturnType<typeof window.open>;
    copyToClipboard?: boolean;
  }): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();

    // extract all variables
    const skills = getSkills(state);
    const weapons = getWeapons(state);
    const gameMode = getGameMode(state);

    const profession = getProfession(state);
    const character = getSelectedCharacter(state);

    if (!character) {
      console.error('export thunk: No character supplied');
      return;
    }

    const lines = character.settings.cachedFormState.traits.selectedLines;
    const selected = character.settings.cachedFormState.traits.selectedTraits;
    const { buffs } = character.settings.cachedFormState.buffs;

    const { attributes: allAttributes, gear, settings, infusions } = character;
    const { specialization, weaponType, extrasCombination } = settings;

    // TODO ================================================================
    // TODO ==       ON NEXT SCHEMA UPGRADE ADD JADE BOT TIER             ==
    // TODO ================================================================

    // filter out unnecessary attributes
    const attributes: any = {};
    objectKeys(BuildPageSchema.character.attributes).forEach((key) => {
      attributes[key] = allAttributes[key];
    });

    // since we cant use the compression library for object where the layout of keys is unknown, we stringify it.
    const minimalCharacter = {
      attributes,
      gear,
      infusions: JSON.stringify(infusions) || '',
      settings: {
        extrasCombination,
        profession,
        specialization,
        weaponType,
      },
    };

    dispatch(changeCharacter(minimalCharacter));

    // create bit map for buffs
    const conv = (val: unknown) => (val ? 1 : 0);
    const buffsInteger = buffsDict.reduce(
      // eslint-disable-next-line no-bitwise
      (acc, curr) => (acc + conv(buffs[curr])) << 1,
      conv(buffs[0]),
    );

    const object = {
      character: minimalCharacter,
      skills,
      traits: { lines, selected },
      weapons,
      buffs: buffsInteger,
    };

    const result: string = await new Promise((resolve) => {
      compress({
        object,
        schema: BuildPageSchema,
        onSuccess: resolve,
      });
    });

    const urlObject = new URL('build/', window.location.href);
    urlObject.searchParams.set(PARAMS.GAMEMODE, gameMode);
    urlObject.searchParams.set(PARAMS.VERSION, String(schemaVersion));
    urlObject.searchParams.set(PARAMS.DATA, result);
    const url = urlObject.href;

    if (newPage) {
      newPage.location.href = url;
    }
    if (copyToClipboard) {
      navigator.clipboard.writeText(url);
    }
  };

export const importStateCharacter =
  ({ buildUrl: input, version }: { buildUrl: string | null; version: number }): AppThunk =>
  async (dispatch) => {
    if (!input) {
      console.error('import thunk: No url parameter supplied');
      return;
    }
    if (typeof version === 'undefined') {
      console.error('import thunk: No version parameter supplied');
      return;
    }

    try {
      // load build state from url
      const { BuildPageSchema: schema } = await import(
        `../../components/url-state/schema/BuildPageSchema_v${version}.js`
      );

      const result = await new Promise((resolve) => {
        decompress({
          string: input,
          schema,
          onSuccess: resolve,
        });
      });

      dispatch(changeBuildPage(result));
    } catch (e) {
      console.log('Problem restoring template!');
      console.log(e);
    }
  };
