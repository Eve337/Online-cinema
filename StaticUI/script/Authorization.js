const xhr = new XMLHttpRequest();
xhr.open('GET', 'data/users.json', true);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
    let responseObj = xhr.response;
    return responseObj;
};

function getFilmList() {
    xhr.open('GET', 'data/films.json', true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        localStorage.setItem('filmsList', JSON.stringify(xhr.response));
    };
}



function formCheckerSignIN(form) {
    let loginValue = (form.elements.login.value);
    let emailValue = (form.elements.password.value);
    return userCheckSignIN(xhr.response, loginValue, emailValue), getFilmList();
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
            //handler invalid
        }
    }
    return tagTrue;
}

function formCheckerSignUP(form) {
    let newUserObj = {};
    let loginValue = (form.elements.email.value);
    let userCheckSignUp = userCheckSignUP(xhr.response, loginValue);

    if (userCheckSignUp) {
        const objer = xhr.response;

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