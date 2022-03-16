let a = 0;
let b = 0 ;

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function power(a,b){
    return Math.pow(a,b)
}

function getReminder(a,b){
    return a%b
}


function operate(operator,a,b){
    if (operator==='+'){add(a,b)
 }  if (operator==='-'){subtract(a,b)
} if ( operator==='*'){multiply(a,b)
}  if(operator==='/'){divide(a,b)

}if(operator==="^"){power(a,b)

}if(operator ==='%'){getReminder(a,b)}

}

const screen = document.querySelector('.display')
screen.textContent='';

const keys=document.querySelectorAll('.key')
 keys.forEach(key=> 
    key.addEventListener('click',(e)=>{
        screen.textContent += e.target.value
        firstValue=parseInt(screen.textContent)
    }       
       ))
 
 const operationKeys= document.querySelectorAll('#operation')
operationKeys.forEach((elem)=>{
    elem.addEventListener('click',function(e){
       let operator = e.target.value ;
       screen.textContent+=e.target.value; 
       getOtherValue()   
    })
})

const lowerDisplay = document.querySelector('.lowerDisplay')
lowerDisplay.textContent='';

function getOtherValue(){
  let secondValue =``;
    keys.forEach(key=> 
        key.addEventListener('click',(e)=>{
            secondValue += e.target.value
            
          }))}
    

