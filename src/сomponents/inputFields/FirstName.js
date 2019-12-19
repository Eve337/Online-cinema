import React from 'react';

function FirstName() {
    return(
        <div className="container form-item" id="FirstNameField">
                 <label for="FirstName">New First Name</label>
                <input type="text" className="form-control FirstName" placeholder="FirstName" value="Lupa"></input>
        </div>
    );
}

export default FirstName;