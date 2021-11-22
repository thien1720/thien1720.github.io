// định nghĩa finction
function sayHello(){//tham số
    console.log('xin chào ')
}

//phần thực thi function (phần gọi ra)
sayHello()//đối số

//định nghĩa function với tham số 
function sayHelloWithName(name){
    console.log(`xin chào ${name}`)
}
sayHelloWithName('Phạm Văn Thiên') //truyền trực tiếp

let name ="Nguyễn Văn a"
sayHelloWithName(name)



//viết function in ra message
//"xin chào -name-.Năm nay bn tuổi"


function fullName(useName,age){
    sayHelloWithName(name)
    console.log(`xin chào ${useName} . Năm nay${2021-age} `)
}

fullName('Nguyễn Minh Hằng',2002)


//tính tổng

// function sum(a,b){
//     let result = a+b

//     return result  //sau return sẽ không đc thực thi
//     console.log(a)
//     console.log(b)
// }
 //thực thi 
 let data =sum(3,4)
 console.log(data)

 let data1= sum(data, 20)
 console.log(data1)

//cau1
function head(){
    console.log('xin chào các bạn')
}
//cau2
function fullName1(name){
    console.log(`Xin chào ${name}`)
}
fullName1('hôm nay bạn khỏe không')
//cau3
function useData(name){
    console.log(`Xin chào "${name}"`)
}
useData('tôi tên là')
//cau4
function sum1(a,b){
    console.log(a+b)
}
sum1(3,3)

//cau5
function double(math){
    console.log(math*math)
}

double(8)

//câu 6
function century(year1,century1){
    console.log(`${year1} là của thế kỉ ${century1} `)
}

century(2021, Math.ceil(2021/100))


//Phạm vi sử dụng
// global scope là biến dc khai bao bên ngoài function
//khi khai báo tron function mà không có từ khóa biên(let var)thì biến sẽ trỏ thành global.
// function scopt là biến khia báo bên trong funtion ra bên ngoài sử dụng sẽ báo lỗi


function sum(a,b){
    let result = a+b
    console.log(result)
    return result  
}



// block scope chỉ là {} ra ngoài sẽ không 

{
    let number =10
    console.log(number, number+10)
}


// default parameter là truyền 1 giá trị cho biến có trước





//boolear tiếp theo

// let a=true
// let b= false
// let a =!a
// let b = !b
// console.log(a,b,c,d);


//6 giá trị falsy:false , 0 , NaN ,"",null , undefined.   ngoài 6 giá trị cho kêt quả là truthy




//Câu lệnh if 
let hour=6 
if(hour < 10 ){
    console.log("good moning")
}else{
    console.log("mời bạn đi về")
}



// let age=15

// if (age<18){
//     console.log('tuổi teen')

// }else if(age>=18 && age<=50){
//     console.log('tuổi trưởng thành')
// }else{
//     console.log('tuổi già')
  

//cho vào function 
function getAge(age) {

if (age<18){
    console.log('tuổi teen')

}else if(age>=18 && age<=50){
    console.log('tuổi trưởng thành')
}else{
    console.log('tuổi già')
}
    
}
 

getAge(40)
getAge(17)
getAge(64)




function ageMark(mark) {
    if(mark>=85){
        console.log("A")
    }else if(mark >=70 && mark<85){
        console.log("B")
    }else if(mark>=40&& mark<70){
        console.log("C")
    }else{
        console.log("D")
    }
    
}

ageMark(90)
ageMark(80)
ageMark(60)
ageMark(30)


console.log(typeof('20'))
console.log(typeof(3.14))
console.log(typeof(-1))
console.log(typeof(100,1))





function number(a=2,b=3){
    let c=a+b
    console.log(c)
}


function stringInString(needle, haystack){
    if((typeof needle =='string')&& (typeof haystack =='string')){
        let check = haystack.indexOf(needle) //kiểm tra có thuộc haystack
        
        if(check == -1){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}

stringInString( 'javascript', 'javascript là ngôn ngữ lập trình')