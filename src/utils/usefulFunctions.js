export function firstUppercase(text) {
  if (typeof text === "undefined" || text === null || text === "") return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
