import { getObjectType } from 'packlets/object'
export function isDate(value?: any): boolean {
  return getObjectType(value) === '[object Date]'
}
