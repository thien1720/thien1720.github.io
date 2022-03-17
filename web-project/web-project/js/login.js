// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)
const subInputs = $$("#login .login-iteam .email input")
const formLogin = $(".login-user")
const iconLogin = $(".show-login-tab ")
const subBtns = $$(".sub-btn")
const boxLogin = $("#login .box-login")
const nameSub = $$(".show-login .name-sub")
const loginIteams = $$(".box-login .login-iteam")
const subShow = $$('.sub-btn')
const deleteInputs = $('.delete-text')
const prentElement = $('.com')
// console.log(iconLogin ,formLogin)

function removeInput(){
    deleteInputs.focus()
    deleteInputs.value = ''
    prentElement.querySelector('.form-mesage').classList.add('content-unactive')
    
}

function showLogin(){
    // console.log('hien')
    formLogin.classList.remove("hide")
}


for(let subBtn of subBtns){               
    subBtn.addEventListener("click",hideLogin)
        function hideLogin(event){
            event.preventDefault()
            formLogin.classList.add("hide")
            for(let subInput of subInputs){
                if(subInput){
                    subInput.value = ""
                }
            }
}}



subShow.forEach(function(sub){
    sub.addEventListener('click' , removeInput)
})
    
formLogin.addEventListener("click", hideLogin)

iconLogin.addEventListener("click", showLogin)


boxLogin.addEventListener("click", function(event){
    event.stopPropagation()
})

nameSub.forEach((sub,index) => {
    const subBtn = subBtns[index]
    const loginIteam = loginIteams[index]
    
    sub.onclick = function(){
        $(".show-login .name-sub.active-color").classList.remove("active-color")
        $(".login-iteam.active").classList.remove("active")
        $(".sub-btn.active").classList.remove("active")
        
        
        this.classList.add("active-color")
        loginIteam.classList.add("active")
        subBtn.classList.add("active")

    }
});



// let renderComment = document.querySelecter("#render-coment")
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
            console.log(seclecterRule)
         
        }
    }
    
    
}

// Validater.isrequired = function(selecter , messenger){
//     return {
//         selecter:selecter,
//         test:function(value){
//             return value.trim()?undefined:messenger||"vui lòng nhâp trường này"
//         }
//     }
// }

// Validater.isemail = function(selecter, messenger){
//     return {
//         selecter:selecter,
//         test:   function(value){
//             let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//             return regex.test(value) ? undefined : messenger ||"vui lòng nhập email"
//         }
//     }
// }


// Validater.ispassword = function passWord(selecter,min ,messenger){
//     return {
//         selecter:selecter,
//         test:function(value){
//             return value.length>=min ? undefined : messenger ||`Vui lòng nhập tối thiểu ${min}`
//         }
//     }
// }
// Validater.isrepeatword = function(selecter,getValue ,mesenger){
//     return {
//         selecter:selecter,
//         test: function(value){
//             return value === getValue() ? undefined : mesenger|| "Vui lòng nhập lại mật khẩu"
//         }
//     }
// }

// Validater({
//     form:".login-iteam",
//     error: ".form-mesage",
//     rule:[
//         Validater.isrequired("#login .login-iteam .email .fullname-sub" ,"vui lòng nhập tên của bạn"),
        
//         Validater.isemail("#login .login-iteam .email .email-sub" ,"Vui lòng nhập email"),
//         Validater.ispassword("#login .login-iteam .email .password", 8),
//         Validater.isrequired("#login .login-iteam .email .repeat-password" ,"Giá trị nhập vào không chính xác"),
//         Validater.isrepeatword("#login .login-iteam .email .repeat-password",
//         function(){
//             return document.querySelector("#login .login-iteam .email .repeat-password").value
//         },
//             "Mật khẩu nhập lại không chính xác"),
//         ],
//     onsubmit:function(data){
//         return data
//     },
    

// })