declare module './*.yaml' {
  const data: import('./metadata').ModifierData;
  export default data;
}

// export {};
