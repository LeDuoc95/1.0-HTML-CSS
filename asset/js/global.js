window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const body = document.querySelectorAll("body");
    const headerWapper = document.getElementById("header-wapper");
    const getAllTagOfMenu = document.getElementsByClassName("header-content__menu-tag");
    const getAllTagOfMenuIcon = document.getElementsByClassName("silde-bar-content__menu-tag");
    const lengthOfGetAllTagOfMenu = getAllTagOfMenu.length;
    const menuIcon = document.getElementById("js-menu-icon");
    const hambergerTop = document.getElementsByClassName("hamberger__bar--top");
    const hambergerMid = document.getElementsByClassName("hamberger__bar");
    const hambergerBottom = document.getElementsByClassName("hamberger__bar--bottom");
    const sildeBarWapper = document.getElementsByClassName("silde-bar-wapper");
    const sildeBarContentMenu = document.getElementsByClassName("silde-bar-content__menu");
    let openSlideMenu = false;

    if (!localStorage.getItem("page")) {
      localStorage.setItem("page", "0");
      getAllTagOfMenu[0].classList.add("color-light-bule");
      getAllTagOfMenuIcon[0].classList.add("color-light-bule");
    } else {
      getAllTagOfMenu[parseInt(localStorage.getItem("page"))].classList.add("color-light-bule");
      if (getAllTagOfMenuIcon[parseInt(localStorage.getItem("page"))]) getAllTagOfMenuIcon[parseInt(localStorage.getItem("page"))].classList.add("color-light-bule");
    }

    for (let i = 0; i < lengthOfGetAllTagOfMenu; i++) {
      getAllTagOfMenu[i].addEventListener("click", () => {
        localStorage.setItem("page", `${i}`);
      });
    }

    const handleClickMenuIcon = () => {
      if (!openSlideMenu) {
        body[0].style.overflowY = "hidden";
        headerWapper.classList.remove("position-sticky");
        sildeBarWapper[0].style.display = "block";
        hambergerTop[0].classList.add("hamberger-before");
        hambergerBottom[0].classList.add("hamberger-after");
        hambergerMid[0].style.display = "none";
        setTimeout(function () {
          sildeBarContentMenu[0].classList.add("disappear-menu");
        }, 1);
        openSlideMenu = !openSlideMenu;
      } else {
        body[0].style.overflowY = "auto";
        headerWapper.classList.add("position-sticky");
        hambergerTop[0].classList.remove("hamberger-before");
        hambergerBottom[0].classList.remove("hamberger-after");
        setTimeout(function () {
          hambergerMid[0].style.display = "flex";
          sildeBarWapper[0].style.display = "none";
        }, 400);
        sildeBarContentMenu[0].classList.remove("disappear-menu");
        openSlideMenu = !openSlideMenu;
      }
    };

    menuIcon.addEventListener("click", handleClickMenuIcon);
  },
  false
);
