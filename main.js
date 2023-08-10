const form = document.querySelector("form")
const password1 = document.getElementById("pass")
const password2 = document.getElementById("confirm-pass")
const error = document.getElementById("password-error")

error.style.visibility = "hidden"

form.addEventListener("submit", () => {
    if(password1.value !== password2.value) {
        error.style.visibility = "visible"
        password1.style.outline = "1px solid red"
        password2.style.outline = "1px solid red"
    }
})