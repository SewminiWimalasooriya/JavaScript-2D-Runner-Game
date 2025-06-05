var rs=new Audio("sound/run.mp3");
 rs.loop=true;

 var js=new Audio("sound/jump.mp3");
 
 var ds=new Audio("sound/dead.mp3");

function key(event){
    if(event.which ==13){//enter key
      document.getElementById("start").style.visibility="hidden";
      if(rw==0){
        f();
        rw=setInterval(run,100);
        rs.play();
        bw=setInterval(b,100);
        sw=setInterval(updateScore,100);
        fw=setInterval(move,100);
      }
   }

   
    if(event.which ==32){// space key
      document.getElementById("start").style.visibility="hidden";
      if(jw==0){
        clearInterval(rw);
        rs.pause();
        rw=-1;
        jw= setInterval(jump,100);
        js.play();
      }
   }

 }

 


//gif

var m=700;
var fid=0;
 function f(){
     for (var y=0;y<50;y++){

   var i = document.createElement("img");
   i.src="images/cute.gif";
   i.className="f";
   i.id="a"+y;
   i.style.marginLeft= m+"px";
   m=m+500;
   document.getElementById("b").appendChild(i);

     }

 }

 //boy 
 rw=0;
 var r=1;
 function run(){
      var rimg = document.getElementById("boy");
      r=r+1;
      if(r==9){
        r=1;
      }
      rimg.src="images/Run ("+r+").png";
 }

//background 
 var bw=0;
 var x=0;
 function b(){
  x=x-20;
  document.getElementById("b").style.backgroundPositionX=x+"px";
 }

//score
 var sw=0;
 var u=0;
 function updateScore(){
  u=u+5;
   document.getElementById("score").innerHTML=u;
 }

 // add gif 
 var fw=0;
function move(){
  for (var y=0;y<50;y++){
          var d=document.getElementById("a"+y);
          var z=getComputedStyle(d);        //dead margin
          var p=parseInt(z.marginLeft);
          p=p-20;
          d.style.marginLeft=p+"px";
          //alert(p);
      
        //180-60 dead
        if(p>20 & p<140){
          if(mt>250){                 
            clearInterval(rw);
            rs.pause();
            clearInterval(jw);
            jw=-1;
            clearInterval(sw);
            clearInterval(bw);
            clearInterval(fw);

            dw=setInterval(dead,100);
            ds.play();

          }
          
        }  


  }

}
//jump

var mt=320;  //margine top
var jw=0;
var j =1;
 function jump(){
   var jimg= document.getElementById("boy");

   if(j<=6){//1-6 jump
        mt=mt-30;
   }

   if(j>=7){//7-12jump
        mt=mt+30;
   }
   jimg.style.marginTop=mt+"px";

    j=j+1;
      if(j==13){
       j=1;
       clearInterval(jw);
       jw=0;

       rw=setInterval(run,100);
       rs.play();
       if(bw==0){
        bw=setInterval(b,100);
       }
       if(fid==0){
        fid=f();
       }
       if(fw==0){
        fw=setInterval(move,100);
       }
       if(sw==0){// score 
        sw=setInterval(updateScore,100)
       }
    }
   jimg.src="images/jump ("+j+").png";

 }
//dead animation
var d=1;
var dw=0;

 function dead(){
    var dimg =document.getElementById("boy");
    d=d+1;
    if(d==11){
      d=10;
      dimg.style.marginTop="320px";
      document.getElementById("end").style.visibility="visible";
      document.getElementById("endscore").innerHTML=u;
    }
    dimg.src ="images/Dead ("+d+").png";
 }
 function re(){  
  location.reload();
 }