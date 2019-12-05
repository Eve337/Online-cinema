localStorage.clear();
let dataUsers;
let dataFilms;

fetch('data/users.json')
    .then(response => response.json())
    .then(data => {
        dataUsers = data;
        return dataUsers;
    });

fetch('data/films.json')
    .then(response => response.json())
    .then(data => {
        dataFilms = data;
        localStorage.setItem('filmsList', JSON.stringify(dataFilms));
        return dataFilms;
    });

function formCheckerSignIN(form) {
    let loginValue = (form.elements.login.value);
    let emailValue = (form.elements.password.value);
    if (userCheckSignIN(dataUsers, loginValue, emailValue)) {
        if (loginValue === "admin@mail.ru") {
            form.action = "AdminPage.html";
        }
        getFilmList();
        return true;
    } else {
        return false;
    }

}

function userCheckSignIN(obj, log, pass) {
    let tagTrue = false;

    for (let key in obj) {
        if (obj[key]["email"] === log && obj[key]["password"] === pass) {
            tagTrue = true;
            localStorage.setItem('currentUser', JSON.stringify(obj[key]));
        } else {
            //handler invalid 
        }
    }
    return tagTrue;
}

function userCheckSignUP(obj, log) { //Сhecking the existence of an account with the same mail
    let tagTrue = true;
    for (let key in obj) {
        if (obj[key]["email"] === log) {
            console.log("This email already using");
            tagTrue = false;
        }
    }
    return tagTrue;
}

function formCheckerSignUP(form) {
    let newUserObj = {};
    let loginValue = (form.elements.email.value);
    let userCheckSignUp = userCheckSignUP(dataUsers, loginValue);

    if (userCheckSignUp) {
        const objer = dataUsers;

        newUserObj.id = Object.keys(objer).length + 1;
        newUserObj.email = form.elements.email.value;
        newUserObj.password = form.elements.pass.value;
        newUserObj.admin = false;
        newUserObj.firstName = form.elements.fname.value;
        newUserObj.lastName = form.elements.lname.value;

        localStorage.setItem('currentUser', JSON.stringify(newUserObj));
        return true;

    } else {
        return false;
    }
}