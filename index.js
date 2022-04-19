
// Declear buttons
const mainBTN= document.getElementById('main');
const addUserBTN= document.getElementById('add-user');
const doubleBTN = document.getElementById('double');
const showMillionersBTN= document.getElementById('show-millioners');
const sortBTN= document.getElementById('sort');
const calculateWealthBTN = document.getElementById('calculate-wealth'); 


let data = [];


// Fetch random users from API 
getRandomUser();


async function getRandomUser(){
  const res = await fetch("https://randomuser.me/api"); 
  const data = await res.json();
const user= data.results[0]; 

// Generating Users 
const newUser= {
  name:`${user.name.first} ${user.name.last}`, 
  money:Math.floor(Math.random()*1000000)
};

console.log(newUser);
addData(newUser);
}
// // Add new obj to Data Array ( by using push Method)
function addData(obj){
  data.push(obj);
updateDOM()
}

// Doubel Money function 
function doubleMoney(){
  data= data.map((user)=>{
    //(using spread oprator to copy all data we have in user obj line 50 /
    return { ...user, money: user.money * 2}
  }); 
  //   call updateDom() inorder to change 
  updateDOM()
}


// // Updating DOM
function updateDOM(providedData = data){
  // Clear main div 
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>"; 

  providedData.forEach(item => {
    const elemnt = document.createElement("div");
    elemnt.classList.add("person");
    elemnt.innerHTML =`<strong>${item.name}</strong>${formatMoney(item.money)}`;
    main.appendChild(elemnt); 
  }); 

}

// Format number to the money ( as currency) (https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string)

function formatMoney(num){
  return "$ "+ num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

}

// Add Event Listeners ( click & function )
addUserBTN.addEventListener('click', getRandomUser); 
doubleBTN.addEventListener('click', doubleMoney); 
sortBTN.addEventListener('click',sort); 