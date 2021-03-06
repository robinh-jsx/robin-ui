export const omit = <O extends Record<PropertyKey, unknown>, K extends keyof O>(
  obj: O,
  keys: K[]
) => {
  return Object.fromEntries(
    Object.keys(obj)
      .filter(key => !(keys as string[]).includes(key))
      .map(key => [key, obj[key]])
  ) as Omit<O, K>
}
