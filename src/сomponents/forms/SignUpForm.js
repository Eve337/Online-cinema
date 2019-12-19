import React from 'react';
import FirstName from '../inputFields/FirstName';
import LastName from '../inputFields/LastName';
import EmailField from './../../сomponents/inputFields/Email';
import PasswordField from './../../сomponents/inputFields/Password';
import SubmitValues from './../../сomponents/inputFields/submit';

function SignUpForm() {
    return(
        <form>
            <FirstName />
            <LastName />
            <EmailField />
            <PasswordField />
            <SubmitValues />
        </form>
    );
}
export default SignUpForm;