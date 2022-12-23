import styled from 'styled-components';
import React, { useState, useRef, useContext } from 'react';
import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosPromise,
  AxiosResponse,
} from 'axios';
import { useRouter } from 'next/router';
import AuthContext from '../store/auth_context';

// === Css Styling ===
const LoginLayout = styled.div`
  margin: 2rem 15rem;
`;

const LoginBox = styled.div`
  background-color: #38015c;
  border-radius: 20px;
  text-align: center;
`;

const LoginTitle = styled.div`
  color: white;
  padding: 7% 0;
  font-weight: bold;
`;

const LoginForm = styled.form`
  font-size: 0.9rem;
  color: white;
`;

const EmailText = styled.div`
  font-size: 0.9rem;
`;

const EmailInput = styled.input`
  width: 90%;
  height: 28px;
  border-radius: 5px;
  background-color: #f1e1fc;
`;

const PasswordText = styled.div`
  margin-top: 0.5rem;
`;

const PasswordInput = styled.input`
  width: 90%;
  height: 28px;
  border-radius: 5px;
  background-color: #f1e1fc;
`;

const ButtonBox = styled.div`
  margin-top: 1rem;
`;

const LoginButton = styled.button`
  background-color: #9f5ccc;
  border-radius: 5px;
  border: 1px solid #9f5ccc;
  padding: 8px 30px;
  color: white;
  &:hover {
    background-color: #9544ca;
  }
`;

const ChangeButton = styled.button`
  background-color: transparent;
  color: #9f5ccc;
  border: 1px solid #38015c;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  &:hover {
    color: #ab73d0;
  }
`;
// ===================

const Login = () => {
  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const [isNewMemeber, setIsNewMember] = useState(false);
  const [authTitle, setAuthTitle] = useState<string>('Login');
  const [buttonTitle, setButtonTitle] = useState<string>('Login');
  const [ChgButtonTitle, setChgButtonTitle] =
    useState<string>('Create new account');

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const changeButtonHandler = () => {
    setIsNewMember(!isNewMemeber);
    // if (authTitle === 'Login') {
    //   // setAuthTitle('Sign Up');
    //   setButtonTitle('Create Account');
    //   setChgButtonTitle('Login with existing account');
    // } else {
    //   setAuthTitle('Login');
    //   setButtonTitle('Login');
    //   setChgButtonTitle('Create new account');
    // }
  };

  const authHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    let errorMessage = 'Authentication failed!';

    if (isNewMemeber) {
      axios({
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAArsm7JmHerjVrPuGwL2GH5Sz3-0emI8g',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        },
      })
        .then((res: AxiosResponse) => {
          const token = res.data.idToken;
          authCtx.login(token);
          route.push('/');
        })
        .catch((err) => {
          errorMessage = err.response?.data.error.message;
          alert(errorMessage);
        });
    } else {
      axios({
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAArsm7JmHerjVrPuGwL2GH5Sz3-0emI8g',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        },
      })
        .then((res: AxiosResponse) => {
          const token = res.data.idToken;
          authCtx.login(token);
          route.push('/');
        })
        .catch((err) => {
          errorMessage = err.response?.data.error.message;
          alert(errorMessage);
        });
    }
  };

  return (
    <LoginLayout>
      <LoginBox>
        <LoginTitle>{isNewMemeber ? 'Sign Up' : 'Login'}</LoginTitle>
        <LoginForm onSubmit={authHandler}>
          <EmailText>Your Email</EmailText>
          <EmailInput required type='email' ref={emailInputRef} />
          <PasswordText>Your Password</PasswordText>
          <PasswordInput required type='password' ref={passwordInputRef} />
          <ButtonBox>
            <LoginButton>
              {isNewMemeber ? 'Create Account' : 'Login'}
            </LoginButton>
          </ButtonBox>
        </LoginForm>
        <ButtonBox>
          <ChangeButton onClick={changeButtonHandler}>
            {isNewMemeber
              ? 'Login with existing account'
              : 'Create new account'}
          </ChangeButton>
        </ButtonBox>
      </LoginBox>
    </LoginLayout>
  );
};
export default Login;
