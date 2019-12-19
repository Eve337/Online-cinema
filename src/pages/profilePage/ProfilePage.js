import React from 'react';
import NavBar from '../../сomponents/header/header';
import ProfileForm from '../../сomponents/profileForm/profileForm';
import SubmitValues from '../../сomponents/submit/submit';
import Table1 from '../../сomponents/tables/profileTable';

function ProfilePage() {
    return(
        <div>
            <NavBar />
            <ProfileForm />
            <SubmitValues />
            <Table1 />
        </div>
    );
}
export default ProfilePage;