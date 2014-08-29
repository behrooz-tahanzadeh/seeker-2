function Walker(cell)
{
	this.pos = new Cell(cell.r, cell.c);
	Walker.List.push(this);
}//eoc

Walker.Aim = false;
Walker.List = [];

Walker.MoveAll = function()
{
	for (var i=0; i<Walker.List.length; i++)
		Walker.List[i].move();
};

Walker.DrawAll = function()
{
	for (var i=0; i<Walker.List.length; i++)
		Grid.drawCell(Walker.List[i].pos);
};


Walker.prototype.isRecieved = function()
{
	return this.pos.isEqual(Walker.Aim);
};

Walker.prototype.move = function(c)
{
	if(this.isRecieved()) return;
	
	var chance = c;
	
	if(c == undefined)
	{
		chance = parseInt(Math.random()*6);
		chance = chance>5 ? 5 : chance;
	}	
	
	switch(chance)
	{
		case 0:
			if(this.pos.r-1>0)
				this.pos.r--;
			else
				this.move(4);
			break;
			
		case 1:
			if(this.pos.r+1<Grid.rows)
				this.pos.r++;
			else
				this.move(4);
			break;
			
		case 2:
			if(this.pos.c-1>0)
				this.pos.c--;
			else
				this.move(5);
			break;
			
		case 3:
			if(this.pos.c+1<Grid.cols)
				this.pos.c++;
			else
				this.move(5);
			break;
			
		case 4:
			if(this.pos.r != Walker.Aim.r)
				this.pos.r += this.pos.r<Walker.Aim.r ? 1 : -1;
			else
				this.move(5);
			break;
			
		case 5:
			if(this.pos.c != Walker.Aim.c)
				this.pos.c += this.pos.c<Walker.Aim.c ? 1 : -1;
			else
				this.move(4);
			break;
	}
};