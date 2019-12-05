const $getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));

function editUserValuesFunc (){
    console.log("success");
    $getCurrentUser.firstName = $(".changeFirstName").val();
    $getCurrentUser.lastName = $(".changeLastName").val();
    $getCurrentUser.deleteRequest = $(".delRequest").val();
    localStorage.setItem("currentUser",JSON.stringify($getCurrentUser));
    return true;
}


