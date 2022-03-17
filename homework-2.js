// Reaching the documents we use in the code..
const listDOM = document.querySelector("#list");
const userInput = document.querySelector("#task");
const button = document.querySelector("#liveToastBtn");
const liElements = document.querySelectorAll("li");
const liveToast = document.getElementById('liveToast');
const liveToastError = document.getElementById('liveToastError');
// To prevent the use of space at the beginning or multiple spaces without any letter
let regEx = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;




//Adds "x" (remove) button to the all available list elements
for (let i=0; i< liElements.length; i++) {
  liElements[i].innerHTML += `<button type="button" class="close" aria-label="Close" onclick="removeElement(this)">
  <span aria-hidden="true">&times;</span>
  </button>`

  //when clicked on, adds line-through on the list element with a tick before
  liElements[i].setAttribute("onclick", "checkButton(this)");
};

//When clicked on, adds the class "checked" to the specific list element
function checkButton(e) {
      e.classList.toggle("checked");
}



// Adds new element given by the user to the list 
function newElement() {
  if (userInput.value.match(regEx)) {
    const newListElement = document.createElement("li");
    newListElement.setAttribute("onclick", "checkButton(this)")
    newListElement.innerHTML = `${userInput.value} <button type="button" class="close" aria-label="Close" onclick="removeElement(this)">
    <span aria-hidden="true">&times;</span>
    </button>`;

    // Adds new li element inside the "ul"
    listDOM.appendChild(newListElement);

    // "Added to the list" notification
    let toast = new bootstrap.Toast(liveToast)
    toast.show()

    // Resets the input value entered
    userInput.value = "";

  }
  // "Not possible to add empty content" notification
  else {
    let toast = new bootstrap.Toast(liveToastError)
    toast.show()
  }
};



// Remove button
function removeElement(removebutton){
  removebutton.parentNode.parentNode.removeChild(removebutton.parentNode);
};