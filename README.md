# makeSingleton

allow you to make a single instance of your function or class.
It's a good practice to instanciate for module when you call it instead of instanciate when you import it.

```js
function makeSingleton(createInstance) {
  let instance = undefined;

  return () => {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  };
}
```

## How to use

Bad Practice

```js
// logger.js
module.exports = createLogger("my-api-name");

// in other file
const logger = require("./logger.js"); // create instance of logger

function main() {
  logger.log("hello world");
  logger.log("hello world 2"); // same instance of logger
}
```

Good Practice Practice

```js
// logger.js
module.exports = () => createLogger("my-api-name");

// in other file
const logger = require("./logger.js"); // no instance created - no side effect on import :)

function main() {
  logger().log("hello world"); // create instance of logger
  logger().log("hello world 2"); // create a other instance of logger
}
```

Best Practice Practice

```js
// logger.js
module.exports = makeSingleton(() => createLogger("my-api-name"));

// in other file
const logger = require("./logger.js"); // no instance created - no side effect on import :)

function main() {
  logger().log("hello world"); // create instance of logger
  logger().log("hello world 2"); // same instance of logger
}
```
