//bài làm 

const time =document.querySelector(".time")
const score=document.querySelector(".score")
const firstNumber=document.getElementById("primary-number")
const secondaryNumber=document.getElementById("secondary-number")
const operator=document.getElementById("operator")
const result=document.getElementById("result")


// random number
function randomCalculator(){
  
  let arrOperator=['+','-','*']
  firstNumber.innerHTML=`${Math.floor(Math.random()*10+1)}`
  secondaryNumber.innerHTML=`${Math.floor(Math.random()*10+1)}`
  operator.innerHTML=`${arrOperator[Math.floor(Math.random()*3)]}`
  checkValue();
 
}

// setTime
function setTime(){
  time.innerHTML="Bắt đầu";
  let timeLeft = 30;
  let downloadTimer = setInterval(function(){
    time.innerHTML = `${timeLeft} s`;
    timeLeft--;
    if(timeLeft<-1){
     clearInterval(downloadTimer);
     alert(`Điểm của bạn là ${score.innerHTML}`)
     setTime()
   }
  }, 1000);
  
}
setTime();


// check result
let point=0;
result.addEventListener("keydown",function(e){
    
  if(e.keyCode==13){
    if(result.value==checkValue()){
      randomCalculator();
      result.value="";
      point++;
      score.innerHTML=point;
      
    }else if(result.value==""){
      alert("Kết quả không được để trống")
    }else{
      result.value="";
    }
    
  }

})
function checkValue(){
  let rs=0
  let a=+firstNumber.innerText
 
  let b=+secondaryNumber.innerText

  if(operator.innerText=='+'){
    rs=a + b;
  }else if(operator.innerText=='-'){
    rs=a - b;
  }else{
    rs=a*b
  }
  return rs
}

randomCalculator()