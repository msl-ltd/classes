export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type KeyOf<T> = { [P in keyof T]: T[P] };

export type Override<T, P> = Omit<T, keyof P> & P;
