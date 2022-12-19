import { Props } from '../../types';
import HeaderBar from './HeaderBar';

const Layout = (props: Props) => {
  return (
    <>
      <HeaderBar />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
