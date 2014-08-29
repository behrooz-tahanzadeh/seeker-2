function _(str)
{
	console.log(str);
}

Main = 
{
	canvas:false,
	canvasX:false,
	
	intervalTime:20,
	intervalID:-1,
	
	BgOpacity:1,
	
	
	
	
	init:function()
	{
		this.canvas = jQuery('#drawingArea').eq(0);
		this.canvasX = this.canvas.get(0).getContext("2d");
		Grid.ctx = Main.canvasX;
		
		this.canvas.click(Main.canvasOnClick);
		
		jQuery("div#pp").click(Main.pp);
		
		this.intervalID = setInterval(this.loop, this.intervalTime);
		
		jQuery('input#tail').change(Main.tailChange);
		
		jQuery(window).keydown(Main.windowOnKeyDown);
	},
	
	
	
	
	windowOnKeyDown: function(e)
	{
		switch (e.keyCode)
		{
		case Keyboard.Right:
			var v = parseFloat(jQuery('input#tail').val())+(e.shiftKey?0.1:0.01);
			jQuery('input#tail').val(v);
			Main.tailChange(null);
			
			break;
			
		case Keyboard.Left:
			var v = parseFloat(jQuery('input#tail').val())-(e.shiftKey?0.1:0.01);
			jQuery('input#tail').val(v);
			Main.tailChange(null);
			
			break;
			
		case Keyboard.Space:
			Main.pp();
			break;
		
		default:
			console.log(e.keyCode);
		}
	},
	
	
	
	
	tailChange:function(e)
	{
		Main.BgOpacity = jQuery('input#tail').val();
	},
	
	
	
	
	canvasOnClick: function(e)
	{
		var x = e.pageX - jQuery(this).offset().left;
		var y = e.pageY - jQuery(this).offset().top;
		
		new Walker(Walker.Aim);
		_("new Walker added! "+Walker.List.length);
		
		Walker.Aim = Grid.xy2cell(x, y);
	},
	
	
	
	
	loop: function()
	{
		var ctx = Main.canvasX;
		
		ctx.fillStyle = "rgba(255,255,255,"+Main.BgOpacity+")";
		ctx.fillRect(0,0,800,600);
		
		ctx.fillStyle = "yellow";
		Grid.drawCell(Walker.Aim);
		
		ctx.fillStyle = "black";
		Walker.MoveAll();
		Walker.DrawAll();
		
		ctx.beginPath();
		
		ctx.lineWidth = "1";
		
		Grid.drawGrid();
		
		ctx.stroke();
	},
	
	
	
	
	pp: function()
	{
		if(Main.intervalID == -1)
		{
			Main.intervalID = setInterval(Main.loop, Main.intervalTime);
			jQuery("div#pp").html('pasue');
		}
		else
		{
			clearInterval(Main.intervalID);
			Main.intervalID = -1;
			jQuery("div#pp").html('play');
		}
	}
};//eo Main{}


jQuery(document).ready(function(){
	Main.init();
});