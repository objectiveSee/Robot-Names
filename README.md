# Robot Names
Javascript module that returns random names of robots, like Wall-E ;)

## How to use

```js
var RobotNames = require('robotnames');
var robotFactory = new RobotNames();

console.log('All hail ' + robotFactory.popRandomName());
console.log('All hail ' + robotFactory.getRandomName());
```

The module exposes two functions, `popRandomName` and `getRandomName`. If you do not want to repeat a name then use `popRandomName`, however if the names available in the module run out then `popRandomName` will begin to repeat names.
