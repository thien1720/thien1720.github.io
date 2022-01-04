let menuBar =document.querySelector("header .header .bar")
let listMenu =document.querySelector("header .header .menu ul ")
let exsisMenu = document.querySelector("header .header .menu ul li:first-child")
console.log(listMenu)


menuBar.addEventListener("click", function(){
    listMenu.style.transform ="translateX(0)"
        

})
exsisMenu.addEventListener("click", function(){
    listMenu.style.transform ="translateX(-247px)"
    // listMenu.remove("menu-style")

})
