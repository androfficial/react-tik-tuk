const regexp = new RegExp('#([^\\s]*)', 'g');

export const stringFormatting = (str) => str.replace(regexp, '');