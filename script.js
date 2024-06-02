// დავალება 1

let div = document.querySelector("#divContent");
let img = document.createElement("img");
let h2Title = document.createElement("h2");

div.classList.add("wraper");
img.setAttribute(
  "src",
  "https://images.hdqwalls.com/download/nissan-gt-r-nismo-rear-u6-2560x1700.jpg"
);
img.setAttribute("alt", "image");

h2Title.classList.add("title");
h2Title.textContent = "IMAGE TITLE";
h2Title.style.color = "red";
h2Title.style.fontSize = "30px";
img.style.width = "500px";

div.appendChild(h2Title);
div.appendChild(img);

// დავალება 2

let div2 = document.querySelectorAll(".div3");

for (let item of div2) {
  let pElement = document.createElement("p");
  pElement.classList.add("text");
  pElement.textContent = "HELLO";

  item.appendChild(pElement);
}
