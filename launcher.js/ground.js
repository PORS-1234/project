class Throw
{
	constructor(bodyA,pointB)
	{
		var options={
			bodyA: bodyA,
			pointB:pointB
			stiffness:0.01,
			lenght:10		
			}
		this.pointB=pointB
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}