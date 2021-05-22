const countryToFlag = (isoCode: string) => {
  if (!isoCode) {
    return '';
  }
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
};

export default countryToFlag;
