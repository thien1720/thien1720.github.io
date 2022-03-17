function Validater(option){
    let seclecterRule = {}

    function validate(inputElement,rule){
        let messageElement = inputElement.parentElement.querySelector(".message")
        let errrosMessega

        // lấy ra các rule của selecter 
        let rules = seclecterRule[rule.selecter]

        // lặp qua tưng rule và check 
        for(let i= 0 ; i < rules.length; i++) {
            
            errrosMessega = rules[i](inputElement.value)
            if(errrosMessega)
            break
        }
        // console.log(rules)

        if(errrosMessega){
            messageElement.innerHTML = errrosMessega
            inputElement.classList.add("border")
        }else{
            messageElement.innerHTML = ""
            inputElement.classList.remove("border")
        }

        return !errrosMessega
    }
    
    let formElement = document.querySelector(option.form);
    let formRender = document.querySelector(option.renderElement);
    console.log(formRender)
    if(formElement){
        // submit form loại bỏ
        formElement.onsubmit = function(event){
            event.preventDefault()

            let isFormValid = true;

            option.rule.forEach(function (rule){
            let inputElement = formElement.querySelector(rule.selecter)
                let isValid = validate(inputElement,rule)
                if(!isValid){
                    isFormValid = false;
                }
            })
          
            if(isFormValid){
                if( typeof option.onsubmit === "function"){
                    let enabledInput = formElement.querySelectorAll("[name]:not([disabled])")
                    // console.log(enabledInput)
                    let formInput = Array.from(enabledInput).reduce(
                        function(values,input){
                            return (values[input.name] = input.value) && values
                        },{})

                    let userSub= option.onsubmit(formInput)
                    console.log(userSub)
                    let html = `
                            <div class="user-coment">
                            <div class="customer">
                                <div class="description-nav">
                                    <img src="../image/piano.jpg" alt="">
                                </div>
                                <div class="content-text">
                                <h5>${userSub.fullname}</h5>
                                <p>${userSub.comments}</p>
                                <span>
                                    <p>
                                        <i class="far fa-clock"></i>
                                        3 giờ trước
                                    </p>
                                    <a href="#form-input">Trả lời</a>
                                </span>
                                    
                                </div>
                            </div>
                
                            <div class="shop-anser customer">
                                <div class="description-nav ">
                                    <img src="../image/LogoBrand.png" alt="">
                                </div>
                                <div class="content-text">
                                <h5>NewTech</h5>
                                <p>${userSub.fullname}, <br>
                                    Sản phẩm không hỗ trợ tháo rời màn hình bạn nha. Thông tin đến bạn ạ!</p>
                                <span>
                                    <p>
                                        <i class="far fa-clock"></i>
                                        3 giờ trước
                                    </p>
                                    <a href="#form-input">Trả lời</a>
                                </span>
                                    
                                </div>
                            </div>
                        </div>
                            `
                    let formRender = html.innerHTML
                                    
                }
            }
        }
    }
    // console.log(formElement);
    if(formElement){

        // /lặp qua các form xử lý blur input 
        option.rule.forEach(function (rule){
            // điều kiện lưu tất cả các rules
            if(Array.isArray(seclecterRule[rule.selecter])){
                seclecterRule[rule.selecter].push(rule.test)
            }else{
                seclecterRule[rule.selecter] = [rule.test]
            }   
            
            let inputElement = formElement.querySelector(rule.selecter)
            // let messageElement = inputElement.parentElement.querySelector(".message")
            
            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement,rule)
                    
                }

                inputElement.oninput = function(){
                    // messageElement.innerHTML = ""
                    inputElement.classList.remove("border")
                }
            }
        })
     
    }
    
}


//các rule trong form 
Validater.isrequired = function(selecter ,messenge) {
    return {
        selecter:selecter,
        test:   function(value){
            return value.trim() ? undefined : messenge|| "vui lòng nhập trường này"
        }
    }
}

Validater.isemail = function (selecter ,messenge) {
    return {
        selecter:selecter,
        test:   function(value){
            let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : messenge ||"vui lòng nhập email"
        }
    }
}


Validater.iscomment = function(selecter) {
    return {
        selecter:selecter,
        test:   function(){
            
        }
    }
}