import { formatDistanceStrict } from 'date-fns';

export * from './content';
export * from './images';
export * from './files';
export * from './greatestCommonDivisor';
export * from './removeToken';
export * from './saveToken';
export * from './validPhoneNumber';

export const makeFriendlyUrl = (text) => {
  console.log('text', text);
  if (typeof text !== 'string') {
    return '';
  }

  return text
    .replace(/[\s-]+/g, '-')
    .replace(/[^a-zA-Z0-9_-]+/g, '')
    .toLowerCase();
};

export const formatCreatedAt = (createdAt) => {
  return formatDistanceStrict(new Date(createdAt), new Date());
};

export const arrayifyStyle = (type) => {
  if (typeof type === 'object') {
    return [type];
  }

  if (Array.isArray(type)) {
    return type;
  }

  // might want to throw an error here
  return [null];
};

export const naiveFirstSentenceInText = (text) => {
  const naiveFirstSentenceRegex = /(^.*?[a-z]{2,}[.!?])\s+\W*[A-Z]/;
  const match = text.match(naiveFirstSentenceRegex);
  if (match && match[0]) {
    return match[0];
  }
  return null;
};

export const isValidHandle = (handle) => {
  const alphaNumericRegex = /^\w+$/; // also matches non ASCII chars like šēēā // '+' indicates 1 or more
  if (handle.length > 69) return false;
  return alphaNumericRegex.test(handle);
};

export const parseCookie = (str) =>
  str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

export const selectCookieStringFromContext = (ctx) =>
  ctx?.req?.headers?.cookie ?? null;

export const selectTokenFromContext = (ctx) => {
  try {
    const cookieString = selectCookieStringFromContext(ctx);
    return cookieString ?? parseCookie(cookieString)?.token ?? null;
  } catch (error) {
    console.log('selectTokenFromContext error');
    return null;
  }
};
