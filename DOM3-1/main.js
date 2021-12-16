const boxesEl = document.querySelector('.boxes');
const pointsEl = document.querySelector('.points');
const btn = document.querySelector('#btn');


let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

let colorsCopy = [...colors];

// Render box
function renderBox(arr) {
    boxesEl.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        boxesEl.innerHTML += `
            <div 
                class="box" 
                style="background-color: ${arr[i]}"
                onclick="removeBox(${i})"
            ></div>
        `
    }
    updateTotalBox(arr);
}

// Cập nhật tổng số box
function updateTotalBox(arr) {
    pointsEl.innerText = arr.length;
}

// Thêm box
btn.addEventListener('click', function () {
    colorsCopy = [...colorsCopy, ...colors];
    renderBox(colorsCopy)
})

// Xóa box
function removeBox(index) {
    colorsCopy.splice(index, 1)
    renderBox(colorsCopy)
}

window.onload = renderBox(colorsCopy)