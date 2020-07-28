type ActionMap<T extends { [index: string]: any }> = {
  [K in keyof T]: T[K] extends undefined
    ? { type: K }
    : { type: K; payload: T[K] };
};

export type Action<T> = ActionMap<T>[keyof ActionMap<T>];
