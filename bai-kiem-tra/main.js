// bài 6:
//Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

users = [
    {
        name : "Bùi Công Sơn",
        age : 30,
        isStatus : true
    },
    {
        name : "Nguyễn Thu Hằng",
        age : 27,
        isStatus : false
    },
    {
        name : "Phạm Văn Dũng",
        age : 20,
        isStatus : false
    }
]

// *câu 1

users.forEach(element => {  //dùng vòng lặp forEach để lấy ra từng phần tử của ob
    let ages=element.age    //lấy ra tưng phần tử của age
    let trues=element.isStatus  //lấy ra từng phần tử của isStatus
    let arr = []
    if(ages>25 && trues ==true){  //đk là giá trị của age> 25 và isStatus =true thì mới in ra kq
        arr.push(ages)
        arr.push(trues)
        return console.log(arr)
        
    }


    
});



// bài 3 Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function getRandomElement(ran){
    for(let i=0; i< ran.length;i++){
       
    }
    
    
}
console.log(getRandomElement([3, 7, 9, 11]))

