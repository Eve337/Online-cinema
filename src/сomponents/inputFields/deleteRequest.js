import React from 'react';

function DeleteRequest() {
    return(
        <div className="container form-item" id="DeleteRequest">
                <label for="delRequest">Delete Request</label>
                <input type="checkbox" className="delRequest"></input>
        </div>
    );
}

export default DeleteRequest;