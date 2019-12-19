import React from 'react';
import SignIn from '../../сomponents/buttons/signIn';
import SignUp from '../../сomponents/buttons/signUp';
import SignUpForm from './../../сomponents/forms/SignUpForm';
import SignInForm from './../../сomponents/forms/SignInForm';

import './RegisterFormStyles.css';

function RegisterPage(){
    return(
        <div className="container mainForm buttons">
            <div class="form-item">
                <SignIn />
                <SignUp />
            </div>
            <SignUpForm />
            <SignInForm />
        </div>
    );
}

export default RegisterPage;