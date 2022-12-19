import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

// Css Styling
const NavBar = styled.nav`
  background-color: #38015c;
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MainPageList = styled.ul`
  list-style: none;
  color: white;
  padding: 0 4rem;
`;

const LoginPageList = styled.ul`
  list-style: none;
  color: white;
  padding: 0 4rem;
`;

const LoginStateList = styled.ul`
  list-style: none;
  color: white;
  padding: 0 4rem;
`;

const MainPageLink = styled.li`
  display: inline-block;
  font-size: 1.5rem;
  &:hover {
    color: coral;
  }
`;

const LoginPageLink = styled.li`
  display: inline-block;
  font-size: 1rem;
  &:hover {
    color: coral;
  }
`;

const ProfilePageLink = styled.li`
  display: inline-block;
  font-size: 1rem;
  margin-right: 2rem;
  &:hover {
    color: coral;
  }
`;

const LogoutLink = styled.li`
  display: inline-block;
  padding: 5px 10px;
  font-size: 1rem;
  border: 1.5px solid white;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    color: #38015c;
    background-color: #c291e2;
  }
`;

// HeaderBar.tsx
const HeaderBar = () => {
  const logoutHandler = () => {
    console.log('logout Check!!');
  };

  return (
    <>
      <NavBar>
        <MainPageList>
          <MainPageLink>
            <Link href='/'>React Auth</Link>
          </MainPageLink>
        </MainPageList>
        <LoginStateList>
          <ProfilePageLink>
            <Link href='/profile'>Profile</Link>
          </ProfilePageLink>
          <LogoutLink onClick={logoutHandler}>Logout</LogoutLink>
        </LoginStateList>
        <LoginPageList>
          <LoginPageLink>
            <Link href='/auth'>Login</Link>
          </LoginPageLink>
        </LoginPageList>
      </NavBar>
    </>
  );
};
export default HeaderBar;
