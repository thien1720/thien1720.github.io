## Javascript là ngôn ngữ kịch bản phía client và đươc sử dụng rộng rãi để thiết kế web động.


## Biến là gì
   là một định danh dùng để lưu trữ dữ dữ liệu, thông qua biến ta có thể thao tác với dữ liệu.
  
  
  Mỗi biến có một kiểu dữ liệu riêng và thao tác khác nhau với biến

  vd : biến có phép cộng trừ nhân chia nối chuỗi...

## Khai báo biến
    Ta sử dụng từ khóa let /const

    vd : let useName;



## Quy tắc đặt tên biến (5)

    - Có các kí tự chữ, số, _ , và $.
    - Kí tự đâu tiên không phải là số.
    -Biến có phân biệt hoa và thường.
    -KHông trùng với từ khóa của js. vd:for, while, var,...
    -Nên đặt theo kiểu camelCase: vd : let bigData;



## Kiểm tra kiểu dữ liệu 
    Chúng ta dùng toán tử typeof.
    vd: 
    let number =8;
    console.log(nunber 8)

## Kiểu dữ liệu string
    Là một đoạn text hoặc nhiều kí tự đc bao quanh bằng dấu nhay đơn ' hoặc nháy kép".
    vd : let useName ="PHạm Văn Thiên"
         let textMenu = 'hello word'

## Nối chuỗi ta dùng toán tử +

    vd: let lastName ='Thiên'         
        let fistName = 'Phạm'
        let fullName = fistName + lastName


## teamplate strings ES6

    Khai báo chuỗi kí tự `` thay cho ngoặc đơn hoặc ngoặc kép

    ta dung ${} để truyền biến vào , biểu thức , giá trị

    vd: let number=18
        console.log(`Năm nay tôi ${number}`)


## Kiểu number

    Là tập hợp các số có thể là số âm.

    vd : let age= 18
         let number= 5.2


## Các phép toán với number 
    là phép công , trừ , nhân , chia , chia lấy dư,....
    Math trong js:
     -Math.min , Math.max: tìm số lớn nhất nhỏ nhất.
     -Math.round , Math.ceil, Math.foor: làm tròn số
     -Math.random(): tìm số trong khoảng[0,3]
       
       vd: console.log(Math.radom(0,3))
     
     - kêt hợp srtin và number
         
         console.log('4' +5)
         --> số 5 sẽ đc đổi sang kiểu chuổi và in ra là 45.

         console.log('4'-2)
         -->'4' sẽ chuyển thành số và in in ra là 2.

    # Bổ sung
    length : để đo độ dài của chuỗi
      vd: let name='Phạm Văn Thiên'
          console.log(let.length)  --> kêt quả in ra là 15.
        
## Các hàm 

    - hàm alert để hiển thị ra màn hình
     vd: aleart('hello word')

    