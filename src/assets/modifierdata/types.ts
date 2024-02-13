import { Type, type Static } from '@sinclair/typebox';

import { LiteralUnion, StrictObject } from '../schemaHelpers';
import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allAttributePointModes,
  allConversionAfterBuffsDestinationKeys,
  allConversionAfterBuffsSourceKeys,
  allConversionDestinationKeys,
  allConversionSourceKeys,
  allDamageKeys,
  allDamageModes,
} from './metadata';

export const modifierSchema = StrictObject({
  damage: Type.Optional(
    Type.Partial(
      Type.Record(
        LiteralUnion(allDamageKeys),
        Type.Union([
          Type.Tuple([Type.String(), LiteralUnion(allDamageModes)]),
          Type.Tuple([
            Type.String(),
            LiteralUnion(allDamageModes),
            Type.String(),
            LiteralUnion(allDamageModes),
          ]),
        ]),
      ),
    ),
  ),
  attributes: Type.Optional(
    Type.Partial(
      Type.Intersect([
        Type.Record(
          LiteralUnion(allAttributePointKeys),
          Type.Union([
            Type.Tuple([Type.Number(), LiteralUnion(allAttributePointModes)]),
            Type.Tuple([
              Type.Number(),
              LiteralUnion(allAttributePointModes),
              Type.Number(),
              LiteralUnion(allAttributePointModes),
            ]),
          ]),
        ),
        Type.Record(LiteralUnion(allAttributePercentKeys), Type.String()),
        Type.Record(LiteralUnion(allAttributeCoefficientKeys), Type.Number()),
      ]),
    ),
  ),
  conversion: Type.Optional(
    Type.Partial(
      Type.Record(
        LiteralUnion(allConversionSourceKeys),
        Type.Partial(Type.Record(LiteralUnion(allConversionDestinationKeys), Type.String())),
      ),
    ),
  ),
  conversionAfterBuffs: Type.Optional(
    Type.Partial(
      Type.Record(
        LiteralUnion(allConversionAfterBuffsSourceKeys),
        Type.Partial(
          Type.Record(LiteralUnion(allConversionAfterBuffsDestinationKeys), Type.String()),
        ),
      ),
    ),
  ),
});
export type Modifer = Static<typeof modifierSchema>;

export const appliedModifierSchema = StrictObject({
  id: Type.String(),
  text: Type.Optional(Type.String()),
  subText: Type.Optional(Type.String()),
  textOverride: Type.Optional(Type.String()),
  type: Type.Optional(Type.String()),
  hasLifesteal: Type.Optional(Type.Boolean()),
  amountData: Type.Optional(
    StrictObject({
      label: Type.String(),
      default: Type.Number(),
      quantityEntered: Type.Number(),
      defaultInput: Type.Optional(Type.String()),
      disableBlacklist: Type.Optional(Type.Boolean()),
    }),
  ),
  modifiers: modifierSchema,
  wvwModifiers: Type.Optional(modifierSchema),
  minor: Type.Optional(Type.Boolean()),
  defaultEnabled: Type.Optional(Type.Boolean()),
  gw2id: Type.Optional(Type.Number()),
  priceIds: Type.Optional(Type.Array(Type.Number())),
  displayIds: Type.Optional(Type.Array(Type.Number())),
});
export type AppliedModifier = Static<typeof appliedModifierSchema>;

export const modiferDataSchema = Type.Array(
  StrictObject({
    section: Type.String(),
    id: Type.Optional(Type.Number()),
    items: Type.Array(appliedModifierSchema),
    note: Type.Optional(Type.String()),
  }),
);
export type ModiferData = Static<typeof modiferDataSchema>;
