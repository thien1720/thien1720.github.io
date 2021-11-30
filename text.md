## slice() trích xuất một phần của chuỗi và trả về phần được trích xuất trong một chuỗi mới.
## số âm là tính từ cuỗi chuỗi lên.

    vd: let text='pham van thien'
        let part = text.slice(7, 10)
     
     *note: 7 là vị trí bắt đầu 
           10 là vị trí kết thúc nếu không có thì sẽ cắt đến hết chuỗi

## substring()tương tự như slice().

## Sự khác biệt là substring()không thể chấp nhận các chỉ số âm.

## Các replace()phương pháp thay thế một giá trị nhất định với một giá trị trong một chuỗi:

    vd:    let text = "Please visit Microsoft!";
           let newText = text.replace("Microsoft", "W3Schools");
        
## Một chuỗi được chuyển đổi thành chữ hoa với toUpperCase():

## Một chuỗi được chuyển đổi thành chữ thường với toLowerCase():

## concat() nối hai hoặc nhiều chuỗi:

    vd:let text1 = "Hello";
       let text2 = "World";
       let text3 = text1.concat(" ", text2);

## Các trim()Loại bỏ phương pháp khoảng trắng từ cả hai phía của một chuỗi:


## Character là lấy ký tự theo vị trí
		
        Vd: 
			Let name = ‘Thien’
			Console.log(name.chartAt(0))
			+trong js bắt đầu từ số 0.

			Let name = ‘Thien’
			Console.log(name[0])


## Sang array methods
     mảng được đánh số tự động từ số 0
    
     mảng có thể chứa tất cả các giá trị : function , biến ,số...
  

## Array method 

### Phân biệt array với:
    -Array.is.Array()
      
      vd: console.log('thien')
    
    -để lấy chỉ mục ta thêm giá trị vào array
      
      vd: console.log(Array[2])//2 là vi trí của array
    


#### Các cách làm việ với array
    -toString là chuyển từ array sang chuỗi
        vd: console.log(Array.toString())
    
    -join là thêm vào ngăn cách các phần tử của mảng
        vd: consle.log(Array.join('-'))

    -pop là xóa phần tử cuỗi mảng 
        vd:console.log(Array.pop())

    -push thêm phần tử vào cuỗi mảng(có thể nhiều phần tử)
        vd: console.log(Array.push('java','data'))

    -shift là xóa đi phần tử đầu mảng
        vd: console.log(Array.shift())
    
    -unshift là thêm phần tử vào đầu mảng

        vd: console.log(Array.unshift('javascript'))

    -splice là xóa và thêm phần tử vào mảng
        Vd: languages.splice(1 , 1 , ‘mobile’)
			* 1 là vị trí bắt đầu
			* 0 là số phần tử xóa đi từ vị trí bắt đầu
			* ‘mobile ’ là phần tử truyền vào (có thể có khi cần chèn vào)
    -concat là nối 2 array
        vd: console.log(Array.conca.Array1)

    -slice là cắt 1 phần tử hoặc toàn bộ mảng
        vd: console.log(Array.slice(1 , 2))
                * 1 là vị trí bắt đầu cắt 
                * nếu là âm thì tính từ dưới lên
                * 2 là vị trí kết thúc


