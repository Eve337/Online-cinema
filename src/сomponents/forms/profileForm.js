import React from 'react';
import FirstName from '../inputFields/FirstName';
import LastName from '../inputFields/LastName';
import DeleteRequest from '../inputFields/deleteRequest';
function ProfileForm(){
    return (
        <div className="form-container profileForm" >
        <form className="newUserValues">
            <FirstName />
            <LastName />
            <DeleteRequest />
        </form>
        </div>
        );
}

export default ProfileForm;
