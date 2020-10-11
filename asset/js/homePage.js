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


document.addEventListener('scroll', countNumber);
