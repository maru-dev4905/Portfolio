import React from "react";
import { Link } from 'react-router-dom';

const Header = ({
    location,
    history
}) => {
    return (
        <>
            <header>
                <h1 className="logo">
                    <Link to='/'>
                        HOME
                    </Link>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='/works'>WORKS</Link>
                        </li>
                        <li>
                            <Link to='/contact'>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;