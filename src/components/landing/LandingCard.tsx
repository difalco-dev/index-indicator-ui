import React, { useState, useContext, ReactElement, Dispatch, SetStateAction } from 'react';
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
    setExpanded?: Dispatch<SetStateAction<number>>;
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
    const [expanded, setExpanded] = useState(-1);
    const [nav, setNav] = useState(1);
    const ticker_exp: Ticker = (expanded !== -1) ? model_obj[expanded] : model_obj[0];
    console.log(ticker_exp);
    return (
        <Card className={classes.root}>
            <Header username={username} setNav={setNav}/>
            <div className="Ticker-container">
                {(expanded === -1) && model_obj.map((ticker: Ticker, key: number): ReactElement => {
                    return <TickerCard {...ticker} setExpanded={setExpanded} key={key} index={key} exp={false}/>;
                })}
                {(expanded !== -1) && (
                    <TickerCard {...ticker_exp} setExpanded={setExpanded} key={expanded} index={expanded} exp={true}/>
                )}
            </div>
        </Card>
    );
};

export default LandingCard;
