import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { authAction } from '../../store/actions/authAction';
import { useDispatch } from 'react-redux';
import {
    FormContainer,
    PasswordSignInContainer,
    UsernameSignInInputContainer,
    StepLoginContainer,
    UserIconLogin, PasswordIconLogin
} from '../../style/Login'
import { SignInButton } from '../../style/Buttons'


export const SignIn = ({ newEmail }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState(newEmail);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = e => {
        setEmail(e.currentTarget.value);
    }

    const handlePassword = e => {
        setPassword(e.currentTarget.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        localStorage.removeItem('token');
        const authResponse = await dispatch(authAction(email, password));
        //TODO debbug the part where the user tried a wrong password and try again, but fails even with the right credentials
        if (authResponse.access) {
            history.push('/user/profile');
        } else if (authResponse.detail) {
            setMessage(authResponse.detail)
        }
    }

    return (<>
        <StepLoginContainer>
            <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
                <FormContainer>
                    <UsernameSignInInputContainer>
                        <UserIconLogin><i className="fas fa-user"></i></UserIconLogin>
                        <input type="text" id="user" name="user" value={email} onChange={handleEmail} placeholder="Username"></input>
                    </UsernameSignInInputContainer>
                    <PasswordSignInContainer>
                        <PasswordIconLogin><i className="fas fa-lock"></i></PasswordIconLogin>
                        <input type="password" id="password" name="password" value={password} onChange={handlePassword} placeholder="Password"></input>
                    </PasswordSignInContainer>
                    {<p>{message}</p>}
                </FormContainer>
                <SignInButton id="submit" type="submit" value="Sign In">SIGN IN</SignInButton>
            </form>
        </StepLoginContainer>
    </>)
}
