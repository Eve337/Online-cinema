const mainField = document.getElementById("mainField");
for (let i = 0; i < 9; i++){
    let oneRow = document.createElement("div");
    oneRow.classList.add("row");
    mainField.append(oneRow);
    for (let j = 0; j < 9; j++){
        let oneCell = document.createElement("BUTTON");
        oneCell.classList.add("onePlace", "btn");
        oneRow.append(oneCell);
    }
}
