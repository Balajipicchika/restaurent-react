import React from 'react'
import Header from './Header';
import Footer from './Footer';
const Layout = ({children}) => {
  return (
    <>
        <Header />
        <div style={{minHeight: '80vh'}}>
            {children}
        </div>
        <Footer style={{bottom: '0', position: 'fixed'}} />
    </>
  )
}

export default Layout