let getMenuBar=document.querySelector('.menu-listBar');
let getExies =document.querySelector('.menu-nav-exis')
let getListMenu =document.querySelector('.menu-list-nav')
console.log(getListMenu)


getMenuBar.onclick = function() {
    console.log('ạkslfj')
    // let getListMenu =document.querySelector('.menu-list-nav')

    // console.log(getListMenu)
    getListMenu.classList.add('menu-list-navStyle');
    
}
getExies.onclick = function() {
    console.log('ạkslfj')
    // let getListMenu =document.querySelector('.menu-list-nav')

    // console.log(getListMenu)
    getListMenu.classList.remove('menu-list-navStyle');
    
}