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

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(model_obj);

    useEffect((): void => {
        // TO DO: Feed setData into Reducer
        console.log('useEffect');
    }, [data]);

    // TO DO: Replace w Call to Server
    fetch('https://www.google.com').then((res: Response): object => {
       setLoading(false);
       return res.json;
    }).catch((err: Error): Error => err);

    return(
        <TickerContext.Provider value={data}>
            {loading && (
                <div>loading...</div>
            )}
            {!loading && children }
        </TickerContext.Provider>
    );

};

export default DataProvider;
