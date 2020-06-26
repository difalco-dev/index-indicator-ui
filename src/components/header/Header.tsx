import React, { ReactElement, useState } from 'react';
import SearchBar from './SearchBar';
import './Header.css';
import { Typography, Button } from '@material-ui/core';

interface UID {
    username?: string;
}

const Header = ({ username }: UID): ReactElement => {
    const [nav, setNav] = useState(1);


    return (
        <div className="Header-root">
            <SearchBar />
            {['The Market', 'My Market', username].map((title: any, key: number): ReactElement => (
                <Button key={key}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                </Button>
            ))}
        </div>
    );
};

export default Header;
