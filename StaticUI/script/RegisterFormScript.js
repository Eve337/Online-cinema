const formUp = document.getElementById("FormSignUP");
const formIn = document.getElementById("FormSignIN");
const SignUpButton = document.getElementById('SignUp');
const SignInButton = document.getElementById('SignIn');

SignUpButton.addEventListener("click", function () {
    if (formUp.classList.contains("DisabledSection")) {
        formUp.classList.remove("DisabledSection");
        formIn.classList.add("DisabledSection");
    }
});


SignInButton.addEventListener("click", function () {
    if (formIn.classList.contains("DisabledSection")) {
        formIn.classList.remove("DisabledSection");
        formUp.classList.add("DisabledSection");
    }
});
