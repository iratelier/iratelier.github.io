import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <header id="header" className="stiky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/60 supports-backdrop-blur:bg-white/50 dark:bg-transparent">
                <nav className="navbar">
                    <div className="navbar-container">
                        {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            miracleStudio HOME
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"} />
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {/* <li className="nav-item">
                                <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/Experience" className="nav-links" onClick={closeMobileMenu}>
                                    Experience
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
