import '../header/Header.css';
import Title from '../../atoms/title/Title';
import Image from '../../atoms/image/Image'

import React from "react";

const Header = () => {
    return (
        <div className='header-container' data-testid="header-container">
            <Image className='image-component' />
            <Title className='title-component' />
        </div>
    )
};

export default Header;