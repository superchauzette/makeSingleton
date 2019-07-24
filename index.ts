export function makeSingleton<T>(createInstance: () => T) {
  let instance: T | undefined = undefined;

  return function() {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  };
}
