import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;