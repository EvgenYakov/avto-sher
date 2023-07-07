export function isObjectEmptyOrAllNull(obj: any): boolean {
  if(Object.keys( obj ).length === 0) {
    return true;
  }
  return Object.values( obj ).every( value => value === null );
}