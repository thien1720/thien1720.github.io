//đối tượng constructor function bài 39
function Validator(opstion) {

    function getParent(element ,selector) {
        while (element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element =element.parentElement
        }
            
    }

    let selectorRules ={}

    //hàm thực hiện validate
    function Validate(inputElement,rule) {
        
        let errorElement =getParent(inputElement,opstion.formGroupSelector).querySelector(opstion.errorSelector)
        let errorMessage ;


        //lấy ra các rules của selector 
        let rules = selectorRules[rule.selector]

        //lặp qua từng rules và kiểm tra 
        for (let i = 0; i < rules.length; ++i) {
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }

            
            //nếu có lỗi thì dùng việc kiểm tra
            if(errorElement) break;
            
        }
        
                    if(errorMessage){
                        errorElement.innerText = errorMessage
                        getParent(inputElement,opstion.formGroupSelector).classList.add('invalid')
                    }else{
                        errorElement.innerText =""
                        getParent(inputElement,opstion.formGroupSelector).classList.remove('invalid')
                    }
                    return !errorMessage
    }

    //lấy elemenet của form cần validate
    let formElement = document.querySelector(opstion.form)
        console.log(opstion.rules)
    if(formElement){  

        //khi submit form thì bỏ đi hành vi mặc định
        formElement.onsubmit =function(e){  
            e.preventDefault();
            let isFormValid=true;

        //lặp qua từng rules 
        opstion.rules.forEach(rule => {
            let inputElement =formElement.querySelector(rule.selector)  

            let isValid = Validate(inputElement,rule)
            if(!isValid){
                isFormValid=false

            }
        })  

        if(isFormValid){
            //trường hợp submit với js
            if(typeof opstion.onSubmit === 'function'){
                let enableInput = formElement.querySelectorAll("[name]:not([disabled])")
                let formValues = Array.from(enableInput).reduce(function(values ,input) {
                    switch(input.type){
                        case 'radio':
                            values[input.name]=formElement.querySelector('input[name="' + input.name + '"]:checked ').value;
                            break;
                        case 'checkbox':   
                            if(!input.mathches(":checked")){
                                values[input.name] =""
                                return values;
                            } 
                            if(!Array.isArray(values[input.name])){
                                values[input.name] =[];

                            }
                            values[input.name].push()
                            break;
                        case 'file': 
                            values[input.name] =input.files;
                            break;
                            
                        default:
                            values[input.name] =input.value;
                    }


                    return values
                } ,{})
                opstion.onSubmit(formValues)
            }
            //trường hợp submit với html submit
            else{
                formElement.submit()
            }
        }

        }
        opstion.rules.forEach(rule => {
            //lưu lại các rules cho input
    
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)    
            }else{

                selectorRules[rule.selector] = [rule.test]
            }


            let inputElements =formElement.querySelectorAll(rule.selector)  

           

            Array.from(inputElements).forEach(function(inputElement){

                
                    //xử lí trường hợp blur ra khỏi input
                    inputElement.onblur =function(){
                       Validate(inputElement,rule)
                    }
    
                    //xử lí mỗi khi người dùng nhập vào input
                    inputElement.oninput =function(){
                        let errorElement =getParent(inputElement,opstion.formGroupSelector).querySelector(opstion.errorSelector)
                        errorElement.innerText =""
                        getParent(inputElement,opstion.formGroupSelector).classList.remove('invalid')
                    }
                
            })
        });

        console.log(selectorRules)
    }
}

Validator.isRequired = function(selector ,mes) {
    return{
        selector:selector,
        test: function (value){
            //hiểu là nếu mà có value thì không trả ra gì còn không có value thì tra vui lòng nhập lại
            return value ? undefined : mes || "vui lòng nhập trường này"
        }

   } 
}