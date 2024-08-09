//RANDOM COLOR GENERATOR
let random=()=>{
    let randomcolor="#";
    let hex="123456789ABCDEF"
    for(i=0;i<6;i++){
       randomcolor+=hex[Math.floor(Math.random() * 16)];
    }
    return randomcolor;
    }

   let startinterval;
   let startfunc=()=>{
     if(!startinterval){
     startinterval=setInterval(changebycolor,1000);
     }
     function changebycolor(){
     const colorbg=document.querySelector('.colorbg').style.backgroundColor=random();
   
   }
   }
   let stopfunc=()=>{
     clearInterval(startinterval);
     console.log('random generate stopped')
     startinterval=null;
   }
   
    const COLORBTN=document.querySelector('#start').addEventListener('click',startfunc);
    const STOPBTN=document.querySelector('#stop').addEventListener('click',stopfunc);