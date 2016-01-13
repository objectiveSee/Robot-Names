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

## Another Example

```js
var RobotNames = require('robotnames');
var robotFactory = new RobotNames();
for ( var i = 0; i < 20; i++ ) {
	console.log('I knew a robot named '+robotFactory.popRandomName());
}
```
outputs:

```
I knew a robot named Terminator
I knew a robot named Deep Blue
I knew a robot named Data
I knew a robot named C3P0
I knew a robot named Roomba
I knew a robot named TARS
I knew a robot named R2D2
I knew a robot named Eva
I knew a robot named Mega Man
I knew a robot named Mr. Roboto
I knew a robot named Wall-E
I knew a robot named Bender
I knew a robot named Awesom-O
I knew a robot named Optimus Prime
I knew a robot named Mega Man
I knew a robot named Deep Blue
I knew a robot named Optimus Prime
I knew a robot named Eva
I knew a robot named Bender
I knew a robot named R2D2
```
