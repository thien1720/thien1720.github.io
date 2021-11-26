//Bài1

function soData(){
    let dataString = "thien";
    for(let a=1;a<10;a++){
       dataString =dataString +'thien'
       
    }
    console.log(dataString)
}
soData()

//Bài 2

function repeatString(){
    let charecter = "a"
    for(let a=1; a<10;a++){
        charecter =charecter+'-'+'a' 
        
    }
    console.log(charecter)
}
repeatString()


//bài 3

function repeatString1(charecter1){
    let charecter = "a"
    for(let n=1; n<charecter1 ; n++){
        charecter = charecter + '-'+'a'
    }
    console.log(charecter)
}
repeatString1(7)




//Bài4
function number(){
    let datanumber = 0
    for(let i = 0; i <=100; i++){
        if(i % 5 == 0){
            datanumber+= i
        }
    }
    return datanumber

}
console.log(number())


//bài 5
function dataNumber(number){
    
    let PI = 3.14
    if( number > 0  ){
        let volume =(4*PI*Math.pow(number,3))/3
        console.log(volume)
    }

}
dataNumber(6)

//bài 6

function menuNumber(a){
    
    let sum = 0
    for(let i =0; i < a; i++ ){
        sum+=i
    }
    return sum
}
console.log(menuNumber(6))

//bài 7 

 function listNumber(b){
     if(b ==2 ){
             console.log(true)

     }else if(b % 2 == 0 || b < 2){
             console.log(false)
     }
     else{
         for(let  i= 3 ; i < b-1; i += 2){
             if(b % i == 0){
                 console.log(false)
                 break
             }
            
    
         }
     }
 }
 listNumber(5)


// function kiem_tra_snt(n)
// {
//     var flag = true;
//     if (n < 2){
//         flag = false;
//     }
//     else{
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
 
//     if (flag == true){
//         document.write(n + " là số nguyên tố <br/>");
//     }
//     else{
//         document.write(n + " không phải là số nguyên tố <br/>");
//     }
// }
// kiem_tra_snt(3)