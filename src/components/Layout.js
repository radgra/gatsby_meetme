import React from 'react'
import '../css/theme/bootstrap.css'
import '../css/theme/breadcrumb.css'
import '../vendors/linericon/style.css'
import '../vendors/flaticon/flaticon.css'
import '../css/theme/style.css'
import '../css/theme/responsive.css'
import Header from './Header'
import Footer from './Footer';
// import '../css/theme/font-awesome.min.css'

const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Layout
