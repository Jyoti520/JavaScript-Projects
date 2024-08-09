const form =document.querySelector('form')
let calculate=document.getElementById('submit')
const weight=document.getElementById('weight')
const height=document.getElementById('height')
const display=document.getElementById('results')
const validateNum=document.getElementById('warning')

calculate.addEventListener('click',(e)=>{
      e.preventDefault()
        let weightvalue=parseInt(weight.value)
        let heightValue=parseInt(height.value)

        checkvalidation(weightvalue, heightValue)
        
        })
//change the value to initial value
 height.value=""
 weight.value=""
 validateNum.innerHTML=""
 display.innerHTML=""

//checking the weight if it is normal ,overweight and normal
 function checkweight(bmi){
    if(bmi<18.6){
        display.innerHTML=`${bmi} <br> Underweight`
        display.style.color="#dc1b0d"
    }
    
    else if(bmi >=18.6 && bmi <=24.9){
        display.innerHTML=` ${bmi} <br> Normal`
        display.style.color="blue"
    }
    else if ( bmi > 24.9){
        display.innerHTML=`${bmi} <br> Overweight`
        display.style.color="#ff8800"

    }
 }



//checking if the value is validate or not
 function checkvalidation(heightValue,weightvalue){
    if(weightvalue==="" || isNaN(weightvalue) || weightvalue<0){
        validateNum.innerHTML="please give a validate number" 
        display.innerHTML=""  
     }
     if(heightValue==="" || isNaN(heightValue) || heightValue<0){
         validateNum.innerHTML="please give a validate number" 
         display.innerHTML=""  
      }
     
     else{
        validateNum.innerHTML=""
         let bmi=(weightvalue / ((heightValue * heightValue) / 10000)).toFixed(2)
         checkweight(bmi)
     }
 }