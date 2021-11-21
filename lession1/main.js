console.log("hell world")
// alert("bạn bao nhiêu tuổi")
document.write("xin chào bạn")


// khai báo biến
 
let number

console.log(number)  //kiểu dữ liệu undefined là kiểu dữ liệu khi chưa có giá trị cho biến


number =10 //kiểu biến number
console.log(number)


//vừa khai báo vừa khởi tạo giá trị

let email ="thien2903010@gmail.com"  // hàm string
console.log(email)



//khai báo sử dụng const:co

const pi = 3.14
console.log(pi);

/* 
Quy tắc đặt tên biến
    -có chữ số 
    -kí tự đầu tiên không đc là số nên là chữ
    -phân biệt hoa và thường number # Number #numBer
    -không trùng với từ khóa
    -đặt tên biến theo chuẩn camelCase 
        +có 2 từ trỏ lên vd: phamthien thì nên đặt là phamThien
        + vd :

        first_name
        firstName
==>Đặt tên biến có nghĩa.

*/






//kiểm tran kiểu dữ liệu toán tử typeof ().


console.log( typeof number)
console.log(typeof email)
console.log(typeof pi)
let string ="thien"
console.log(string)

//javascript string methods để tìm hiểu về ngôn ngữ kĩ hơn
// length: để đo độ dài của chuỗi    console.log(let .legth)

// find index để tìm vị trí của một kí tự trong 1 chuỗi  console.log(let . indexOf('kí tự' ,))
                                //  tìm kí tự cuối cùng  console.log(let lastIndexOf('kí tự', ))                                           

//string 

//khai báo string (chuỗi ) rỗng
let fitstName ="Phạm "
let lastName="Thiên"
let fullName = fitstName + ""+ lastName
console.log(fullName)

//backslash in javascript đê tìm những kí tự 
// let face=  \"pham văn thiên" là tôi
// console.log(face)


//Teamphate string
//  ``
//cho phép truyền biến, nhiều biểu thức, giá trị ..
let message = `"hà nội" hôm nay trời đẹp lắm`
console.log(message)


let year= "1920"
let text=` tôi là ${fullName} năm nay tôi ${2021-year} tuổi`

console.log(text)



//number
let num1=10
let num2=19

console.log(num1-num2)
console.log(num1+num2)
console.log (num1* num2)


console.log(Math.PI) //tính số pi
console.log(Math.floor(20.2))//làm tròn xuống
console.log(Math.ceil(29.2))//làm tròn lên 
console.log(Math.round(2))//tạo ra số ngẫu nhiên

//boolean có 2 giá trị true và false


//kết hợp string + number

//infinity dương vô cùng
console.log("4"+5)//số 5 sẽ đc thành chuỗi
console.log("4"-1)//"4" sẽ đc thành số

console.log(""+2+0)
console.log(""-2+0)
console.log("$"+5+4)
console.log(undefined +1)
console.log("4px"-3)
console.log(null +1)
console.log(typeof(2)+1)
console.log('3'+2 +2  )

let a =1 
let b=22
let name='john'


alert(b+a)
// alert(name+(a+b);
alert(name +(a+b))
alert(`${name +a}`)
alert(`${a+b} =a+b`)
alert(`1+2 = ${1+2}`)

console.log(Math.random(0,9))

              
