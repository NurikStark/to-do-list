import React, { useState } from "react";
import "./App.css";

export function HeaderMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [arrowClass, setArrowClass] = useState<string>("arrow")
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setArrowClass(isMenuOpen ? 'arrow' : 'arrow_up')
    };

    return (
        <header>
            <a href="#" className="logo">Awesome Kanban Board</a>
            <div
                className={`user ${isMenuOpen ? "up" : "down"}`}
                onClick={toggleMenu}
            >
                <div className="user">
                    <a href="#" className="user-img"></a>
                    <a href="#" className={arrowClass}></a>
                </div>
                <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
                    <li className="menu-item"><a href="#" className="items">Profile</a></li>
                    <li className="menu-item"><a href="#" className="items">Log out</a></li>
                </ul>
            </div>
        </header>
    );
}
