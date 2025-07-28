// What is DOM
// Document Object Model(Tree like object structure)

// 4 Pillars of DOM

// a. Selecting of an Element
// b. Changing HTML
// c. Changing CSS
// d. Event Listener

// Selecting HTML Element

// querySelector without id & class
const h1Element = document.querySelector("h1");

// querySelector with class
const paragraphElement = document.querySelector(".para");

// querySelector with Id
const buttonElement = document.querySelector("#btn");

///////////////////////////////

// Changing HTML

console.log(h1Element.textContent); // Selecting HTMLElement

console.log(h1Element.innerHTML); // Selecting <span style="visibility: hidden">HTML</span>Element

console.log(h1Element.innerText); // Selecting Element

// innerHTML(is se hum is ka HTML bhi change kar sakte hai)
paragraphElement.innerHTML = "Changing paragraph text with DOM";

// innerText(is se hum text ki visibility hidden karden to text dikha ga nahi)
buttonElement.textContent = "Change";

////////////////////////////////////

// Changing CSS

h1Element.style.backgroundColor = "red";

paragraphElement.style.color = "green";

buttonElement.style.fontSize = "30px";

// Note: JS DOM mein CSS property ko camelCase mein likhte hain background-color and font-size

//////////////////////////////////////

// EventListener

buttonElement.addEventListener("click", function () {
  h1Element.style.color = "blue";
  paragraphElement.style.backgroundColor = "brown";
  paragraphElement.style.color = "#fff";
  buttonElement.style.border = "10px solid pink";
});

/////////////////////////////

// Selecting multiple element

// Yahan hum multiple elements ko aik saath select kar rahe hain(h6 ko)
const allH6 = document.querySelectorAll("h6");

allH6.forEach(function (item) {
  item.style.color = "red";
  console.log(item);
});
