// from https://stackoverflow.com/questions/54738221/typescript-array-find-possibly-undefind
export function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

export const getKeys = <T extends {}>(o: T): Array<keyof T> => <Array<keyof T>>Object.keys(o);
