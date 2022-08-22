import React from "react";
import Aside from "../components/Aside";
import "../styles/Layout.scss"


const Layout = ({ children }) => {
    return (
    <div className="Layout">
        <Aside />
        {children}
    </div>
    );
};

export default Layout;
