import styled from 'styled-components';
import { useContext, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// Css Styling
const ProfileBox = styled.div`
  margin: 4rem 8rem;
  text-align: center;
`;

const ProfileTitle = styled.p`
  font-weight: bold;
  font-size: 3.5rem;
`;

const ChgPasswordBox = styled.div``;

const InputBox = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const PasswordInput = styled.input`
  width: 60%;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f1e1fc;
`;

const ChgPasswordButton = styled.button`
  background-color: #38015c;
  border: 1px solid transparent;
  border-radius: 3px;
  color: white;
  padding: 5px 15px;
  &:hover {
    background-color: #5f1393;
  }
`;

const Profile = () => {
  const passwordInpufRef = useRef<HTMLInputElement>(null);
  const route = useRouter();
  const token = localStorage.getItem('token');

  const chgPasswordHandler = () => {
    const enteredPassword = passwordInpufRef.current?.value;
    const token = localStorage.getItem('token');
    axios({
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAArsm7JmHerjVrPuGwL2GH5Sz3-0emI8g',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        idToken: token,
        password: enteredPassword,
        returnSecureToken: true,
      },
    }).then((res) => {
      route.push('/');
    });
  };

  useEffect(() => {
    if (token === null) {
      route.replace('/');
    }
  }, [token]);

  return (
    <ProfileBox>
      <ProfileTitle>Your User Profile</ProfileTitle>
      <ChgPasswordBox>
        New Password
        <InputBox>
          <PasswordInput required type='password' ref={passwordInpufRef} />
        </InputBox>
        <ChgPasswordButton onClick={chgPasswordHandler}>
          Change Password
        </ChgPasswordButton>
      </ChgPasswordBox>
    </ProfileBox>
  );
};

export default Profile;
