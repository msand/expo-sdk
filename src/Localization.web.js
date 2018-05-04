// @flow
/* global Intl */

function getCurrentDeviceCountryAsync(): Promise<string> {
  let lang = navigator.browserLanguage;
  if (typeof lang === 'undefined') {
    lang = navigator.language;
  }
  return lang;
}

function getCurrentLocaleAsync(): Promise<string> {
  return navigator.languages[0];
}

function getCurrentTimeZoneAsync(): Promise<string> {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function getPreferredLocalesAsync(): Promise<array> {
  return navigator.languages;
}

function getISOCurrencyCodesAsync(): Promise<array> {
  return [];
}

export default {
  getCurrentDeviceCountryAsync,
  getCurrentLocaleAsync,
  getCurrentTimeZoneAsync,
  getPreferredLocalesAsync,
  getISOCurrencyCodesAsync,
};
