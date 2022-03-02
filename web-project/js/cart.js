const iteamCart = [
    { 
        title:"Apple MacBook Air M1 16GB 256GB 2020 I Chính hãng Apple Việt Nam",
        coin: 24790000,
        saleCoin:2899000,
        imgIteam: "../image/Lap/macAir.jpg"

    },
    { 
        title: "Apple MacBook Air M1 16GB 256GB 2020 I Chính hãng Apple Việt Nam",
        coin: 24790000,
        saleCoin:2899000,
        imgIteam: "../image/Lap/macAir.jpg"

    }
]

const render = document.querySelector('.render')
const  upIteam = document.querySelector('.click-up')
const  downIteam = document.querySelector('.click-down')

console.log(upIteam,  downIteam)   
const innerHtmls = iteamCart.map(element => {

    return  `
            <div class="sub-detail">
            
                <div class="detail-img detail-style">
                    <img src=${element.imgIteam} alt="">
                </div>

                <div class="detail-grid">
                    <div class="detail-nameIteam detail-style">
                        <p>${element.title}</p>
                        <div class="showIteam-coin">
                            
                            <div class="iteamCoin">
                                <p class="coin">${element.coin}đ</p>
                                <div class="sale-iteamCoin">
                                    <p>${element.saleCoin}đ</p>
                                    
                                </div>
                            </div>
                            
                        </div>
    
                        
                    </div>
                    <div class="more-iteam detail-style">
                        <div class="more-click">
                            <button>-</button>
                            <input type="text">
                            <button>+</button>
                        </div>
    
                        <div class="remove-iteam">
                            <i>xóa sản phẩm
                                <i class="far fa-trash-alt"></i>
                            </i>
                        </div>
                    </div>

                </div>


                <div class="show-coin detail-style">
                    <p>Giá bán</p>
                    <p class="coin">${element.coin}đ</p>
                </div>
            </div>
            <hr style="height:2px;border-width:0;">

    `
})
    render.innerHTML = innerHtmls.join('')


function newIteam(){
    let i = 1


}