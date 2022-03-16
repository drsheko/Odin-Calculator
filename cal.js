let currentValue=``;
let firstValue=``;
let operator= ``;
let secondValue=``;




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
lowerDisplay.textContent='';

function getOtherValue(){
  
    keys.forEach(key=> 
        key.addEventListener('click',(e)=>{
            secondValue += e.target.value
            
          }))}


function operate(a,b,operator){

  

    
            if (operator==='+'){return add(a,b)
         }  if (operator==='-'){return subtract(a,b)
        } if ( operator==='*'){return multiply(a,b)
        }  if(operator==='/'){return divide(a,b)
        
        }if(operator==="^"){return power(a,b)
        
        }if(operator ==='%'){ return getReminder(a,b)}
        
        }   
        

        
        function add(a,b){return a+b}
        
        function subtract(a,b){
            return a-b
        }
        
        function multiply(a,b){return a*b}
        
        function divide(a,b){
            if(b===0){return "Error"}
            else{return a/b}
            
        }
        
        function power(a,b){return Math.pow(a,b)}
        
        function getReminder(a,b){
            return a%b
        }
    

