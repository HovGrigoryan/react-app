import React from 'react';
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";

const Header = () => {
    const handleLogout = () => {
        // Implement your logout logic here
    };

    return (
        <div className="header">
            <Logo />
            <Button buttonText="Logout" onClick={handleLogout} />
        </div>
    );
};

export default Header;
