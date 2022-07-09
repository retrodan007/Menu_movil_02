const menu_items  = document.querySelector(".menu-items");
const btn_menu    = document.querySelector(".btn-menu");
var open_menu_btn = false;


btn_menu.addEventListener("click", () => {

    if(open_menu_btn===false) {
        btn_menu.classList.add("active");
        menu_items.classList.add("active");
        open_menu_btn = true;
    }
    else {
        menu_items.classList.remove("active");
        btn_menu.classList.remove("active");
        open_menu_btn = false;
    }

}
)