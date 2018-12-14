function test (prop, value) {
	this.prop = prop;
	this.value = value;	

	console.log(this.prop, this.value);
}

test.prototype.console = function(arr) {
	console.log(arr[0]);
}