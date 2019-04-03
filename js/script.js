const menuButton = document.querySelector(".buttonMenuBox"),
      menuBox = document.querySelector(".mainNav"),
      menuItem = document.querySelectorAll(".mainNavList__item"),
      mainNavList = document.querySelector(".mainNavList");



menuButton.addEventListener("click", ()=>{
    if (menuBox.classList.contains('hidenMD')){
        menuBox.classList.remove('hidenMD');
    } else {
        menuBox.classList.add("hidenMD");      
    }
});