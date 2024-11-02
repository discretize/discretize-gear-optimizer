import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { buffsDict } from '../../components/url-state/schema/SchemaDicts';
import type { Character } from '../optimizer/optimizerCore';
import type { RootState } from '../store';

export interface BuildPageData {
  character: {
    attributes: Partial<Character['attributes']>;
    gear: Character['gear'];
    infusions: string;
    settings: {
      extrasCombination: Character['settings']['extrasCombination'];
      profession: Character['settings']['profession'] | '';
      specialization: Character['settings']['specialization'];
      weaponType: Character['settings']['weaponType'];
    };
  };
  skills: {
    healId: number | '';
    utility1Id: number | '';
    utility2Id: number | '';
    utility3Id: number | '';
    eliteId: number | '';
  };
  traits: {
    lines: string[];
    selected: number[][];
  };
  weapons: {
    mainhand1: number | '';
    offhand1: number | '';
    mainhand2: number | '';
    offhand2: number | '';
  };
  buffs: number;
}

export interface DisplayCharacter {
  attributes: Partial<Character['attributes']>;
  gear: Character['gear'];
  infusions: Character['infusions'] | undefined;
  settings: {
    extrasCombination: Character['settings']['extrasCombination'];
    profession: Character['settings']['profession'] | '';
    specialization: Character['settings']['specialization'];
    weaponType: Character['settings']['weaponType'];
  };
}

export interface BuildPageSlice {
  character: DisplayCharacter | null;
  weapons: {
    mainhand1: number | '';
    offhand1: number | '';
    mainhand2: number | '';
    offhand2: number | '';
  };
  skills: {
    healId: number | '';
    utility1Id: number | '';
    utility2Id: number | '';
    utility3Id: number | '';
    eliteId: number | '';
  };
  traits: {
    lines: string[];
    selected: number[][];
  };
  buffs: Record<string, boolean | undefined> | 0;
}

const initialState: BuildPageSlice = {
  character: null,
  weapons: {
    mainhand1: '',
    offhand1: '',
    mainhand2: '',
    offhand2: '',
  },
  skills: {
    healId: '',
    utility1Id: '',
    utility2Id: '',
    utility3Id: '',
    eliteId: '',
  },
  traits: {
    lines: [],
    selected: [],
  },
  buffs: 0,
};

export type SkillTypeId = keyof (typeof initialState)['skills'];
export type WeaponTypeId = keyof (typeof initialState)['weapons'];

export const buildPageSlice = createSlice({
  name: 'buildPage',
  initialState,
  reducers: {
    changeCharacter: (state, action: PayloadAction<DisplayCharacter>) => {
      state.character = action.payload;
    },
    changeWeapon: (state, action: PayloadAction<{ key: WeaponTypeId; value: number | '' }>) => {
      state.weapons[action.payload.key] = action.payload.value;
    },
    changeSkill: (state, action: PayloadAction<{ key: SkillTypeId; value: number | '' }>) => {
      state.skills[action.payload.key] = action.payload.value;
    },
    changeBuildPage: (state, action: PayloadAction<BuildPageData>) => {
      // convert integer to bitstring
      const tempBits = action.payload.buffs.toString(2);
      // pad zeros
      const buffBits =
        tempBits.length < buffsDict.length
          ? '0'.repeat(buffsDict.length - tempBits.length) + tempBits
          : tempBits;
      // force the same order during as it was during compression
      const buffsUnpacked: Record<string, boolean | undefined> = {};
      buffsDict.forEach((buff, index) => {
        buffsUnpacked[buff] = buffBits[index] === '1';
      });

      // handle the case for when no infusions are present. Value must be undefined or else it wont get parsed correctly by the character component
      const infusions = action.payload.character.infusions
        ? (JSON.parse(action.payload.character.infusions) as Character['infusions'])
        : undefined;

      // parse the stringified infusions object again to json
      const character = {
        ...action.payload.character,
        infusions,
      };

      return { ...action.payload, buffs: buffsUnpacked, character };
    },
  },
});

export const getCharacter = (state: RootState) => state.optimizer.buildPage.character;
export const getWeapons = (state: RootState) => state.optimizer.buildPage.weapons;
export const getSkills = (state: RootState) => state.optimizer.buildPage.skills;
export const getTraits = (state: RootState) => state.optimizer.buildPage.traits;
export const getBuffs = (state: RootState) => state.optimizer.buildPage.buffs;

export const { changeCharacter, changeWeapon, changeBuildPage, changeSkill } =
  buildPageSlice.actions;
