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



// // Close button closes the dialog box
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });