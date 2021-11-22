## function
    Là tập  hợp các đoạn mã code dùng để thực hiện một việc cự thể nào đó
    vd:
    function sayHello(tham số){
        console.log('xin chào') xin chào là đối số
    }
    
    sayHello là hàm thực thi



## function có một số loại
    -function có tham số hoặc không có tham số
    -function có giá trị trả về hoặc không

## function default values ES6
    -Cho phép function khởi tạo với những default values nếu như chúng được định nghĩa sai( tức là gán 1 giá trị vào hàm thực thi).

    -Xử dụng chức năng này giúp function ít bị lỗi hơn.

    -default parameter là truyền 1 giá trị cho biến có trước.

    -đối số argument là đối số đã truyền vào js.

            vd:function number(a=2,b=3){ 2,3 là default paramemter là truyền giá trị tham số cho hàm.
                let c=a+b
                console.log(c)
            }

            number (6,8) -->6,8 là đối số giá trị được truyền vào trong hàm.
## return 

    Sau return các câu lệnh sẽ không được thực thi


## PHạm vi sử dụng 
    -global scope là biến đc khai báo bên ngoài function 

        vd: function name(lastName,fistName){
            console.log(`Tên tôi là ${lastName}+""+${fistName`)
        }

        name(Phạm, Thiên)

    -Khi khai báo trong function mà không có từ khóa biến (let , var , const) thì biến sẽ trở thành global
    -Function scope là biến khai báo bên trong function .
    -Block scope là biến khai báo bên trong {} còn ra ngoài sẽ không đươc


    

## boolear tiếp
    -boolear co tác dụng để kiểm tra 1 biểu thức và trả về giá trị đúng sai 
      
    let a =true
    let b = false
    let a !=a  (phủ định của a= true là flase)
    let b !=b (phủ định của b=flase là true )


    - Có 6 giá trị flasethy là:
      +  false,
      +  " ",
      + 0,
      + NaN, 
      +  null,
      + undefined.

    - Ngoài 6 giá trị falsethy thì cho kết quả là truthy



## Câu lệnh if 


    if(điều kiện để thực hiện){
        code cho lệnh if

    }else if(điều kiện){
        code cho lệnh
    }



    * điều kiện đúng thì mới thực hiện lệnh bên trong câu lệnh if.


    * 2 dấu '==' kiểm tra giá trị.
    * 3 dấu '===' kiểm tra kiểu dữ liệu và trùng giá trị.