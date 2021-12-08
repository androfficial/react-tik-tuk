const numberFormatting = (number) => {
  // Если не целое число
  if (!Number.isInteger(number)) {
    return number;
  }
  // Если не целое число но со значением после точки 0, Напр: 100500.0, 100500.00 и т.п.
  const integer = Math.trunc(number);

  if (String(integer).length > 4 && String(integer).length < 7) {
    return `${+(integer / 1000).toFixed(1)}К`;
  }
  if (String(integer).length > 6) {
    return `${(integer / 1000000).toFixed(1)}М`;
  }
  return number;
};

export default numberFormatting;
