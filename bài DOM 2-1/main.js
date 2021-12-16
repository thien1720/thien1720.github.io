const list = document.querySelector('#list')
const add = document.createElement('button')
add.innerText = 'add'

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'nhập thông tin'
document.body.insertBefore(add,list)
add.insertAdjacentElement('afterend',input)

add.addEventListener("click",()=>{
    const text = input.value
    // console.log(text)
    if(text == ''){
        alert('chưa nhập nội dung')
    }else{
        const li = document.createElement('li')
        li.innerText = text
        list.appendChild(li)

        input.value =''
        input.focus()
    }
})


//thêm nút remove 
const remove = document.createElement('button')
remove.innerText = 'remove'
list.insertAdjacentElement("afterend",remove)

remove.addEventListener('click',()=>{
    const liLast = document.querySelector('#list li:last-child')
    if(liLast){
        list.removeChild(liLast)
    }
    
})

//thêm 2 nút hide trên đầu danh sách và show
const btnShow = document.querySelector('.btn--show')
const btnHide = document.querySelector('.btn--hide')

btnHide.addEventListener('click',()=>{
    list.classList.toggle('btn--show')
    btnShow.classList.toggle('btn--show')
    btnHide.classList.toggle('btn--show')

})

btnShow.addEventListener('click',()=>{
    list.classList.toggle('btn--show')
    btnShow.classList.toggle('btn--show')
    btnHide.classList.toggle('btn--show')

})

