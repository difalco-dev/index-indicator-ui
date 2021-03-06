import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import './Header.css';
import { Typography, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

interface HeaderProps {
    id: string;
    username?: string;
    setNav: Dispatch<SetStateAction<number>>;
}

const Header = ({ username, setNav, id }: HeaderProps): ReactElement => {

    return (
        <div className="Header-root">
            <SearchBar />
            {['My Market', username].map((title: any, key: number): ReactElement => (
                <Button key={key + 1} onClick={(): void => setNav(key + 1)}>
                    <Typography variant="h5">
                        {title !== username && title}
                        {title === username && (
                         <div>
                            <SettingsIcon />
                         </div>
                        )}
                    </Typography>
                </Button>
            ))}
        </div>
    );
};

export default Header;
