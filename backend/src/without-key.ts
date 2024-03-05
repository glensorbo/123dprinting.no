/** Returns a copy of the object with the target key removed */
export const withoutKey = <T extends object, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K> => {
  const { [key]: _, ...newObj } = obj;
  return newObj;
};
