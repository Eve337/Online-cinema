import React from 'react';

function EmailField(){
    return(
        <div class="container form-item" id="EmaliField">
                    <label for="formGroupExampleInput">Email</label>
                    <input type="email" class="form-control" placeholder="Email" name="email" required></input>
        </div>
    );
}
export default EmailField;