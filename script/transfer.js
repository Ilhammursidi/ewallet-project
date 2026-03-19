const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const nextButton = document.getElementById("next")
const success = document.getElementById("success")
const toFailed = document.getElementById("transfer")
const error = document.getElementById("error")
// const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

nextButton.addEventListener("click",()=>{
    success.showModal()
})

toFailed.addEventListener("click",()=> {
    error.showModal()
})

function toggleSidebar() {
    const nav = document.querySelector(".navbar");
    const burger = document.querySelector(".hamburger");

    nav.classList.toggle("show");

    burger.textContent = nav.classList.contains("show") ? "✖" : "☰";
}


