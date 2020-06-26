/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = (): ReactElement => {

    const flatProps = {
        options: top100Films.map((option: any): any => option.title),
    };
    const [value, setValue] = React.useState(null);

    console.log(value);

    return (
        <div style={{ width: '25%' }}>
            <Autocomplete
                {...flatProps}
                id="flat-demo"
                onChange={(event: any, newValue: any): any => {
                    setValue(newValue);
                }}
                renderInput={(params: any): any => <TextField {...params} label="Search" margin="normal" />}
            />
        </div>
    );
};

const top100Films = [
    { title: 'APPL', year: 1994 },
    { title: 'MCD', year: 1972 },
];

export default SearchBar;
