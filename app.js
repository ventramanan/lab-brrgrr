// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese =document.querySelector("#cheese");
  if(state.Cheese) {
    cheese.style.display ="inherit";
  }else{
    cheese.style.display ="none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes =document.querySelector("#tomato");
  if(state.Tomatoes) {
    tomatoes.style.display ="inherit";
  }else{
    tomatoes.style.display ="none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions =document.querySelector("#onion");
  if(state.Onions) {
    onions.style.display ="inherit";
  }else{
    onions.style.display ="none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce =document.querySelector("#lettuce");
  if(state.Lettuce) {
    lettuce.style.display ="inherit";
  }else{
    lettuce.style.display ="none";
  }
}
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick =function () {
  state.Cheese =!state.Cheese;
  renderAll();
}
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick =function () {
  state.Tomatoes =!state.Tomatoes;
  renderAll();
}
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick =function () {
  state.Onions =!state.Onions;
  renderAll();
}
// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick =function () {
  state.Lettuce =!state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
var Pattybtn =document.querySelector(".btn-patty");
var Cheesebtn=document.querySelector(".btn-cheese");
var Tomatobtn =document.querySelector(".btn-tomatoes");
var Onionbtn=document.querySelector(".btn-onions");
var Lettucebtn=document.querySelector(".btn-lettuce");

function  renderButtons (){
  if(state.Patty){
    Pattybtn.classList.add("active")
  }
  else{
    Pattybtn.classList.remove("active")

  }
  if(state.Cheese){
    Cheesebtn.classList.add("active")
  }
  else{
    Cheesebtn.classList.remove("active")

  }
  if(state.Tomatoes){
    Tomatobtn.classList.add("active")
  }
  else{
    Tomatobtn.classList.remove("active")

  }
  if(state.Onions){
    Onionbtn.classList.add("active")
  }
  else{
    Onionbtn.classList.remove("active")

  }

  if(state.Lettuce){
    Lettucebtn.classList.add("active")
  }
  else{
    Lettucebtn.classList.remove("active")

  }
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
var bt=document.querySelectorAll(".items")
function renderIngredientsBoard()
{
  if(state.Patty){
    bt[0].textContent="patty"
  }

  else{
    bt[0].textContent=" "
 }

  if(state.Cheese){
    bt[1].textContent="cheese"
  }

  else{
    bt[1].textContent=" "
 }

  if(state.Tomatoes){
    bt[2].textContent="Tomatoes"
  }

  else{
    bt[2].textContent=" "
 }
 if(state.Onions){
  bt[3].textContent="Onions"
}

else{
  bt[3].textContent=" "
}
if(state.Lettuce){
  bt[4].textContent="Lettuce"
}

else{
  bt[4].textContent=" "
}
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var cost =document.querySelector(".price-details");
function renderPrice (){
  var totalprice=10
  if(state.Patty){
    totalprice = totalprice + ingredients.Patty
  }
  if(state.Cheese){
    totalprice=totalprice+ingredients.Cheese
  }
  if(state.Tomatoes){
    totalprice=totalprice+ingredients.Tomatoes
  }
  if(state.Onions){
    totalprice=totalprice+ingredients.Onions
  }
  if(state.Lettuce){
    totalprice=totalprice+ingredients.Lettuce
  }
  cost.textContent = "INR" + totalprice
}
