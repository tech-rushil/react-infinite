import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({header, footer, children}) => {
    return (
        <>
            {header && <Header />}
            {children}
            {footer && <Footer />}
        </>
    );
}

export default Layout;
