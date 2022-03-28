import { checkObjProps } from 'packlets/check'
import { isUndefined } from 'packlets/undefined'
import { isObject } from './is-object'

export function isPlainObject(value?: any): boolean {
  if (isObject(value) === false) return false

  /* Check for modified ctor */
  const ctor: any = value.constructor

  if (isUndefined(ctor)) return true

  /* Check for modified prot */
  const prot: any = ctor.prototype

  if (isObject(prot) === false) return false

  if (checkObjProps(prot, 'isPrototypeOf') === false) return false

  return true
}
