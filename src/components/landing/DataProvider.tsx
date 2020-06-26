import React, { useState, useEffect } from 'react';
import { model_obj, TickerContext } from '../../contexts/TickerContext';

interface Credentials {
    username?: string;
    password?: string;
    model_id?: string;
}

interface Props {
    children: React.ReactNode;
}

const DataProvider = ({children}: Props, { username, password, model_id }: Credentials): any => {

    const [data, setData] = useState(model_obj);

    useEffect((): void => {
        console.log('useEffect');
    }, []);

    return(
        <TickerContext.Provider value={data}>
            { children }
        </TickerContext.Provider>
    );

};

export default DataProvider;
