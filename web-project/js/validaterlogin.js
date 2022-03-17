
function Validater(option){
    let seclecterRule = {}

    function validate(inputElement,rule){
        let messageElement = inputElement.parentElement.querySelector(option.error)
       
        let errrosMessega

        // lấy ra các rule của selecter 
        let rules = seclecterRule[rule.selecter]

        // lặp qua tưng rule và check 
        for(let i= 0 ; i < rules.length; i++) {
            
            errrosMessega = rules[i](inputElement.value)
            if(errrosMessega)
            break
        }

        if(errrosMessega){
            messageElement.innerHTML = errrosMessega
            inputElement.classList.add("border")
        }else{
            messageElement.innerHTML = ""
            inputElement.classList.remove("border")
        }

        return !errrosMessega
    }
    
    let formElements = document.querySelectorAll(option.form);
    let formRender = document.querySelector(option.renderElement);
    // console.log(formRender)
    for(let formElement of formElements){

        if(formElement){
            // submit form loại bỏ
            formElement.onsubmit = function(event){
                event.preventDefault()
    
                let isFormValid = true;
    
                option.rule.forEach(function (rule){
                let inputElements = formElement.querySelectorAll(rule.selecter)
                
                    for(let inputElement of inputElements){
                        let isValid = validate(inputElement,rule)
                        if(!isValid){
                            isFormValid = false;
                        }
    
                    }
                })
              
                if(isFormValid){
                    if( typeof option.onsubmit === "function"){
                        let enabledInput = formElement.querySelectorAll("[name]:not([disabled])")
                       
                        let formInput = Array.from(enabledInput).reduce(
                            function(values,input){
                                return (values[input.name] = input.value) && values
                            },{})
    
                         option.onsubmit(formInput)
                        
                        
                                        
                    }
                }
            }
        }
        if(formElement){
    
            // /lặp qua các form xử lý blur input 
            option.rule.forEach(function (rule){
                // điều kiện lưu tất cả các rules
                if(Array.isArray(seclecterRule[rule.selecter])){
                    seclecterRule[rule.selecter].push(rule.test)
                }else{
                    seclecterRule[rule.selecter] = [rule.test]
                }   
                
                let inputElements = formElement.querySelectorAll(rule.selecter)
                
                for(let inputElement of inputElements){
    
                    if(inputElement){
                        inputElement.onblur = function(){
                            validate(inputElement,rule)
                            
                        }
                        inputElement.oninput = function(){
                        let messageElement = inputElement.parentElement.querySelector(option.error)
        
                            messageElement.innerHTML = ""
                            inputElement.classList.remove("border")
                        }
                    }
                }
            })
            // console.log(seclecterRule)
         
        }
    }
    
    
}

Validater.isrequired = function(selecter , messenger){
    return {
        selecter:selecter,
        test:function(value){
            return value.trim()?undefined:messenger||"vui lòng nhâp trường này"
        }
    }
}

Validater.isemail = function(selecter, messenger){
    return {
        selecter:selecter,
        test:   function(value){
            let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : messenger ||"vui lòng nhập email"
        }
    }
}


Validater.ispassword = function passWord(selecter,min ,messenger){
    return {
        selecter:selecter,
        test:function(value){
            return value.length>=min ? undefined : messenger ||`Vui lòng nhập tối thiểu ${min}`
        }
    }
}
Validater.isrepeatword = function(selecter,getValue ,mesenger){
    return {
        selecter:selecter,
        test: function(value){
            return value === getValue() ? undefined : mesenger|| "Vui lòng nhập lại mật khẩu"
        }
    }
}