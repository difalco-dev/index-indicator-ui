import React, { useContext } from 'react';
import { TickerContext } from '../../contexts/TickerContext';

interface Credentials {
    username?: string;
    password?: string;
    model_id?: string;
}

const LandingCard = ({ username }: Credentials): any => {
    const model_obj = useContext(TickerContext);
    console.log(model_obj);
    return (
        <div>landing</div>
    );
};

export default LandingCard;
