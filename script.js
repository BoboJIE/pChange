var a=document.getElementById("1");
var b=document.getElementById("2");
var c=document.getElementById("3");
var i=0;
var d=document.getElementById("4");
var e=document.getElementById("5");
var f=document.getElementById("6");

function aa(){
	a.style.display="block";
	b.style.display="none";
	c.style.display="none";
}

function bb(){
	a.style.display="none";
	b.style.display="block";
	c.style.display="none";
}

function cc(){
	a.style.display="none";
	b.style.display="none";
	c.style.display="block";
}

function x(){
	i+=1;
	console.log(i);
	if(i%3==1){
		aa();
	}else if(i%3==2){
		bb();
	}else if(i%3==0){
		cc();
	}
}

window.setInterval("x()" ,3000);



