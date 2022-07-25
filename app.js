// Declear buttons
const main = document.getElementById('main');
const addUserBTN = document.getElementById('add-user');
const doubleBTN = document.getElementById('double');
const showMillionersBTN = document.getElementById('show-millioners');
const sortBTN = document.getElementById('sort');
const calculateWealthBTN = document.getElementById('calculate-wealth');


let data = [];
getRandomUser();
getRandomUser();
getRandomUser();

// fetch random User and add money 
async function getRandomUser(){
  const res = await fetch("https://randomuser.me/api")
  const data= await res.json();

  const user= data.results[0];

  // Generating Users 
  const newUser ={
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random()*1000000)
  };
 
 addData(newUser);
}

// Dobel Money
function doubleMoney(){
  data = data.map(function(user){
    return {...user, money: user.money * 2}
  }
  )
  updateDOM()
}

// Sort By Richest
// sort(a,b) for ascending and (b-a) for descending
function sortByRichest(){
  data.sort(function(a,b){
return b.money - a.money
// In Array Function method 
/*
data.sort((a,b) => b.money - a.money);
*/ 
  })
  updateDOM()
}

// Filter Millioners
function showMillioners(){
  data= data.filter(function(user){
    return user.money>1000000
    // In Array Function method
    /*
    data= data.filter(user=>user.money>1000000)
    */ 
  })
  updateDOM()
}


// Calculate wealth 
function calculateWealth(){
  const wealth= data.reduce((acc,user)=>(acc+ user.money),0);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML= `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj){
  data.push(obj);

  updateDOM();
}
// Update DOM
function updateDOM(provideData= data){
  main.innerHTML =' <h3><strong>Person</strong>Wealth</h3>';

  provideData.forEach(item => {
    const element= document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;


    main.appendChild(element)
  });
  
}

// Format number as Money
// https://www.codegrepper.com/code-examples/javascript/javascript+convert+string+to+currency+format
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};


// All EventListeners
addUserBTN.addEventListener('click', getRandomUser);
doubleBTN.addEventListener('click', doubleMoney);
sortBTN .addEventListener('click', sortByRichest);
showMillionersBTN.addEventListener('click', showMillioners);
calculateWealthBTN.addEventListener('click', calculateWealth);


