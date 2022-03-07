const iteamCart = [
    { 
        title:"Apple MacBook Air M1 16GB 256GB 2020 I Chính hãng Apple Việt Nam",
        coin: 24790000,
        saleCoin:2899000,
        imgIteam: "../image/Lap/macAir.jpg",
        id:2

    },
    { 
        title: "Apple MacBook Air M1 16GB 256GB 2020 I Chính hãng Apple Việt Nam",
        coin: 24790055,
        saleCoin:2899000,
        imgIteam: "../image/Lap/macAir.jpg",
        id:1
    }
]



const render = document.querySelector('.render')
const detail = document.querySelectorAll('.sub-detail')
const moreClick = document.querySelectorAll('.more-click')
const  upItem = document.querySelectorAll('.click-up')
const  downItem = document.querySelectorAll('.click-down')
const  numIteam = document.querySelectorAll('.more-click > span')
const coinPay = document.querySelectorAll(".show-coin .coin")
const totalMonney = document.querySelector('.total-money .total-coin')
const inputSale = document.querySelector('#total .sale-iteam input')
const subSale = document.querySelector('#total .sale-iteam button')
const downMoney = document.querySelector('.total-money .sale-money')
const totalPay = document.querySelector('.total-money .totalPay')

// console.log(inputSale, subSale)


const amountItems  = [1,1]
// let totalIteams

    upItem.forEach((element,index)=> element.addEventListener('click', function(){

    amountItems[index] = ++amountItems[index]
    document.getElementById(`item-${index}-amount`).innerText = amountItems[index]

    let coinIteam = amountItems[index] * iteamCart[index].coin
  
    coinPay[index].innerHTML = `<p class="coin">${coinIteam} đ</p>`
    
    let total =0
    for(let i = 0; i < amountItems.length; i++){

        const iteamTotal  = document.getElementById(`item-${i}`).lastElementChild
        // total = total +totalCoin.innertext
        const showTotal =Number(iteamTotal.querySelector('.coin').innerText.slice(0,-1))
        console.log(showTotal)
        total =total + showTotal
    }
    totalMonney.innerText = (total).toFixed(0)
    console.log(total)
    
    subSale.addEventListener('click',function(){
        if(inputSale.value ==='thien'){

            let saleCoin = Math.floor(total * (0.01))
            downMoney.innerHTML = `<p class="sale-money text-money">${saleCoin}đ</p> `

            let payTotal = Math.floor(total - total*(0.01).toFixed(0))
            totalPay.innerHTML = `<p class="totalPay text-money">${payTotal}đ</p>`
        }else{
                    
            downMoney.innerHTML = `<p class="sale-money text-money">${0}đ</p>`
            totalPay.innerHTML = total
        }
    })

    
    
   }))

    downItem.forEach((element,index)=> element.addEventListener('click', function(){

    amountItems[index] = --amountItems[index]
    document.getElementById(`item-${index}-amount`).innerText = amountItems[index]

    document.getElementById(`item-${index}-amount`).innerText = amountItems[index]

    let coinIteam = amountItems[index] * iteamCart[index].coin
  
    coinPay[index].innerHTML = `<p class="coin">${coinIteam} đ</p>`
    
    let total =0
    for(let i = 0; i < amountItems.length; i++){

        const iteamTotal  = document.getElementById(`item-${i}`).lastElementChild
        // total = total +totalCoin.innertext
        const showTotal =Number(iteamTotal.querySelector('.coin').innerText.slice(0,-1))
      
        total =total + showTotal
    }
    
                    
    totalMonney.innerHTML = ` <p class="total-coin text-money">${total}đ</p>`

    }))



// console.log(upIteam )   
const innerHtmls = iteamCart.map((ele) => {

    return  `
                    <div class="show-coin detail-style">
                        <p>Tạm Tính</p>
                        <p class="coin">${ele.coin}đ</p>
                    </div>
                </div>

    `
})
console.log(coinPay)
coinPay.innerHTML = innerHtmls.join('')




