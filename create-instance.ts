type ClassType<T> = new (...argument: any[]) => T;

export function createInstance<T>(classType: ClassType<T>, ...argment: any[]): T {
    return new classType(argment);
}
