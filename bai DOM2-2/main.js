let prevBtn= document.querySelector('.prevBtn')
let nextBtn = document.querySelector('.nextBtn')
let h1= document.getElementById('counter')
let coutn = 0
prevBtn.addEventListener('click',function(){
    coutn--,
    changeColor(coutn)
})
nextBtn.addEventListener('click',function(){
    coutn++,
    changeColor(coutn)
})

function changeColor(coutn){
    h1.innerText =coutn
    if(coutn>0){
        h1.style.color = 'green'
    }else if(coutn==0){
        h1.style.color = '#333'
    }else{
        h1.style.color = 'red'
    }
}