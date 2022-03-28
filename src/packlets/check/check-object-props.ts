export function checkObjProps<T>(obj: T, prop: PropertyKey): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
