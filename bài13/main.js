//Câu 1:Tìm số lớn nhất trong mảng

function  checkElememtArray(array){
    let check = array[0];
    for(let i = 0;i< array.length; i++){
        if(array[i]>check){
            check = array[i]
        }
    }return check
}
console.log(checkElememtArray([2,3,4,6,7,8]))



//Câu 2:Tìm số nhỏ nhất trong mảng

function checkElememtArray1(arr){
    let check = arr[0]
    for(let i = 0 ; i< arr.length;i++){
        if(arr[i]<check){
            check= arr[i]
        }
    }return check
}

console.log(checkElememtArray1([2,3,4,6,7,8]))


//Câu 3:Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số
// dư tương ứng khi chia mảng cũ cho 2
// Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]

function checkNewArray(newArr){
    let long = []
        for(let i =0;i < newArr.length;i++){
            let number = newArr[i] % 2
            long.push(number)
        }
        return long
    }

console.log(checkNewArray([2,4,5,6,7,1]))

//Câu 4:Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function repeat(arraySting){
    let checkVal= []
    for(let i = 0;i<10; i++){
        
        checkVal.push(arraySting)
    }
        return  checkVal.join('')
}
console.log(repeat('thien'))

//Câu 5 :Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu
// gạch ngang.
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

function repeat1(arrayString){
    let condition=[]
    for(let i =0;i<10;i++){
        condition.push(arrayString)
    }return condition.join('-')
}
console.log(repeat1('thien'))
