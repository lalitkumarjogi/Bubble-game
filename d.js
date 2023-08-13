function makebubble(){
    var clutter=""
     for(var i=0;i<=197;i++){
        var rn=Math.floor(Math.random()*10)
      clutter+=`<div class="bubble">${rn
    }</div>`
     }
     document.querySelector(".pbtton").innerHTML=clutter
}



var hit=0;
 function makehit(){
     hit= Math.floor(Math.random()*10)
     document.querySelector("#hit").textContent=hit
 }


 var timer=10;
 function runtimer(){
      setInterval(function(){
        if(timer >0){
            timer--;
            document.querySelector("#timer").textContent=timer
           }
           else{
            clearInterval(timer)
            document.querySelector(".pbtton").innerHTML=`<h1>Game Over</h1>`
           }
      },1000) 
     
 }

 score=0;
 function setscore(){
      score+=10;
      document.querySelector("#score").textContent=score 
 }




document.querySelector(".pbtton").addEventListener("click",function(dot){
     var clcik =Number((dot.target.textContent))
     if(clcik===hit){
        setscore()
        makehit()
        makebubble()
     }
     
})









makehit()
makebubble()
runtimer()
