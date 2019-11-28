const mainField = document.getElementById("mainField");
for (let i = 0; i < 9; i++) {
    let oneRow = document.createElement("div");
    oneRow.classList.add("row");
    mainField.append(oneRow);
    for (let j = 0; j < 10; j++) {
        let oneCell = document.createElement("BUTTON");
        oneCell.classList.add("onePlace", "btn");
        oneRow.append(oneCell);
    }
}

mainField.addEventListener("click", checker);

function checker(event) {
    console.log(event.target);
    if (event.target.classList.contains("onePlace"))
        if (event.target.classList.contains("actives")) {
            event.target.classList.remove("actives");
        } else {
            event.target.classList.add("actives");
        }



}