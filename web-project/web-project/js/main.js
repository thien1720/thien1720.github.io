const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const navBar = $( "header #header-option .option-bar i")
const menu = $("header #header-option .option-mobile")
const overlay = $("header #header-option .nav-overlay")
const existsBar = $("header #header-option .option-mobile >i")
const filtered = $("section #showIteam .show-grid .Option-filter .filter .filter-sub")
const filterContnet =$("section #showIteam .show-grid .Option-filter .content-filter")
const overlayFilter = $("section #showIteam .show-grid .Option-filter .nav-overlay")
const filterApply = $("section #showIteam .show-grid .Option-filter .content-filter .filter-apply .sub-apply")

const contentText = $(".content-text")
const contentIteam = $$('.content-showIteam')
const showText = $(".show-text")
const back = $('.back-top')
console.log(back)

window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset > 100) {
    back.classList.add('back-style')
  }else{
    back.classList.remove('back-style')

  }
}
back.addEventListener('click',function(){
    // console.log('thien')
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    
})

navBar.addEventListener("click" , menuBar)
existsBar.addEventListener("click",unAcitve)
showText.addEventListener("click",showContent)
showText.addEventListener('click',showIteams)
filtered.addEventListener("click",listFilter)
filterApply.addEventListener("click",existsFilter)


// let isSuccesed = true

function menuBar(){
        overlay.classList.add("content-active")
        menu.classList.add("option-mobile_scrol")
     
    
}

function unAcitve(){
    overlay.onclick = function(){
        overlay.classList.remove("content-active")
        menu.classList.remove("option-mobile_scrol")
    }
    overlay.classList.remove("content-active")
    menu.classList.remove("option-mobile_scrol")
    
}

function listFilter(){
    
        filterContnet.classList.add("option-mobile_scrol")
        overlayFilter.classList.remove("content-unactive")
   
}

function existsFilter(){
    overlayFilter.onclick = function(){
        filterContnet.classList.remove("option-mobile_scrol")
        overlayFilter.classList.add("content-unactive")
    }
    filterContnet.classList.remove("option-mobile_scrol")
    overlayFilter.classList.add("content-unactive")
}

function showContent(){
    showText.classList.add('content-unactive')
    contentText.classList.add('text-height')

}

function showIteams(){
    for(let i = 0;i< contentIteam.length ; i++){
        console.log(contentIteam[i])
        contentIteam[i].classList.remove('content-showIteam')
    }
}