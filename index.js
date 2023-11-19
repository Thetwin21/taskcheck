const inputElement = document.getElementById("input_field");
const inputDate = document.getElementById("date_input");
const ulcontainer = document.getElementById("container");
const liElement = document.createElement("li");
const check = document.getElementById('check')
const spanElement = document.createElement("span");
const buttonElement = document.createElement("button");
buttonElement.innerText = "delete";



let items_array = [];

// let inputValue;
let acceptData = () => {
  items_array.push({
    inputValue: inputElement.value,
    inputDate: inputDate.value
  })
  localStorage.setItem("data", JSON.stringify(items_array))
}

// reset form values 
let resetForm = () => {
  inputElement.value = "",
   inputDate.value = ""
}

// creating new tasks

let createTask = () => {
  // ulcontainer.innerHTML = ""
  items_array.map((items, index)=> {
    return(
    ulcontainer.innerHTML += `
    <li id=${index}><div><span>${items.inputValue}</span><span> ${items.inputDate ? items.inputDate : "No date was added" }</span></div><div><button onclick="deleteItem(this)">
    <img src="bin.png" alt=""></i></button><button onclick="checked(this)">
  
    <img src="checked.png" alt=""></button></div></li>`
  )
  })
}

// submitting new task
function addItemsFunc() {
  if(inputElement.value === ""){
    check.innerText = "value cannot be empty"
  }else{
    acceptData()
  check.innerText = "";
 
}
resetForm()
}

const addItems = () => {
    addItemsFunc();
};
let deleteItem = (e) => {
 e.parentElement.parentElement.remove();

 items_array.splice(e.parentElement.parentElement.id, 1)
 localStorage.setItem("data", JSON.stringify(items_array))
}
let checked = (e) => {
  e.parentElement.parentElement.classList.toggle("checked")
}

(() => {
  items_array = JSON.parse(localStorage.getItem("data")) || [];
  console.log(items_array);
  createTask()
})();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission prevented!");
});
