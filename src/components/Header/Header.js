import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='custom-nav'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;