const pElement =document.querySelector('p')
const strings = pElement.innerText.split('')

const filterArray = Array.from(strings).filter(
(string) =>string !='.' && string !='!'&& string !='?'&& string != ',')

const chuCai=filterArray.join('').split(' ')
const newArray = Array.from(chuCai).filter((item) =>item.length >=8)

function highlight(item){
    let index =pElement.innerHTML.indexOf(item)
    if(index>=0){
    pElement.innerHTML =pElement.innerHTML.slice(0 ,index)
    + '<span class="highlight">'
    +pElement.innerHTML.slice(index,index +item.length)
    + '</span>'
    +pElement.innerHTML.slice(index +item.length)
    
    }
}


newArray.forEach((item) =>{
    highlight(item)
})
console.log(newArray)

const facebook = document.createElement('a')
facebook.href = "https://www.facebook.com/"
facebook.textContent ='facebook'
facebook.style.display= 'block'

pElement.appendChild(facebook)
const numberOfString = document.createElement('div')
numberOfString.textContent= 'Số từ trong đoạn văn : '+chuCai.length
pElement.appendChild(numberOfString)
pElement.innerHTML = pElement.innerHTML.replaceAll('?',"🤔")
pElement.innerHTML = pElement.innerHTML.replaceAll('!',"😲")
