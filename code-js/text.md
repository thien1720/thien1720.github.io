-slice() trích xuất một phần của chuỗi và trả về phần được trích xuất trong một chuỗi mới.
-số âm là tính từ cuỗi chuỗi lên.

    vd: let text='pham van thien'
        let part = text.slice(7, 10)
     
     *note: 7 là vị trí bắt đầu 
           10 là vị trí kết thúc nếu không có thì sẽ cắt đến hết chuỗi

-substring()tương tự như slice().

-Sự khác biệt là substring()không thể chấp nhận các chỉ số âm.

-Các replace()phương pháp thay thế một giá trị nhất định với một giá trị trong một chuỗi:

    vd:    let text = "Please visit Microsoft!";
           let newText = text.replace("Microsoft", "W3Schools");
        
-Một chuỗi được chuyển đổi thành chữ hoa với toUpperCase():

-Một chuỗi được chuyển đổi thành chữ thường với toLowerCase():

-concat() nối hai hoặc nhiều chuỗi:

    vd:let text1 = "Hello";
       let text2 = "World";
       let text3 = text1.concat(" ", text2);

-Các trim()Loại bỏ phương pháp khoảng trắng từ cả hai phía của một chuỗi:



-The charAt() method returns the character at a specified index (position) in a string: