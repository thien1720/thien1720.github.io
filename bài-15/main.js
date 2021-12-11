const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]
// viết function tính thứ hạng trung bình của cả lớp
function calculateAvgClass(arr){
    let total =0
    for(let i=0; i< arr.length;i++){
        total +=arr[i].grade
    }
    return total/arr.length
}
console.log(calculateAvgClass(grades))


// Viết function tính thứ hạng trung bình của nam trong lớp
function calculeteMale(arr){
    let total = 0
    let count =0
    for(let i=0;i< arr.length;i++){
    
        if(arr[i].sex=='M'){
            total +=arr[i].grade
            count++
        }
    }return total/count
}

console.log(calculeteMale(grades))

// Viết function tính thứ hạng trung bình của Nữ trong lớp

function calculateFale(arr){
    let total = 0
    let count =0
    for(let i=0; i<arr.length; i++){
        if(arr[i].sex=='F'){
            total +=arr[i].grade
            count++
        }
    }
    return total/count
}
console.log(calculateFale(grades))

//Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

function calculateMaleMax(arr){
    let total = 0
    let max = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i].grade > max && arr[i].sex =="M"){
            max= arr[i].grade
        }
    }
    return max
}
console.log(calculateMaleMax(grades))


// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

function calculateFaleMax(arr){
    let total = 0
    let max = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i].grade > max && arr[i].sex =="F"){
            max= arr[i].grade
        }
    }
    return max
}
console.log(calculateFaleMax(grades))

//  Viết function thứ hạng cao nhất của cả lớp

function calculeteMax(arr){
    let total = 0
    let max =0
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i].grade> max){

            max= arr[i].grade
        }
    }
    return max
}
console.log(calculeteMax(grades))

//  : viết function thứ hạng thấp nhất của cả lớp:

function calculeteMin(arr){
    let newArr = []
    arr.forEach(element => {
        let arrList = element.grade
        return Math.min(Number(arrList))
        
    });
    
}
console.log(calculeteMin(grades))





 
 
  
  
  
  // 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
  // function getListFemale(arr){
  //   let femaleList=[];
  //   for(let i=0;i<arr.length;i++){
  //     if(arr[i].sex=='F'){
  //       femaleList.push(arr[i].name);
  //     }
  //   }
  //   return  femaleList;
  // }
  // console.log(getListFemale(grades));
  const getListFemale=(arr)=>{
    return arr.filter(e=>e.sex=='F')
  }
  console.log(getListFemale(grades));
  
  
  // Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  const sortNameAscending=(arr)=>arr.sort(compare)
  console.log(sortNameAscending(grades));
  
  
  
  
  // Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
  const sortGradeDecending=(arr)=> arr.sort((a, b) => b.grade - a.grade);
  console.log(sortGradeDecending(grades));
  
  
  
  // Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"
  const getNameOfFemale=(arr)=> arr.filter(e=>e.name.slice(0,1)=='J');
  console.log(getNameOfFemale(getListFemale(grades)));
  
  
  // Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
   
  
  const getTopFiveGrade=(arr)=> arr.filter((e,i)=>i<=4)
  console.log(getTopFiveGrade(sortGradeDecending(grades)));
  
  
//   str=[1,2,3,4,4,5,56]
//   console.log(str.toString()); 
//   let fruits = ["Banana","Orange","Apple"];
//   console.log(fruits.join("+")); fruits.toString()//Banana,Orange,Apple
  
//   // let a='12334h'
//   // console.log(a.indexOf('l'));
//   let myGirls = ["Cecilie", "Lone"];
//   let myBoys = ["Emil", "Tobias", "Linus"];
  
//   console.log(myGirls.concat(myBoys)); 
//   const arr = [1, 2, 3, 4, 5, 6];
  
//   const sum = arr.reduce((total, value) => total += value, 0);
//   console.log(sum); // 21
//   var a=[1,2,3]
//   b=[1,2,3]
//   c='1,2,3'
//   console.log(a==b);
//   console.log(a==c);