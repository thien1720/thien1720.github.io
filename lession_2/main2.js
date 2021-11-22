//Bài 1
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


//Bài 2
function dataNumber(a,b){
    if(a>b){
        console.log('a lớn hơn b')
    }else{
        console.log('b lớn hơn a')
    }
}

dataNumber(3,5)
dataNumber(5,3)



//Bài 3

function check(a){
    if(a>0){
        console.log('a là số dương')
    }else if(a<0){
        console.log('a là số âm')
    }else{
        console.log('a là số âm')
    }
}
check(3)
check(-2)
check(0)


//Bài 4

function check2(a){
    if(a % 2 == 0){
        console.log(`Số ${a} là số chẵn `)
    }else{
        console.log(`Số ${a} là số lẻ `)
    }
}

check2(4)
check2(3)



//Bài 5

function cheak3(a){
    if(a % 3 ==0 && a % 5 ==0){
        console.log(`Số ${a} chia hêt cho 3 và 5 `)

    }else{
        console.log(`Số ${a} không chia hêt cho 3 và 5 `)

    }
}
cheak3(15)
cheak3(10)


//Bài 6

function checkTrip(a,b,c){
    if(a +b==c && c>=a,b){
        console.log('c là tổng của hai số a,b')
    }else{
        console.log('c là không là tổng của hai số a,b')

    }
}
checkTrip(5,10,15)
checkTrip(3,3,8)