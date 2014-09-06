var Grid = 
{
	rows: 60*2,
	cols: 80*2,
	
	cw: 5,
	ch: 5,
	
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