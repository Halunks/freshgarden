import React, { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { regAction } from '../../store/actions/regAction';
import { valiAction } from '../../store/actions/valiAction';
import { useDispatch } from 'react-redux';
import { SignInButton, SignUpButton} from '../../style/Buttons'
import {
    FormWrapper,
    StepOneContainer,
    StepTwoContainer,
    StepThreeContainer,
    EmailSignUpContainer,
    EmailInputContainer,
    FirstnameInputContainer,
    LastnameInputContainer,
    PasswordInputContainer,
    PasswordRepeatInputContainer,
    UsernameInputContainer,
    ValidationCodeContainer,
    LayoutContainerLeft,
    LayoutContainerRight,
    LayoutContainerForm,
    EmailIconSignUp
} from '../../style/Login'
import congrats from '../../assets/svgs/logo.svg';
import { SignIn } from '../SignIn';
import { ReactComponent as StepOneIconSVG } from '../../assets/svgs/stepOne.svg';
import { ReactComponent as StepTwoIconSVG } from '../../assets/svgs/stepTwo.svg';
import { ReactComponent as StepThreeIconSVG } from '../../assets/svgs/stepThree.svg';
import useWindowDimensions from "../../hooks/useWindowDimensions";


export const SignUp = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [code, setCode] = useState('');
    const [validation, setValidation] = useState('');
    const [username, setUsername] = useState('INIT');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [registrationState, setRegistrationState] = useState('stepOne');
    const [string, setString] = useState('');
    const { height, width } = useWindowDimensions();

    // creates a random user ID with informational suffixes
    const stringGenerator = () => {
        console.log(history)
        setString(`${toString(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))}.${height}x${width}${"HISTORY"}.${username}`)
        console.log(string)
    }
    stringGenerator()

    const handleValidationCode = e => {
        setValidation(e.currentTarget.value);
    }
    const handleEmail = e => {
        setEmail(e.currentTarget.value);
    }
    const handleUsername = e => {
        setUsername(e.currentTarget.value);
    }
    const handleFirstName = e => {
        setFirstName(e.currentTarget.value);
    }
    const handleLastname = e => {
        setLastName(e.currentTarget.value);
    }
    const handlePassword = e => {
        setPassword(e.currentTarget.value);
    }
    const handlePasswordRepeat = e => {
        setPasswordRepeat(e.currentTarget.value);
    }

     const stepOneHandler = async e => {
        e.preventDefault();
        const re = /\S+@\S+\.\S+/;

        if (re.test(email)) {
            const regResponse = await dispatch(regAction(email))
            if (regResponse.email === email) {
                setRegistrationState('stepTwo')
            } else {
                setMessage(regResponse)
            }
        } else {
            setMessage('Not a valid email address')
        }
    }

    //TODO layout in production offset on ms edge

    const stepTwoHandler = e => {
        e.preventDefault();
        setMessage('')
        setRegistrationState('stepThree')
    }

    const stepThreeHandler = async e => {
        e.preventDefault();
        stringGenerator()
        if (password !== passwordRepeat) {
            setPassword('')
            setPasswordRepeat('')
            setMessage('The passwords do not match.')
        } else if (password.length < 6) {
            setPassword('')
            setPasswordRepeat('')
            setMessage('The password must be at least 6 characters long.')
        } else if (username.length < 3) {
            setUsername('')
            setMessage('The username must be at least 3 characters long.')
        } else {
            const valiResponse = await dispatch(valiAction(validation, email, string, firstName, lastName, password))

            if (valiResponse.is_active === true) {
                setRegistrationState('stepFour')
            } else {
                setMessage(valiResponse)
            }
        }
    }

    const renderSwitch = (registrationState) => {
        switch (registrationState) {
            case 'stepOne': {
                return (
                    <StepOneContainer>
                        <h2>Sign Up</h2>
                        <form onSubmit={stepOneHandler}>
                            <EmailSignUpContainer>
                                <p>Email</p>
                                <div>
                                    <EmailIconSignUp htmlFor="user"><i className="fas fa-envelope"></i><input type="text" id="user" name="user" value={email} onChange={handleEmail} placeholder="Email"/></EmailIconSignUp>
                                </div>
                            </EmailSignUpContainer>
                            <p>{message}</p>
                            <SignInButton id="submit" type="submit" value="Continue">SIGN UP</SignInButton>
                        </form>
                        <StepOneIconSVG id='stepOneIcon'/>
                    </StepOneContainer>
                )}

            case 'stepTwo': {
                const el = document.querySelector('header');
                if (el) el.remove();
                return (
                    <StepTwoContainer>
                        <h2>Congratulations!</h2>
                        <img src={congrats} alt='Check mark' />
                        <form onSubmit={stepTwoHandler}>
                            <p>We’ve sent a confirmation code to your email<br/>{email}</p>
                            <SignInButton id="submit" type="submit" value="Continue">Continue</SignInButton>
                        </form>
                        <StepTwoIconSVG id='stepTwoIcon'/>
                    </StepTwoContainer>
                )}

            case 'stepThree': {
                return (<>
                    <StepThreeContainer>
                        <h2>Verification</h2>
                        <form onSubmit={stepThreeHandler}>
                            <FormWrapper>
                                <ValidationCodeContainer>
                                    <input type="text" id="validation" name="validation" value={validation} onChange={handleValidationCode} placeholder="Validation code"/>
                                </ValidationCodeContainer>
                                <LayoutContainerForm>
                                    <LayoutContainerLeft>
                                        <EmailInputContainer>
                                            <p>Email</p>
                                            <input type="text" id="email" name="email" value={email} onChange={handleEmail} placeholder="Email"/>
                                        </EmailInputContainer>
                                        <FirstnameInputContainer>
                                            <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstName} placeholder="First name"/>
                                        </FirstnameInputContainer>
                                        <LastnameInputContainer>
                                            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastname} placeholder="Last name"/>
                                        </LastnameInputContainer>
                                    </LayoutContainerLeft>
                                    <LayoutContainerRight>
                                        <UsernameInputContainer>
                                            <p>Contribution considerations</p>
                                            <select type="text" id="user" name="user" value={username} onChange={handleUsername} placeholder="Options">
                                                <option value="no_answer">No Answer</option>
                                                <option value="free">FREE 0 $ - I'm just casually browsing</option>
                                                <option value="member">MEMBER $ / month - I would consider having a subscription</option>
                                                <option value="contr_2">CONTRIBUTOR - I would back it with $$</option>
                                                <option value="contr_3">CONTRIBUTOR - I would back it with $$$</option>
                                                <option value="contr_4">CONTRIBUTOR - I would back it with $$$$+</option>
                                                <option value="investor">INVESTOR - I'm a genuinely interested business angel and want to sit down together</option>
                                                <option value="hire">HIRE - I want to meet in person and talk about a possible job offer</option>
                                                <option value="agency">AGENCY - We are a software company interested in bringing the project to production</option>
                                                <option value="developer">DEVELOPER - I know exactly how I can contribute in this project.</option>
                                            </select>
                                            {/*<input type="text" id="user" name="user" value={username} onChange={handleUsername} placeholder=""/>*/}
                                        </UsernameInputContainer>
                                        <PasswordInputContainer>
                                            <input type="password" id="password" name="password" value={password} onChange={handlePassword} placeholder="Password"/>
                                        </PasswordInputContainer>
                                        <PasswordRepeatInputContainer>
                                            <input type="password" id="passwordRepeat" name="passwordRepeat" value={passwordRepeat} onChange={handlePasswordRepeat} placeholder="Password repeat"/>
                                        </PasswordRepeatInputContainer>
                                    </LayoutContainerRight>
                                </LayoutContainerForm>
                                <p>{message}</p>
                            </FormWrapper>
                            <SignInButton id="submit" type="submit" value="Complete">Complete</SignInButton>
                        </form>
                        <StepThreeIconSVG id='stepThreeIcon'/>
                    </StepThreeContainer>
                </>)
            }

            case 'stepFour': {
                return (<>
                    <SignIn newEmail={email}/>
                </>)
            }

            default:
                history.push("/user/profile");
                break;
        }
    }

    return (<>
        {renderSwitch(registrationState)}
    </>)
}
