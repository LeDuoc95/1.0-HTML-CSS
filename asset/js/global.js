window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const getAllTagOfMenu = document.getElementsByClassName("header-content__menu-tag");
    const lengthOfGetAllTagOfMenu = getAllTagOfMenu.length;
    const MenuIcon = document.getElementById("js-menu-icon");

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
      console.log("object");
    });
  },
  false
);
