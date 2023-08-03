import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ThemeToggler from "./ThemeToggler";
const Layout =({children}) => {
    return<>
        <Header />
        <ThemeToggler />
        <div className="content">
         {children} </div>
        <Footer />
        </>
}

export default Layout;

