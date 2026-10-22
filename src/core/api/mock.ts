export const delay = <T>(value: T, ms = 400) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));
