
let playerBtn = document.querySelectorAll(".control-btn");



for (btn of playerBtn) {
  btn.onclick = () => { console.log("I am clicked"); };
}