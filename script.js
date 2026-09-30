let sec=10;
let tens=0;
let outputtens=document.getElementById("tens");
let outputsec=document.getElementById("sec");
let outputstart=document.getElementById("start");
let outputstop=document.getElementById("stop");
let outputrest=document.getElementById("reset");
function starttimer(){
    if(sec<=0 && tens<=0){
        clearInterval(interval);
        outputsec.innerHTML="time's up"
        outputtens.innerHTML=''
        return; //to avoid going under zero when the 10s ae done
    }
    tens --;
    if (tens <=0){
        tens=99
        sec--;
    }
    if (tens <= 9){
        outputtens.innerHTML="0"+tens;
    } 
    else{
        outputtens.innerHTML=tens
    }
     if (sec <= 9){
        outputsec.innerHTML="0"+sec;
    } 
    else{
        outputsec.innerHTML=sec;
    }
    
    if(sec<=0 && tens <=0){
        clearInterval(interval);
        outputsec.innerHTML="time is up";
        outputtens.innerHTML="00";
        clearInterval(interval);
    }
    
}

let interval;
document.getElementById("start").addEventListener("click",function(){
  clearInterval(interval);
  sec=10;
  tens=0;
  outputsec.innerHTML="10"
  outputsec.innerHTML="00"
  interval=setInterval(starttimer,10);
})
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(interval)
})
document.getElementById("reset").addEventListener("click",function(){
    clearInterval(interval);
    sec=10
    tens=0
    outputtens.innerHTML="00"
     outputsec.innerHTML="10"
})