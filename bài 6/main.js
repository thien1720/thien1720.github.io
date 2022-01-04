const btn=document.getElementById('btn')
const image=document.getElementById('image')
const select=document.getElementById('breed-list')
const form =document.querySelector(".form")
const box=document.querySelector(".box")
console.log(box);
let arr=[]
// API: https://dog.ceo/api/breeds/list/all
async function getBreedsList(){
  let res=await axios.get("https://dog.ceo/api/breeds/list/all")
  console.log(res);
    
  // sau khi có data thì hiển thi kết quả giao diện
  renderBreeds(res.data.message)
    
}


function renderBreeds(breeds){
  // duyệt qua breeds ->tạo option->gắn vào DOM
  Object.keys(breeds).forEach((e) =>{
  // console.log(e);
    select.innerHTML+=`<option value="${e}">${e}</option>`; 
  })
}
btn.addEventListener("click",function(){
  getSubBreeds();
  
})


async function getSubBreeds(){
    let res=await axios.get(`https://dog.ceo/api/breed/${select.value}/list`)
    arr=res.data.message
    renderSubBreeds(res.data.message)
}


function renderSubBreeds(arr){
  form.innerHTML=""

  // arr.forEach((e,i)=>{
  //   form.innerHTML+=`<li onclick="getImage(${i})"><a href="#">${e}</a></li>`;
  // })
  console.log(arr.length);
  if(arr.length==0){
    form.innerHTML+=`<li>Không có Sub Breeds</li>`;
    image.src=""
    box.classList.add("hide")


  }else{
    for (let i = 0; i < arr.length; i++) {
      form.innerHTML+=`<li onclick="getImage(${i})"><a href="#">${arr[i]}</a></li>`;
      box.classList.remove("hide")
    }
  }
}
async function getImage(i){
  try{
    let res=await axios.get(`https://dog.ceo/api/breed/${select.value}/${arr[i]}/images/random`)
    console.log(res);
    // Gán ảnh cho thẻ image
    image.src=res.data.message
  }catch(error){
    console.log(error);
  }
}

getBreedsList()