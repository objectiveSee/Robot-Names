/**
 * Return a RobotNames class
 */
var RobotNames = function() {
	this.buildNamesArray();
};

/**
 * Return all possible names.
 */
RobotNames.prototype.allNames = function() {
	return ['Mr. Roboto','Wall-E','R2D2','C3P0','Deep Blue','Optimus Prime','Roomba','Data','Bender','Eva','Terminator','TARS','Mega Man','Awesom-O']
};

/**
 * Set the names property to a sorted list of names
 */
RobotNames.prototype.buildNamesArray = function() {
	this.names = shuffle(this.allNames());
};

/**
 * Remove one name from list of names and return.
 */
RobotNames.prototype.popRandomName = function() {
	if (this.names.length < 1 ) {
		this.buildNamesArray();
	}
	return this.names.pop();
};

/**
 * Return one random name from the list of names.
 */
RobotNames.prototype.getRandomName = function() {
	if (this.names.length < 1 ) {
		this.buildNamesArray();
	}
	var item = this.names[Math.floor(Math.random()*this.names.length)];
	return item;
};

/**
 * Shuffles an arry
 * from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
 */
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/**
 * Module Exports
 */
module.exports = RobotNames;
