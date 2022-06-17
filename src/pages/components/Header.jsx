import React from 'react';
import "./header.css"
import { useNavigate } from 'react-router-dom';

const Header = () => {

    
    const navigate = useNavigate();

    function onClick() {
        navigate("/login");
      }
    return (
        <header>
            <button className="Button" onClick={onClick} >Log Out</button>
        </header>
    );
}

export default Header;


