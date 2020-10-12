const statisticalProject = document.querySelector('.statistical__project span');
const statisticalClient = document.querySelector('.statistical__client span');
const statisticalCup = document.querySelector('.statistical__cup span');
const statisticalPerson = document.querySelector('.statistical__person span');
let theFirst = true;


if (theFirst && window.pageYOffset >= 1550) {
  theFirst = false;
  for(let i = 0; i < 1750;i++) {
    setTimeout( () => statisticalProject.innerHTML = i,600);
  }
  for(let i = 0; i < 6784;i++) {
    setTimeout( () => statisticalClient.innerHTML = i,600);
  }
  for(let i = 0; i < 2536;i++) {
    setTimeout( () => statisticalCup.innerHTML = i,600);
  }
  for(let i = 0; i < 444;i++) {
    setTimeout( () => statisticalPerson.innerHTML = i,600);
  }
}

const countNumber = () => {
  console.log('object')
  if (theFirst && window.pageYOffset >= 1550) {
    theFirst = false;
    for(let i = 0; i < 1750;i++) {
      setTimeout( () => statisticalProject.innerHTML = i,600);
    }
    for(let i = 0; i < 6784;i++) {
      setTimeout( () => statisticalClient.innerHTML = i,600);
    }
    for(let i = 0; i < 2536;i++) {
      setTimeout( () => statisticalCup.innerHTML = i,600);
    }
    for(let i = 0; i < 444;i++) {
      setTimeout( () => statisticalPerson.innerHTML = i,600);
    }
	}
};

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener('scroll', countNumber);
