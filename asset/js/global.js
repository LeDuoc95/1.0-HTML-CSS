window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const getAllTagOfMenu = document.getElementsByClassName("header-content__menu-tag");
    const lengthOfGetAllTagOfMenu = getAllTagOfMenu.length;
    const MenuIcon = document.getElementById("js-menu-icon");
    const hambergerTop = document.getElementsByClassName('hamberger__bar--top');
    const hambergerMid = document.getElementsByClassName('hamberger__bar');
    const hambergerBottom = document.getElementsByClassName('hamberger__bar--bottom');

    let openSlideMenu = false;


    if (!localStorage.getItem("page")) {
      localStorage.setItem("page", "0");
      getAllTagOfMenu[0].classList.add("color-light-bule");
    } else {
      getAllTagOfMenu[parseInt(localStorage.getItem("page"))].classList.add("color-light-bule");
    }

    for (let i = 0; i < lengthOfGetAllTagOfMenu; i++) {
      getAllTagOfMenu[i].addEventListener("click", () => {
        localStorage.setItem("page", `${i}`);
      });
    }

    MenuIcon.addEventListener("click", () => {
      if(!openSlideMenu) {
        hambergerTop[0].classList.add('hamberger-before');
        hambergerBottom[0].classList.add('hamberger-after');
        hambergerMid[0].style.display = 'none'
        openSlideMenu = !openSlideMenu;
      }else {
        hambergerTop[0].classList.remove('hamberger-before');
        hambergerBottom[0].classList.remove('hamberger-after');
        openSlideMenu = !openSlideMenu;
        hambergerMid[0].style.display = 'flex'
      }
      console.log("object");
    });
  },
  false
);
