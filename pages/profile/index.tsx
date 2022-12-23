import Profile from '../../components/Profile';
import { useEffect, useContext } from 'react';
import AuthContext from '../../store/auth_context';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const route = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      route.push('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Profile />
    </>
  );
};
export default ProfilePage;
