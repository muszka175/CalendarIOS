/* eslint import/prefer-default-export: 0 */
import moment from 'moment';

const DATE_FORMAT = 'MM/DD/YYYY';

/**
 * Formats a date object to a date format used in the app.
 * @param {Date|string|object} date Date to be formatted.
 * @param {string} dateFormat Optional output date format.
 * @returns {string} Date in the correct format.
 */
export function format(date, dateFormat = DATE_FORMAT) {
  return moment(date).format(dateFormat);
}

export function formatDate(date, dateFormat = DATE_FORMAT) {
  return moment(date, dateFormat);
}

export function isBefore(firstDate, secondDate, dateFormat = DATE_FORMAT) {
  return moment(secondDate, dateFormat).valueOf() - moment(firstDate, dateFormat).valueOf();
}

export function isAfter(firstDate, secondDate) {
  return moment(firstDate).valueOf() - moment(secondDate).valueOf();
}