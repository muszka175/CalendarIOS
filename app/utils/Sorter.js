import { DateParser } from './DateParser';

export function compareDateWithFormat(first, second, format) {
  const firstDate = DateParser.formatDate((first.start_date || first.date), format);
  const secondDate = DateParser.formatDate((second.start_date || second.date), format);
  return DateParser.isAfter(firstDate, secondDate);
}

export function compareDate(first, second) {
  return DateParser.isBefore(first.publishedDate, second.publishedDate);
}

export function compareHours(first, second) {
  const firstTime = parseFloat(first.hour.replace(/[^\d.-]/g, ''));
  const secondTime = parseFloat(second.hour.replace(/[^\d.-]/g, ''));
  return DateParser.isAfter(firstTime, secondTime);
}

/**
 * Returns sorted strings.
 * @param {object} first Object containing a name attribute.
 * @param {object} second Object containing a name attribute.
 */
export function compareFullName(first, second) {
  const firstName = first.name.split(' ').join('').toLowerCase();
  const secondName = second.name.split(' ').join('').toLowerCase();
  return firstName.localeCompare(secondName);
}
