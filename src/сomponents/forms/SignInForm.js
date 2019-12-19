import React from 'react';
import EmailField from './../../сomponents/inputFields/Email';
import PasswordField from './../../сomponents/inputFields/Password';
import SubmitValues from './../../сomponents/inputFields/submit';

function SignUpForm() {
    return(
        <form>
            <EmailField />
            <PasswordField />
            <SubmitValues />
        </form>
    );
}
export default SignUpForm;