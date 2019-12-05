const $filmsList = JSON.parse(localStorage.getItem("filmsList"));


$.ajax({
    url: "data/users.json",
  }).done(function(data) {
    localStorage.setItem("users", JSON.stringify(data));
    const $usersList = JSON.parse(localStorage.getItem("users"));
    createUsersTable($usersList);
  }).fail(function() {
    console.log("fail");
  });

function createFilmsTable(obj){
    const $filmTable = $(".filmsTableBody");
    for (let key in obj){
        let $oneFilmInTable = $("<tr/>"); 
        $oneFilmInTable.append($(`<td>${obj[key]["title"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["description"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["img"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["section"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["startDate"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["endDate"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["ticketPrice"]}</td>`));
        $oneFilmInTable.append($(`<td>${obj[key]["tags"]}</td>`));
        $filmTable.append($oneFilmInTable);
    }
}

function createUsersTable(obj){
    const $userTable = $(".usersTableBody");
    for (let key in obj){
        let $oneUserInTable = $("<tr/>"); 
        $oneUserInTable.append($(`<td>${obj[key]["id"]}</td>`));
        $oneUserInTable.append($(`<td>${obj[key]["email"]}</td>`));
        $oneUserInTable.append($(`<td>${obj[key]["password"]}</td>`));
        $oneUserInTable.append($(`<td>${obj[key]["firstName"]}</td>`));
        $oneUserInTable.append($(`<td>${obj[key]["lastName"]}</td>`));
        $oneUserInTable.append($(`<td>${obj[key]["deleteRequest"]}</td>`));
        $userTable.append($oneUserInTable);
    }
}

//createUsersTable($usersList);
createFilmsTable($filmsList);