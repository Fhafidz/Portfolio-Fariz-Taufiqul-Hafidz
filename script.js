function scrollToElement(elementSelector, instance = 0) {
  let elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

link2.addEventListener("click", () => {
  scrollToElement(".container", 1);
});

link3.addEventListener("click", () => {
  scrollToElement(".content");
});

btn1.addEventListener("click", () => {
  scrollToElement(".column");
});

btn2.addEventListener("click", () => {
  scrollToElement(".container", 1);
});
