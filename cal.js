let currentValue=``;
let firstValue=``;
let operator= ``;
let secondValue=``;
let finalResult=``;
let currentDisplay;

const screen = document.querySelector('.display')
screen.textContent='';

const keys=document.querySelectorAll('.key')
 keys.forEach(key=> 
    key.addEventListener('click',(e)=>{
        screen.textContent += e.target.value;
        currentValue +=e.target.value;
    }       
       ))
 
const operationKeys= document.querySelectorAll('#operation')
operationKeys.forEach((elem)=>{
    elem.addEventListener('click',function(e){
        firstValue +=currentValue
        operator += e.target.value ;
       screen.textContent+=e.target.value; 
       getOtherValue()   
    })
})

const lowerDisplay = document.querySelector('.lowerDisplay')
lowerDisplay.textContent=0;

function getOtherValue(){
  
    keys.forEach(key=> 
        key.addEventListener('click',(e)=>{
            secondValue = e.target.value   
          }))}

  const del = document.querySelector('#del')
  del.addEventListener('click',(e)=>{
  currentDisplay= screen.textContent
  currentDisplay = currentDisplay.slice(0,-1);
   screen.textContent=currentDisplay ;     
          })  

function operate(a,b,operator){
            if (operator==='+'){return add(a,b)
         }  if (operator==='-'){return subtract(a,b)
        } if ( operator==='*'){return multiply(a,b)
        }  if(operator==='/'){return divide(a,b)
         }if(operator==="^"){return power(a,b)
        }if(operator ==='%'){ return getReminder(a,b)}
        
        }   
        
 function add(a,b){return a+b}
 function subtract(a,b){ return a-b }
function multiply(a,b){return a*b}
function divide(a,b){
            if(b===0){return "Error" ; location.reload()}
            else{return a/b}
            }
        
 function power(a,b){return Math.pow(a,b)}
        
  function getReminder(a,b){return a%b }
    
 const equal = document.querySelector('#equal')
 equal.addEventListener('click',function(e){
    finalResult+=  operate(firstValue,secondValue,operator);
    lowerDisplay.textContent= finalResult
  })

  /*operationKeys.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        firstValue = finalResult;
        operator= e.target.value;
        secondValue= getOtherValue();
        
    })})*/


  const clear = document.querySelector('#clear')
  clear.addEventListener('click', (e)=>location.reload()) ;

  
  
 
