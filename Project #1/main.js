const learnbut = document.querySelector(".learnbtn");
const btnlinked = document.querySelector(".btnlI");
const btnGitH = document.querySelector(".btnGH");
const btnlinked2 = document.querySelector(".btnlI2");
const btnInsta = document.querySelector(".btnI");
const submitbtn = document.querySelector("#submit");
const responce = document.querySelector(".resp");
const h = document.documentElement.clientHeight;
learnbut.addEventListener("click", function () {
  window.scrollBy(0, h);
});
btnlinked.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/vishal-j-m-a453b0211", "_blank");
});
btnGitH.addEventListener("click", function () {
  window.open("https://github.com/vishal775", "_blank");
});
btnlinked2.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/ramanan-m-108886204", "_blank");
});
btnInsta.addEventListener("click", function () {
  window.open(
    "https://instagram.com/ramanan_manikantan?igshid=YmMyMTA2M2Y=",
    "_blank"
  );
});
submitbtn.addEventListener("click", function () {
  responce.classList.remove("hidden");
  let msg = document.querySelector("#email").value;
  let final = responce.textContent + msg;
  responce.innerHTML = final;
  document.querySelector("#email").value = "";
});
