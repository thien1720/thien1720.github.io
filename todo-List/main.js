

// --các chức năng :
// 1 hiển thị
// 2 thêm công việc 
// 3 thay đổi trạng thái công việc 
// 4 xóa công việc 
// 5 chỉnh sữa tên công việc
// 6 lọc tên theo trạng thái



// đối tượng công việc bao gồm:
// id
// title(tên công việc)
// status (trạng thái công việc)


let todos = [
    {
        id : randomId() , 
        title : 'đá bóng',
        status : false,
    
    },
    {
        id : randomId() , 
        title : 'đi chới với bạn',
        status : true,
    
    },
    {
        id : randomId() , 
        title : 'làm bài tập về nhà',
        status : true,
    
    }
]   
let todos=[]
const todolistEL = document.querySelector('.todo-list')
const todoInput = document.getElementById('todo-input')
const btnAdd = document.getElementById('btn-add')
// const pushList =document.querySelector('.btn-update')

// const deteleTodo =document.querySelector('.btn-delete')

let isUpdate =null
let idUpdate = false

function randomId(){
    return Math.floor(Math.random()*100)
}

//công việc hiển thì nội dung
function renderTodos (arr){
//xóa hết nội dung trước khi render
    todolistEL.innerHTML= ''
    //lấy ra giá trị mà đc chọn
    let option = getOPtionSelected()
    switch(option){
        case "all":{//tất cả công việc
            newArr = {...arr}
            break;

        }
        case "unactive":{//công việc chưa hoàn thành
            newArr = arr.filter(todo =>!todo.status)
            break;
            
        } case "all":{//công việc đã hoàn thành
            newArr = arr.filter(todo =>todo.status)
            break;
            
        }
        default:{
            newArr = [...arr]
            break
        }
    }

    
    //trường hợp mảng rỗng 
    if(arr.length ==0){
        todolistEL.innerHTML = 'Không có công việc nào trong danh sách'
        return 
    }

    for(let i = 0 ;i< arr.length;i++){
        const t = arr[i]
        todolistEL.innerHTML += `
        <div class="todo-item ${t.status?'active-todo':""}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status?'checked':""}
            onclick ="toggleStatus(${t.id})"/>
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update">
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick ="deleteTodo(${t.id})>
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>
        `
    }
}

// 2.thêm công việc
btnAdd.addEventListener('click', function () {
    // Lấy nội dung trong ô input
    let title = todoInputEl.value;

    // Kiểm tra nội dung
    if (title.trim() == "") {
        alert("Tiêu đề không được để trống");
        return;
    }

    if (isUpdate) {
        // Cập nhật
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = title
            }
        }

        btnAdd.innerText = "THÊM"

        idUpdate = null;
        isUpdate = false;

    } else {
        // Thêm
        // Tạo ra công việc mới
        let newTodo = {
            id: randomId(),
            title: title,
            status: false
        }

        // Thêm vào mảng todos
        todos.push(newTodo);
    }



    // Render lại giao diện
    setDataToLocalStorage(todos)
    todoInputEl.value = ""
})


// 3. Thay đổi trạng thái công việc
function toggleStatus(id) {
    // Cập nhật lại trạng thái công việc trong mảng todos tương ứng với id
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
    }

    // render lại giao diện
    renderTodos(todos)
}

// 4. Xóa công việc
function deleteTodo(id) {
    // Xóa công việc trong mảng todos tương ứng với id
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }

    // render lại giao diện
    renderTodos(todos)
}
// phần 5 chỉnh sửa
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todoInputEl.value = todos[i].title;
            todoInputEl.focus();

            btnAdd.innerText = "CẬP NHẬT";
            idUpdate = id;
            isUpdate = true;
        }
    }
}


// 6. Lọc công việc theo trạng thái
todoOptionEls.forEach(input => {
    input.addEventListener('change', function () {
        renderTodos(todos)
    })
});

// Lấy ra giá trị trong ô input đang được chọn
function getOptionSelected() {
    for (let i = 0; i < todoOptionEls.length; i++) {
        if (todoOptionEls[i].checked) {
            return todoOptionEls[i].value
        }
    }
}


//lấy dữ liệu từ localStorage
function getDataFromLocalStorage(){
    let value = localStorage.getItem('todos')
    if(value){
        todos = JSON.parse(value)
    }else {
        todos = []
    }
    renderTodos(todos)
}
function setDataToLocalStorage(arr){
    localStorage.setItem('todos',JSON.stringify(arr))
    renderTodos(arr)
}
window.onload=getDataFromLocalStorage
renderTodos(todos)


