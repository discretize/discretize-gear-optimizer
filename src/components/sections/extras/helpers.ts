import type React from 'react';

const firstUppercase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatApiText = (apiText: string) =>
  firstUppercase(
    apiText
      .replace(/^Superior Sigil /, 'Sigil ')
      .replace(/^Überlegenes Sigill /, 'Sigill ')
      .replace(/^Sello superior /, 'Sello ')

      .replace(/^Superior Rune /, 'Rune ')
      .replace(/^Überlegene Rune /, 'Rune ')
      .replace(/^Runa superior /, 'Runa ')

      .replaceAll('"', '')
      .replace(/^Plate of /, '')
      .replace(/^Bowl of /, '')
      .replace(/^Slice of /, '')
      .replace(/^Scoop of /, '')
      .replace(/ Squash Soup$/, '')

      // .replace(/^Schüssel mit /, '')
      // .replace(/^Teller mit /, '')

      .replace(/^Plato de /, '')
      .replace(/^Cuenco de /, ''),
  );

export const joinWith = (array: React.ReactNode[], separator: React.ReactNode) =>
  array.flatMap((element) => [element, separator]).slice(0, -1);
