/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = (): ReactElement => {

    const flatProps = {
        options: tickers.map((option: any): any => option.title),
    };
    const [value, setValue] = React.useState(null);
    console.log(value);
    // TO-DO: pass value up to LandingCard to filter & expand requested card

    return (
        <div style={{ width: '20%' }}>
            <Autocomplete
                {...flatProps}
                id="ticker-search"
                onChange={(event: any, newValue: any): any => {
                    setValue(newValue);
                }}
                renderInput={(params: any): any => <TextField {...params} label="Search" margin="normal" />}
            />
        </div>
    );
};

const tickers = [
    { title: 'APPL', year: 1994 },
    { title: 'MCD', year: 1972 },
];

export default SearchBar;
