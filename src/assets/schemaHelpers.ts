import { Type, type TUnion, TLiteral, TProperties, ObjectOptions } from '@sinclair/typebox';

// https://github.com/sinclairzx81/typebox/issues/751#issuecomment-1929012771
type TLiteralUnion<T extends string[], Acc extends TLiteral[] = []> = T extends [
  infer L extends string,
  ...infer R extends string[],
]
  ? TLiteralUnion<R, [...Acc, TLiteral<L>]>
  : TUnion<Acc>;
export function LiteralUnion<T extends string[]>(values: readonly [...T]): TLiteralUnion<T> {
  return Type.Union(values.map((value) => Type.Literal(value))) as never;
}

// https://github.com/sinclairzx81/typebox/issues/497#issuecomment-1634252652
export const StrictObject = <T extends TProperties>(properties: T, options: ObjectOptions = {}) =>
  Type.Object(properties, { additionalProperties: false, ...options });
