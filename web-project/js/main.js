const navBar = document.querySelector( "header #header-option .option-bar i")
const menu = document.querySelector("header #header-option .option-mobile")
const overlay = document.querySelector("header #header-option .nav-overlay")
const existsBar = document.querySelector("header #header-option .option-mobile >i")
const filtered = document.querySelector("section #showIteam .show-grid .Option-filter .filter .filter-sub")
const filterContnet =document.querySelector("section #showIteam .show-grid .Option-filter .content-filter")
const overlayFilter = document.querySelector("section #showIteam .show-grid .Option-filter .nav-overlay")
const filterApply = document.querySelector("section #showIteam .show-grid .Option-filter .content-filter .filter-apply .sub-apply")

console.log(filterApply)


navBar.addEventListener("click" , menuBar)
existsBar.addEventListener("click",unAcitve)
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
