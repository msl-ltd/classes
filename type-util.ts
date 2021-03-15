export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type KeyOf<T> = { [P in keyof T]: T[P] };

export type Replace<T, P> = KeyOf<Omit<T, keyof P> & P>;
