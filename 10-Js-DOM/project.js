//1. Yöntem: const button = document.querySelector("button");
//2. Yöntem: const button = document.querySelector("#buttonId");
//3. Yöntem const button = document.querySelector(".buttonClass");
//4.Yöntem: const button = document.getElementsByClassName("buttonClass")[0];
const button = document.getElementById("buttonId");

// İlk Yöntem
// button.addEventListener("click", () => {
//   console.log("TIKLANDI");
// });

//2. Yöntem
function add() {
  console.log("Tıklandı");
}
console.log(button);

const liElemanlari = document.querySelectorAll("li");
console.log(liElemanlari);

liElemanlari.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.color = "blue";
    // console.log("TIKLANDI");
  });
});

const ulDegerleri = document.querySelector("ul");

console.log(ulDegerleri);
// ulDegerleri.remove();

liElemanlari.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    e.target.remove();
  });
});

const liElemanim = document.createElement("li");
liElemanim.textContent = "Javascript";
// append sona eleman ekler
// prepend başa eleman ekler

button.addEventListener("click", (e) => {
  const liElemanim = document.createElement("li");
  liElemanim.textContent = "Javascript";
  ulDegerleri.append(liElemanim);
  ulDegerleri.prepend(liElemanim);
});
