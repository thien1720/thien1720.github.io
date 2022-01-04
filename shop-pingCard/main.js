
//các chức năng tượng:
// nhập mã giảm giá
// thêm số lượng
// xóa sản phẩm
//click hiển thị rõ ảnh
//mã giảm giá
//cập nhật tổng số lượng sản phẩm
//reder ra số lượng sản phẩm


//các đối tương:
//hình ảnh
//name
//img
//hiển thị số item trong card
//total


//mockup danh sách sản phẩm
let products =[
    {
        id :1,
        name :"Áo kiểu nữ cam đất phối cổ trắng dập ly",
        description:"sản phẩm dễ phối đồ",
        price:250000,
        total:1,
        imgge:"https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550"

    },
    {
        id :2,
        name :"Áo trắng bèo lé đen tay loe dễ thương",
        description:"Một chút khéo léo trong khâu mix & match",
        price:330000,
        total:2,
        imgge:"https://image.yes24.vn/Upload/ProductImage/anhduong201605/1947415_L.jpg?width=550&height=550"
    }
]

const productlist = document.querySelector('.products')
const row = document.querySelector(".row")
const totals=[]
const counts = document.querySelector('.count')

const subTotal = document.querySelector('.subtotal span')
const total = document.querySelector('.total span')
const vats = document.querySelector('.vat span')
const inputs = document.querySelector('#promo-code')
const buttons = document.querySelector('button')
const discounts_sub=document.querySelector('.discount span')
const discounts=document.querySelector('.discount')

console.log(discounts)


function renderProduct(arr){
    productlist.innerHTML = ''

    if(arr.length ==0){
        productlist.innerHTML ="không có sản phẩm nào trong mảng"
       
        return 
    }

    for(let i = 0 ; i<arr.length; i++){
        const t = arr[i]
        productlist.innerHTML+=`
        <ul class="products">
        <!-- Product Item 1 -->
        <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#">
                        <img src="${t.imgge}" alt="Áo kiểu nữ cam đất phối cổ trắng dập ly">
                    </a>
                </div>
                <div class="detail">
                    <div class="name"><a href="#">${t.name}</a></div>
                    <div class="description">
                       ${t.description}
                    </div>
                    <div class="price">${t.price} VND</div>
                </div>
            </div>

            <div class="col right">
                <div class="quantity">
                    <input type="number" class="quantity" onclick value="${t.total}">
                </div>

                <div class="remove">
                    <span class="close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </li>
    
 
        `
    }
}

// cập nhật số lượng sản 
function changeTotal(id ){
   
    let a= 0

    for (let i = 0; i < products.length; i++) {
        
         a +=products[i].total
        
    }
    counts.innerHTML=`${a}items in the bag`
   
}
changeTotal(products)

//cập nhật subtotal
function subNewTotal(sum){
    let totals = 0 
    
    
   
    for (let i= 0; i < sum.length; i++) {
        totals += products[i].price
    }

    var renderSub =  subTotal.innerText=`${totals}`
    const rederVat = vats.innerHTML = renderSub * 0.1
    let discount = (renderSub) * 0.3


    let useInput;
    inputs.onchange = function(e) {
        // console.log(e.target.value)
         useInput =e.target.value

        let valueInput = 'Discount'
        let checkDiscount = String(valueInput) === String(useInput)

        console.log(checkDiscount)
        if (checkDiscount) {
            buttons.onclick = function () {
                discounts.classList.remove('hide')
                const newDiscount = discounts_sub.innerHTML= discount
                
                total.innerHTML =  Number(renderSub) + Number(rederVat)-Number(newDiscount)
            }

        }else{
            buttons.onclick = function () {
                discounts.classList.remove('hide')
                discounts_sub.innerHTML=0
            }
            
        }
    }
    
    
    // let valueInput='Discount'
    // let checkDiscount= String(valueInput) === String(useInput)

    // console.log(checkDiscount)
    // if (checkDiscount) {
    //     buttons.onclick = function () {
    //         console.log(discount)
    //     }
        
    // }
    
    total.innerHTML =  Number(renderSub) + Number(rederVat)
}
subNewTotal(products)






renderProduct(products)