const { makeSingleton } = require("./index");

function createInstance() {
  return function() {
    return {};
  };
}

class Toto {
  getInstance() {}
}

function FactoryToto() {
  return () => new Toto();
}

test("should create one instance of createInstance", () => {
  const getInstance = makeSingleton(() => createInstance());
  expect(getInstance() === getInstance()).toBe(true);
});

test("should create 2 instances of createInstance", () => {
  const getInstance1 = makeSingleton(() => createInstance());
  const getInstance2 = makeSingleton(() => createInstance());
  expect(getInstance1() === getInstance2()).toBe(false);
});

test("should create 2 instances createInstance, no singleton created", () => {
  const getInstance = createInstance();
  expect(getInstance() === getInstance()).toBe(false);
});

test("should create one instance of toto. example with class", () => {
  const toto = makeSingleton(() => FactoryToto());
  expect(toto() === toto()).toBe(true);
});

test("should create a different instance of toto. example with class", () => {
  const toto = FactoryToto();
  expect(toto() === toto()).toBe(false);
});
