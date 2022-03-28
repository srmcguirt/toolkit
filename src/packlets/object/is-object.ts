import { getObjectType } from './get-object-type'

export function isObject(value?: any): boolean {
  return (value !== null && typeof value === 'object') || getObjectType(value) === '[object Object]'
}
