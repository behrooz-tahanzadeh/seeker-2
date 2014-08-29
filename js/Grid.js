var Grid = 
{
	rows: 30,
	cols: 40,
	
	cw: 20,
	ch: 20,
	
	ctx: false,
	
	xy2cell: function(x,y)
	{
		return new Cell(
				parseInt(y/Grid.ch),
				parseInt(x/Grid.cw)
				);
	},
	
	drawGrid: function()
	{
		for(var i=0; i<Grid.cols; ++i)
		{
			Grid.ctx.moveTo(i*Grid.cw, 0);
			Grid.ctx.lineTo(i*Grid.cw, Grid.rows*Grid.ch);
		}
		
		for(var i=0; i<Grid.rows; ++i)
		{
			Grid.ctx.moveTo(0, i*Grid.ch);
			Grid.ctx.lineTo(Grid.cols*Grid.cw, i*Grid.ch);
		}
	},

	drawCell: function(cell)
	{
		if(cell)
			Grid.ctx.fillRect(cell.c*Grid.cw, cell.r*Grid.ch, Grid.cw, Grid.ch);
	}
};