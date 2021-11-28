export const shuffle = <T>(elements: T[]): T[] => {
  return [...elements].sort(() => Math.random() - Math.random());
}