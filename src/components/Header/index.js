import React from "react";
import './style.css'

function Header({darkScroll}) {
    return (
        <header className={darkScroll ? 'dark-scroll' : 'transparent'} >
            <div className="logo--image">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" alt="Netflix" />
                </a>
            </div>

            <div className="user--image">
                <a href="/">
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" />
                </a>
            </div>
        </header>
    );
}

export default Header