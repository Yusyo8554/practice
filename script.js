const button = document.getElementById("btn") // IDが "btn" の要素をHTMLから取得し、button という変数に入れる
const message = document.getElementById("message") // IDが "message" の要素をHTMLから取得し、message という変数に入れる
 
function ChangeColor(NewColor) {
  message.style.color = NewColor
}

let count = 0
const countDisplay = document.getElementById("count")

increment.addEventListener("click", () => {
  countDisplay.textContent = Number(countDisplay.textContent) + 1
})

reset.addEventListener("click", () => {
  countDisplay.textContent = 0
})

require('dotenv').config()

console/log(process.env.MY_NAME)
console.log(process.env.MY_SECRET)