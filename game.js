var cell = function  (options) {
	var that = {};

	that.ctx = options.ctx;
	that.x = options.x;
	that.y = options.y;
	that.w = options.w;
	that.currentState = options.currentState;
	that.nextState = options.nextState;
	that.draw = function () {
		ctx.drawRect(that.x, that.y, that.w, that.w);
	}

	return that;
}


var grid = function () {

	var that = {};
	//populate the array with 0's and 1's
	that.init = function () {
		
	}

	// generate new genration based on the previous generation
	that.generate = function  () {
		
	}

	that.draw = function  () {
		// calling draw on each cell
	}


}