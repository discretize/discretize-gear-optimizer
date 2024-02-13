import { z } from 'zod';

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

export const modifierSchema = z
  .object({
    damage: z.optional(
      z.record(
        z.enum(allDamageKeys),
        z.union([
          z.tuple([z.string(), z.enum(allDamageModes)]),
          z.tuple([z.string(), z.enum(allDamageModes), z.string(), z.enum(allDamageModes)]),
        ]),
      ),
    ),
    attributes: z.optional(
      z.intersection(
        z.record(
          z.enum(allAttributePointKeys),
          z.union([
            z.tuple([z.number(), z.enum(allAttributePointModes)]),
            z.tuple([
              z.number(),
              z.enum(allAttributePointModes),
              z.number(),
              z.enum(allAttributePointModes),
            ]),
          ]),
        ),
        z.record(z.enum(allAttributePercentKeys), z.string()),
        z.record(z.enum(allAttributeCoefficientKeys), z.number()),
      ),
    ),
    conversion: z.optional(
      z.record(
        z.enum(allConversionSourceKeys),
        z.record(z.enum(allConversionDestinationKeys), z.string()),
      ),
    ),
    conversionAfterBuffs: z.optional(
      z.record(
        z.enum(allConversionAfterBuffsSourceKeys),

        z.record(z.enum(allConversionAfterBuffsDestinationKeys), z.string()),
      ),
    ),
  })
  .strict();
export type Modifer = z.infer<typeof modifierSchema>;

export const appliedModifierSchema = z
  .object({
    id: z.string(),
    text: z.optional(z.string()),
    subText: z.optional(z.string()),
    textOverride: z.optional(z.string()),
    type: z.optional(z.string()),
    hasLifesteal: z.optional(z.boolean()),
    amountData: z.optional(
      z
        .object({
          label: z.string(),
          default: z.number(),
          quantityEntered: z.number(),
          defaultInput: z.optional(z.string()),
          disableBlacklist: z.optional(z.boolean()),
        })
        .strict(),
    ),
    modifiers: modifierSchema,
    wvwModifiers: z.optional(modifierSchema),
    minor: z.optional(z.boolean()),
    defaultEnabled: z.optional(z.boolean()),
    gw2id: z.optional(z.number()),
    priceIds: z.optional(z.array(z.number())),
    displayIds: z.optional(z.array(z.number())),
  })
  .strict();
export type AppliedModifier = z.infer<typeof appliedModifierSchema>;

export const modiferDataSchema = z.array(
  z
    .object({
      section: z.string(),
      id: z.optional(z.number()),
      items: z.array(appliedModifierSchema),
      note: z.optional(z.string()),
    })
    .strict(),
);
export type ModiferData = z.infer<typeof modiferDataSchema>;
