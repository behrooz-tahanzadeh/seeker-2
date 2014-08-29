function Cell(r,c)
{
	this.r = r;
	this.c = c;
}

Cell.prototype.isEqual = function(c)
{
	return (c.r == this.r && c.c == this.c);
};