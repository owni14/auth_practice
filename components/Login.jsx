import styled from 'styled-components';
import { useState, useRef } from 'react';

// Css Styling
const LoginLayout = styled.div`
  margin: 2rem 15rem;
`;

const LoginBox = styled.div`
  background-color: #38015c;
  border-radius: 5px;
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

const Login = () => {
  const [authTitle, setAuthTitle] = useState('Login');
  const [buttonTitle, setButtonTitle] = useState('Login');
  const [ChgButtonTitle, setChgButtonTitle] = useState('Create new account');

  const changeButtonHandler = () => {
    if (authTitle === 'Login') {
      setAuthTitle('Sign Up');
      setButtonTitle('Create Account');
      setChgButtonTitle('Login with existing account');
    } else {
      setAuthTitle('Login');
      setButtonTitle('Login');
      setChgButtonTitle('Create new account');
    }
  };

  return (
    <LoginLayout>
      <LoginBox>
        <LoginTitle>{authTitle}</LoginTitle>
        <LoginForm>
          <EmailText>Your Email</EmailText>
          <EmailInput />
          <PasswordText>Your Password</PasswordText>
          <PasswordInput />
          <ButtonBox>
            <LoginButton>{buttonTitle}</LoginButton>
          </ButtonBox>
        </LoginForm>
        <ButtonBox>
          <ChangeButton onClick={changeButtonHandler}>
            {ChgButtonTitle}
          </ChangeButton>
        </ButtonBox>
      </LoginBox>
    </LoginLayout>
  );
};
export default Login;
