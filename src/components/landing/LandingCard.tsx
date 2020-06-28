import React, { useContext, useState, ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import Header from '../header/Header';
import { makeStyles } from '@material-ui/core/styles';
import { TickerContext } from '../../contexts/TickerContext';
import TickerCard from '../ticker/TickerCard';
import './Landing.css';

interface Indicator {
    ind_title: string;
    ind_val: number;
}

interface Ticker {
    ticker_id: string;
    price: number;
    indicators: Indicator[];
}

interface Credentials {
    username?: string;
    password?: string;
    model_id?: string;
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '2vh',
        height: '96vh',
        width: '96%',

    },
});

const LandingCard = ({ username }: Credentials): ReactElement => {
    const classes = useStyles();
    const model_obj = useContext(TickerContext);
    const [nav, setNav] = useState(1);
    return (
        <Card className={classes.root}>
            <Header username={username} setNav={setNav}/>
            <div className="Ticker-container">
                {model_obj.map((ticker: Ticker, key: number): ReactElement => (
                    <TickerCard {...ticker} key={key} />
                ))}
            </div>
        </Card>
    );
};

export default LandingCard;
