// câu 1:
const chanseStyle = document.getElementById('text')   
console.log(chanseStyle) 
chanseStyle.style.color='#777'
chanseStyle.style.fontSize = "2rem"
chanseStyle.innerHTML = `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.`


//câu 2 : 
const repeat = document.querySelectorAll('ul:nth-child(2) li')
console.log(repeat)
for(let i = 0 ; i < repeat.length;i++){
   repeat[i].style.color= 'blue'
}


//câu 3 :  Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
const newElement = document.createElement("li")
const newElement2 = document.createElement("li")
const newElement3 = document.createElement("li")

newElement.innerText = 'item 8'
newElement2.innerText = 'item 9'
newElement3.innerText = 'item 10'

const lists = document.getElementById("list")
console.log(lists)

lists.appendChild(newElement)
lists.appendChild(newElement2)
lists.appendChild(newElement3)

const newLi = document.querySelector('ul:nth-child(3) >li:nth-child(1)')
console.log(newLi);
newLi.style.color ='red'

const newli3 = document.querySelector('ul:nth-child(3) >li:nth-child(3)')
console.log(newli3)
newli3.style.backgroundColor = "green"

// câu 4:
const newli4 = document.querySelector('ul:nth-child(3) >li:nth-child(4)')
console.log(newli4)
newli4.remove()

const newElement4 = document.createElement('li')
newElement4.innerText = 'học là'

const newli5 =document.querySelector('ul:nth-child(3) >li:nth-child(4)')
console.log(newli5)
// newli5.prepend(newElement4)
newli5.insertAdjacentElement("beforebegin",newElement4)
