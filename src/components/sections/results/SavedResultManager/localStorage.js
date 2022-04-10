/* eslint-disable import/prefer-default-export */
const KEY = 'savedResults';

export function getAll() {
  if (typeof window === 'undefined') return [];
  let stored = [];
  try {
    stored = JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch (e) {
    console.warn('There was a problem loading the saved characters from your disk!');
  }
  return stored;
}

export function save(stored) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(stored));
}
