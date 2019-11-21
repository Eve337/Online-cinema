const yourTicketsButt = document.querySelector("tickButton");
const profileButton = document.querySelector("profileButton");
const profileFilmTable = document.querySelector("profileFilmTable");
const profileForm = document.querySelector("profileForm");

yourTicketsButt.addEventListener("click", function () {
    if (profileFilmTable.classList.contains("DisabledSection")) {
        profileFilmTable.classList.remove("DisabledSection");
        profileForm.classList.add("DisabledSection");
    }
});

profileButton.addEventListener("click", function () {
    if (
        profileForm.classList.contains("DisabledSection")) {
        profileForm.classList.remove("DisabledSection");
        profileFilmTable.classList.add("DisabledSection");
    }
});