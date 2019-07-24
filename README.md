# makeSingleton

allow you to make a single instance of your function or class

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

```js
// logger.js
module.exports = makeSingleton(() => createLogger("my-api-name"));

// in other file
const logger = require("./logger.js");

function main() {
  logger().log("hello world");
}
```

```js
// apiClient.js
module.exports = makeSingleton(() => createApiClient());

// in other file
const apiClient = require("./apiClient.js");

async function main() {
  const infosUsers = await apiClient().users.getInfos();
}
```

```js
// redis.js
module.exports = makeSingleton(() => createRedis({
  host: String(process.env.REDIS_HOSTS),
  password: String(process.env.REDIS_PASSWORD)
 });
);


// in other file
const redis = require("./redis.js");

async function main() {
    await redis().set('myKey', { hello: "world" });
    const myKey = await redis().get('myKey');
}




```
