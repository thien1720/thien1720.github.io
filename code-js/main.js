//bai 1

function check(data1 , data2){
    if((data1.indexOf(data2)) != -1){
        return true
    }else{
        return false
    }
}
console.log(check('i love you', 'i'))
console.log(check('i love you', 'me'))

//bài 2

function shortSting(srt){
    let result;
    if(srt.length>=8){
        return srt.slice(0 , 8) + '...'
    }else{
        return srt
    }
    
}
console.log(shortSting('tôi tên là thien'))


//bài 3:Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
//  (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),kết quả trả về true hoặc false.


// function checkSymmetString(srt){
//     //loại bỏ khoảng trống và cho in thường 
//     //srt = srt.replaceALl(' ', '').tolowerCase()
//     srt = srt.split( ' ').join(' ').toLowerCase()
// }


function getMirrorString(str){
    strNew=str.split(" ").join("").toLowerCase();
    //strNew=str.replaceAll(" ","").toLowerCase()
    for(j=0;j<strNew.length;j++){
      for(let i=strNew.length-1; i>=0; i--){
        if(strNew[i]==strNew[j])
          result=true;
        else
          result=false;
        } 
    }
    return result;
  }
  console.log(getMirrorString('abceee2222  eee    cba'))

//bài 4
//toán tử chuỗi chuyển sang số thể dấu cộng vào bên trong chuỗi
//toán tử chuyển từ số sang chuỗi là chuỗi cộng thêm chuỗi rỗng
//   vd:let string= (' '+ 5028483)



function getNumberMin(number){
    // arr=(number+"").split("").sort();
    let arr=number.toString().split("").sort();
    if(arr[0]==0)
      for(let i=0 ; i<arr.length ;i++){
        if(arr[i]!='0'){
          let temp=arr[0];
          arr[0]=arr[i];
          arr[i]=temp;
          break;
        }
      }
    return Number(arr.toString().replaceAll(",",""));
  }
  console.log(getNumberMin(1003292))

//bài 5 

function getRename(str){
    let result='';
    //str.replaceAll(" ","_").toLowerCase();
    //str.toLowerCase().split(" ").join(" ","_")
    for(let i=0 ; i < str.length ; i++){
        result+=str[i].replace(" ",'_').toLowerCase();
    }
    return result;
  }
  console.log(getRename("Hello World"))


// kiểu number
let string = '34 35 39'
let number = 4808.03482
console.log(Number.parseFloat(string))
console.log(Number(number).toFixed(3))


let languages = [
    'jascript',
    'PHP' , 
    'Ruby',
    'java',
    
];

console.log(languages.slice(-2,-1))