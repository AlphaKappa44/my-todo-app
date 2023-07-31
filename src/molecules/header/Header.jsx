import '../header/Header.css';
import Title from '../../atoms/title/Title';
import Image from '../../atoms/image/Image'

import React from "react";

const Header = () => {
    return (
        <div className='header-container'>
            <Image />
            <Title />
        </div>
    )
};

export default Header;