export function getObjectType(value?: any): string {
  return Object.prototype.toString.call(value)
}
