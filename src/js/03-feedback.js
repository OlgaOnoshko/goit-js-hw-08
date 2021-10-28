import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const email = document.querySelector(".feedback-form input")
const message = document.querySelector(".feedback-form textarea")

const formData = { email: "", message: ""}
const STORAGEKEY = "feedback-form-state"

form.addEventListener("submit", onFormSubmit)
form.addEventListener("input", throttle(onFormInput, 500))

fillTextArea()

function onFormInput(evt) {
    // formData[evt.target.name] = evt.target.value;
    formData.email = email.value
    formData.message = message.value
    localStorage.setItem("STORAGEKEY", JSON.stringify(formData))
    // console.log(formData)
}

function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("STORAGEKEY")
    console.log(formData)
}

function fillTextArea() {
    const savedMessage = JSON.parse(localStorage.getItem("STORAGEKEY"))
    
    if (savedMessage) {
        // console.log(savedMessage)
        email.value = savedMessage.email
        message.value = savedMessage.message
    }
}

