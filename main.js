
let errors = document.getElementsByClassName("p-error")
let icons = document.getElementsByClassName("icon-error")
let btn = document.getElementById("btn-submit")


function validation() {
    checkName()
    checkLastName()
    checkEmail()
    checkPassword()
}

btn.addEventListener("click", function (value) {
    value.preventDefault()
    validation()
});

function checkName() {
    let fname = document.getElementById("fname")
    let fnameValue = fname.value.trim()

    if (fnameValue === "") {
        errors[0].classList.add("show");
        icons[0].classList.add("visible");
        fname.classList.add("error-input")
        fname.placeholder = ""

    } else {
        errors[0].classList.remove("show");
        icons[0].classList.remove("visible");
        fname.classList.remove("error-input")
        fname.placeholder = "First Name"

    }
}

function checkLastName() {
    let lname = document.getElementById("lname")
    let lnameValue = lname.value.trim()

    if (lnameValue === "") {
        errors[1].classList.add("show");
        icons[1].classList.add("visible");
        lname.classList.add("error-input")
        lname.removeAttribute("placeholder");

    } else {
        errors[1].classList.remove("show");
        icons[1].classList.remove("visible");
        lname.classList.remove("error-input")
        lname.placeholder = "Last Name"
    }
}

function checkEmail() {
    let email = document.getElementById("email")
    let emailValue = email.value.trim()
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailValue === "") {
        errors[2].classList.add("show");
        icons[2].classList.add("visible");
        email.classList.add("error-input")
        email.placeholder = "email@example/com"

    } else {
        errors[2].classList.remove("show");
        icons[2].classList.remove("visible");
        email.classList.remove("error-input")
        email.placeholder = "Email Address"
    }
    if (emailValue.match(regex)) {
        errors[2].classList.remove("show");
        icons[2].classList.remove("visible");
        email.placeholder = "Email Address"
        email.classList.remove("error-input")
    } else {
        errors[2].classList.add("show");
        icons[2].classList.add("visible");
        email.classList.add("error-input")
    }
}

function checkPassword() {
    let password = document.getElementById("password")
    let passwordValue = password.value.trim()

    if (passwordValue === "") {
        errors[3].classList.add("show");
        icons[3].classList.add("visible");
        password.classList.add("error-input")
        password.placeholder = ""

    } else {
        errors[3].classList.remove("show");
        icons[3].classList.remove("visible");
        password.classList.remove("error-input")
        password.placeholder = "Password"
    }

    if (passwordValue.length < 6) {
        errors[3].classList.add("show");
        icons[3].classList.add("visible");
        password.classList.add("error-input")
        password.placeholder = ""

    } else {
        errors[3].classList.remove("show");
        icons[3].classList.remove("visible");
        password.classList.remove("error-input")
        password.placeholder = "Password"
    }
}