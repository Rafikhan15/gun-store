import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1 className='header-name'>Gun Store</h1>
            </div>
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
            {/* <h1 className='header'>Fun Store</h1> */}


        </nav>
    );
};

export default Header;