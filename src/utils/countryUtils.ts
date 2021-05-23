import countries from './constants/countries';

const countryCodeToFlag = (isoCode: string | undefined) => {
  if (!isoCode) {
    return 'Unknown';
  }

  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
};

const countryCodeToLabel = (isoCode: string | undefined) => {
  const country = countries.find((c) => c.code === isoCode);

  if (!country) {
    return 'Unknown';
  }

  return country.label;
};

export { countryCodeToFlag, countryCodeToLabel };
