import { FC, PropsWithChildren } from 'react';
import Header from '../shared/components/header/header';
// import Footer from '../shared/components/footer/footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
