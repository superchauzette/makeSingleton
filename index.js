"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSingleton(createInstance) {
  let instance = undefined;
  return () => {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  };
}
exports.makeSingleton = makeSingleton;
