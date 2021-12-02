//bìa 1 : Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']
//sao đức lại lên đứng đầu

function checkA(arr){
  
   
    arr.sort((a, b) => {
        if (a > b)
            return -1
        else if (a < b)
            return 1
        return 0
    })
    console.log(arr)
}
checkA(["tuan","anh","phương"])


//bài 2 Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

function randoms(listArray){
    
    let irr=[]
    for(let i = 0;i< listArray.length ; i++){
       newArray =listArray[ Math.floor(Math.random() * listArray.length)]
       irr.push(newArray)
    }
    return irr
}
console.log(randoms([2,3,4,5,6,7]))
console.log(randoms([1,2,3,4,5]))


function lists(list){
    newlist=list.sort(() => Math.random() - 0.5)
    return newlist
}
console.log(lists([1,2,3,4,5]))
console.log(lists([1,2,3,4,5]))

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]


// function symmetricDifference(arr, arr1){
//     const sumArray =[...arr1, ...arr]
//     let newArr = []
//     for(const elemt of)
// }


function symmetricDifference(arr1, arr2) {
    const sumArr = [...arr1, ...arr2];
    let newArr = [];
    for (const element of sumArr) {
       if (!arr1.includes(element) || !arr2.includes(element)) {
          newArr.push(element);
       }
    }
    return newArr;
 }
 
 console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));


//bài 4

function union(arr1,arr2){
    let newArray  =[]
    const arr = [...arr1, ...arr2]
    for(let i =0 ; i< arr.length; i++){
        if(newArray.indexOf(arr[i])==-1){
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(union([2,4,6,3],[2,3,4,56]))