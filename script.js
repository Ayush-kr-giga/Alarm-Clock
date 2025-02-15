const select = document.querySelectorAll('select')
// console.log(select)
let currTime = document.getElementById('time');

let selection=document.querySelector(".selection")

let set = document.querySelector('button')

let alarmtime;

let isSet=false

let ringtone= new Audio("./lulu-lulu-funny-sound-made-with-Voicemod.mp3")

for (let i =12 ; i>0;i--){
    i = i<10? "0"+i:i;
    
    let option=`<option value="${i}">${i}</option>`;
    select[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i =59 ; i>0;i--){
    i = i<10? "0"+i:i;
    
    let option=`<option value="${i}">${i}</option>`;
    select[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i=0 ;i<2;i++){
    let a = i==0? "PM":"AM";
    
    let option=`<option value="${a}">${a}</option>`;
    select[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval(function(){
    let date= new Date();
    let h = date.getHours();
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm="AM"

    if (h>=12){
        h=h-12
        ampm="PM"
    }
    h=h==0?12:h;

    h= h<10? "0"+h:h;
    m= m<10? "0"+m:m;
    s= s<10? "0"+s:s;

    currTime.innerText=`${h}:${m}:${s} ${ampm}`


    if (alarmtime==`${h}:${m}: ${ampm}`){
        console.log("ringing")
        ringtone.play()
        ringtone.loop=true
        set.innerText="Stop Alarm";
        set.style.backgroundColor='orange';
        }

},1000)


set.addEventListener("click",function(){

    if(isSet){
        alarmtime="";
        selection.classList.remove('disable');
        set.innerText="Set Alarm";
        ringtone.pause()
        set.style.backgroundColor='#0073e6';
        return isSet=false
    }

    let time = `${select[0].value}:${select[1].value}: ${select[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please Enter a valid timing !!");
    }
    alarmtime=time
    selection.classList.add('disable');
    set.innerText="Clear Alarm";
    set.style.backgroundColor='red';
    isSet=true

})