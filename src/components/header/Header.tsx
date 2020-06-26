import React, { ReactElement } from 'react';
import SearchBar from './SearchBar';
import './Header.css';

interface UID {
    username?: string;
}

const Header = ({ username }: UID): ReactElement => {
    console.log('header');
    return (
        <div className="Header-root">
            <SearchBar />
            <div> The Market </div>
            <div> My Market </div>
            <div>{username}</div>
        </div>
    );
};

export default Header;
