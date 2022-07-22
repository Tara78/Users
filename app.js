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
  const res= await fetch('https://randomuser.me/api')
  const data= await res.json();

  const user= data.results[0];

  const newUser ={
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random()*1000)
  };
 addData(newUser);
}

// Add new obj to data arr
function addData(obj){
  data.push(obj);
}