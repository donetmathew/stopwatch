import './main.scss';
let millisec=0;
let sec=0;
let min=0;
let hour=0;
let timer;
let timerRef=document.querySelector(".timer__clock");
document.querySelector(".start-btn").addEventListener("click",()=>{
   timer= setInterval(()=>{
        onStartWatch();
    },10);
});

document.querySelector(".pause-btn").addEventListener("click",()=>{
    if(timer){
        clearInterval(timer);
    }
 });

document.querySelector(".stop-btn").addEventListener("click",()=>{
   if(timer){
       clearInterval(timer);
   }
   millisec=0;
   sec=0;
   min=0;
   hour=0;
   timerRef.innerHTML=`00 : 00 : 00 : 00`;
});

function onStartWatch(){
    millisec+=10;
    if(millisec === 1000){
        millisec=0;
        sec+=1;
    }
    if(sec === 60){
        sec=0;
        min+=1;
    }
    if(min === 60){
        hour+=1;
        min=0;
    }
    millisec = millisec < 10 ? `00${millisec}` : millisec < 100 ? `0${millisec}` : `${millisec}`;
    sec = sec < 10 ? `0${sec}` : sec;
    min = min < 10 ? `0${min}` : min;
    hour =  hour < 10 ? `0${hour}` : hour;
    timerRef.innerHTML=`${hour} : ${min} : ${sec} : ${millisec}`;
    millisec=convertToInt(millisec);
    sec=convertToInt(sec);
    min=convertToInt(min);
    hour=convertToInt(hour);
}

function convertToInt(val){
    return parseInt(val);
}

