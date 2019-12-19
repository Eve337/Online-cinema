import React from 'react';

function LastName() {
    return(
        <div className="container form-item" id="LastNameField">
                <label for="LastName">New Last Name</label>
                <input type="text" className="form-control LastName" placeholder="LastName" value="Pupa"></input>
        </div>
    );
}

export default LastName;