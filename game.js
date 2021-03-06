var cell = function  (options) {
	var that = {};

	that.ctx = options.ctx;
	that.x = options.x;
	that.y = options.y;
	that.w = options.w;
	that.currentState = options.currentState;

	return that;
}


var grid = function (options) {

	var that = {};
	that.width = options.width;
	that.height = options.height;
	that.w = options.w;
	that.ctx = options.ctx;

	var col = Math.floor(that.width/that.w);
	var row = Math.floor(that.height/that.w);

	var cellArray = new Array(col)
	for (var i = 0; i < cellArray.length; i++) {
		cellArray[i] = new Array(row);
	};

	that.cellArray = cellArray;
	//populate the array with 0's and 1's
	that.init = function () {
		for (var i = 0; i < col; i++) {
			for (var j = 0; j < row; j++) {
				cellArray[i][j] = new cell({
					x: i*that.w,
					y: j*that.w,
					w: that.w,
					currentState: Math.round(Math.pow(Math.random(), 2))
				})
			};
		};		
	}

	// generate new genration based on the current generation
	that.update = function  () {
		//two large loops and one small loop
	}

	//draw the current grid
	that.render = function  () {
		for (var i = 0; i < col; i++) {
			for (var j = 0; j < row; j++) {

				that.cellArray[i][j].currentState == 1 ? that.ctx.fillStyle = 'black' : that.ctx.fillStyle = 'white';
				that.ctx.fillRect(that.cellArray[i][j].x , that.cellArray[i][j].y, that.cellArray[i][j].w - 1, that.cellArray[i][j].w  - 1);

			};
		};	
	}

	return that;

}