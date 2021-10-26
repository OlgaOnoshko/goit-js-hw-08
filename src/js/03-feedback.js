import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const email = document.querySelector(".feedback-form input")
const message = document.querySelector(".feedback-form textarea")

const formData = {}
const STORAGEKEY = "feedback-form-state"


form.addEventListener("submit", onFormSubmit)
form.addEventListener("input", throttle(onFormInput, 500))

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("STORAGEKEY", JSON.stringify(formData))
}

fillTextArea()

function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("STORAGEKEY")
    console.log(formData)
}

function fillTextArea() {
    const savedMessage = JSON.parse(localStorage.getItem("STORAGEKEY"))
    console.log(savedMessage)

    if (savedMessage) {
        console.log(savedMessage)
        email.value = savedMessage.email
        message.value = savedMessage.message
    }
}

// email.addEventListener("input", onEmailInput)
// message.addEventListener("input", throttle(onMessageInput, 500))
// message.addEventListener("input", onMessageInput)

// const STORAGEKEY = "input-message"
// function onMessageInput(evt) {
//     const messageText = evt.target.value
//     console.log(messageText)

//     localStorage.setItem("STORAGEKEY", messageText)
// }