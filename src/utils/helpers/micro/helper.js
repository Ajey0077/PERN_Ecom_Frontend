export function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }

    if (Object.prototype.toString.call(value) === '[object Object]') {
      return Object.keys(value).length === 0;
    }
  }

  return false;
}
