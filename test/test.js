var assert = require('assert');
var main = require('../index.js');

describe('Generating names', function(){

	it('should initalize correctly',function(){
		var RoboNames = new main();
		assert(RoboNames);
		assert(RoboNames.names.length > 0, 'names array is empty');
	});

	it('should return a name without modifying length [getRandomName]',function(){
		var RoboNames = new main();
		var length_before = RoboNames.names.length;
		var name = RoboNames.getRandomName();
		var length_after = RoboNames.names.length;
		assert(length_before == length_after, 'should not remove item from array when calling getRandomName');
		assert(length_before > 0, 'should not be empty');
	});
	it('should remove a name and modify length [popRandomName]',function(){
		var RoboNames = new main();
		var length_before = RoboNames.names.length;
		var name = RoboNames.popRandomName();
		var length_after = RoboNames.names.length;
		assert(length_before != length_after, 'should not remove item from array when calling popRandomName');
		assert(length_before > 0, 'should not be empty');
	});
	it('should refill names when they run out [popRandomName]',function(){
		var RoboNames = new main();
		assert(RoboNames.names.length > 0, 'should not be empty');

		while ( RoboNames.names.length > 0 ) {
			RoboNames.popRandomName();
		}
		assert(RoboNames.names.length == 0, 'should be empty at this moment');
		var name = RoboNames.popRandomName();
		assert(name, 'should pop a name');
		assert(RoboNames.names.length > 0, 'should re-create list of names when they are all gone');
	});
});
