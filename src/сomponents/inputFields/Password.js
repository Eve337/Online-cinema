import React from 'react';

function PasswordField(){
    return(
        <div class="container form-item" id="PasswordField">
                    <label for="formGroupExampleInput">Password</label>
                    <input type="password" class="form-control" placeholder="Password" name="pass" required></input>
        </div>
    );
}
export default PasswordField;