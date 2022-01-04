const data = [
    {
        title: "Chỉ số BMI dưới 18,5 là thiếu cân",
        content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
        image: "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
        content: "Bạn có một cơ thể tốt.",
        image: "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
        content: "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
        image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
        content: "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
        image: "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
    }
];

const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const inputs = document.querySelector('.input')
const btnSubmit = document.querySelector('#btn-submit')

const header = document.querySelector('.result-wrapper .say-hello')
const getBMI =document.querySelector('.result-wrapper .result-container')

const imgBMI =document.querySelector('.image-box')
console.log(imgBMI)

btnSubmit.addEventListener('click', function () {
    Array.from(inputs).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    
     let checkInputs =checkInput()

    

    render(data ,checkInput())
});

//render ra giao diện

function render(data ,checkInputs) {
    getBMI.classList.remove('hide')
    header.classList.add('hide')

    let toCheckInputs = checkInputs.toFixed(2)
    function getData(data) {
        
            imgBMI.style.backgroundImage = `url(${data.image})`

        
        let html =
            [
                `
            <span class="result-num">Chỉ số BMI của bạn:${toCheckInputs}</span>

            <!-- Hiển thị giới hạn về BMI -->
            <span class="result-title">${data.title}</span>

            <!-- Hiển thị thông tin BMI -->
            <span class="result-content">${data.content}</span>
            `
            ]
        
            getBMI.innerHTML=html.join('')
        }
    
    //kiểm tra điều kiện    
    if(toCheckInputs <=18.5){
        getData(data[0])
        
    }else if(18.5 < toCheckInputs && toCheckInputs<24.9){
        getData(data[1])
    }else if(24.9 <toCheckInputs && toCheckInputs <29.9){
        getData(data[2])
    }else if(toCheckInputs >29.9){
        getData(data[3])
    }
}


//check các giá trị của inputs
function checkInput() {
    //check chiều cao
    let heights = (height.value)/100
    
    let isChecked = true
    if(heights ==''){
        setError(height,'Chiều cao không được để trống')
        isChecked =false
    }else if(heights <=0 || heights !==Number(heights)){
        setError(height,'không đúng định dạng')
        isChecked =false

    }else{
        let inputHeight = setSuccess(height)
    }

    //check cân nặng

    let weights =(weight.value)*1
   
    if(weights ==''){
        setError(weight,'Chiều cao không được để trống')
        isChecked =false
    }else if(weights <=0 || weights !==Number(weights)){
        setError(weight,'không đúng định dạng')
        isChecked =false

    }else{
        let inputWeight = setSuccess(weight)
    }

    return (weights /(heights *heights))
}

//add class error và success
function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}
