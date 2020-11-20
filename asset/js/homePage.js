const statisticalProject = document.querySelector(".statistical__project span");
const statisticalClient = document.querySelector(".statistical__client span");
const statisticalCup = document.querySelector(".statistical__cup span");
const statisticalPerson = document.querySelector(".statistical__person span");
const groupBrand = document.getElementById('group-brand');
let count = 1;
let theFirst = true;

if (theFirst && window.pageYOffset >= 1550) {
  theFirst = false;
  for (let i = 0; i < 1750; i++) {
    setTimeout(() => (statisticalProject.innerHTML = i), 600);
  }
  for (let i = 0; i < 6784; i++) {
    setTimeout(() => (statisticalClient.innerHTML = i), 600);
  }
  for (let i = 0; i < 2536; i++) {
    setTimeout(() => (statisticalCup.innerHTML = i), 600);
  }
  for (let i = 0; i < 444; i++) {
    setTimeout(() => (statisticalPerson.innerHTML = i), 600);
  }
}

const countNumber = () => {
  if (theFirst && window.pageYOffset >= 1550) {
    theFirst = false;
    for (let i = 0; i < 1750; i++) {
      setTimeout(() => (statisticalProject.innerHTML = i), 600);
    }
    for (let i = 0; i < 6784; i++) {
      setTimeout(() => (statisticalClient.innerHTML = i), 600);
    }
    for (let i = 0; i < 2536; i++) {
      setTimeout(() => (statisticalCup.innerHTML = i), 600);
    }
    for (let i = 0; i < 444; i++) {
      setTimeout(() => (statisticalPerson.innerHTML = i), 600);
    }
  }
};

function openTab(evt, cityName, index) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(cityName).style.display = "flex";
  tablinks[index - 1].classList.add("active");
}

setInterval(() => {
  if(count === 7) {
    count = 0;
  }
  
  wid = count*220 -1320 + 'px';
  groupBrand.style.transform = `translate3d(${wid}, 0px, 0px)`;
  count++
}, 2000);

document.addEventListener("scroll", countNumber);
