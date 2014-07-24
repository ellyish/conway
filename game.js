var cell = function  (options) {
	var that = {};

	that.ctx = options.ctx;
	that.x = options.x;
	that.y = options.y;
	that.w = options.w;
	that.color = options.color;
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
					currentState: Math.round(Math.pow(Math.random(), 10)),
					color: '#00ff00'
				})
			};
		};		
	}

	// generate new genration based on the current generation
	that.update = function  () {
		//two large loops and one small loop
		for (var i = 1; i < col; i++) {
			for (var j = 1; j < row; j++) {

				try{
				//counting Neighbours
				var count = that.cellArray[i-1][j-1].currentState +
							that.cellArray[i][j-1].currentState +
							that.cellArray[i+1][j-1].currentState +
							that.cellArray[i-1][j].currentState +
							that.cellArray[i+1][j].currentState +
							that.cellArray[i-1][j+1].currentState +
							that.cellArray[i][j+1].currentState +
							that.cellArray[i+1][j+1].currentState ;
				}
				catch (err){

				}
				if(that.cellArray[i][j].currentState == 1){
					that.cellArray[i][j].currentState = count < 2 ? 0 : count = 3 ? 1 : count = 2 ? 1 : count > 3 ? 0 : 1;
				} else if(that.cellArray[i][j].currentState == 0){
               		that.cellArray[i][j].currentState = count === 3 ? 1 : 0;
				}


				//console.log(that.cellArray[i][j].currentState)

			};
		};
	}

	//draw the current grid
	that.render = function  () {
		for (var i = 1; i < col; i++) {
			for (var j = 1; j < row; j++) {

				that.cellArray[i][j].currentState == 1 ? that.ctx.fillStyle = that.cellArray[i][j].color : that.ctx.fillStyle = '#0080ff';
				that.ctx.fillRect(that.cellArray[i][j].x , that.cellArray[i][j].y, that.cellArray[i][j].w, that.cellArray[i][j].w);

			};
		};	
	}

	return that;

}








