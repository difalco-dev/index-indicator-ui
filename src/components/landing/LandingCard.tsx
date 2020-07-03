import React, { useState, useContext, ReactElement, Dispatch, SetStateAction } from 'react';
import Card from '@material-ui/core/Card';
import Header from '../header/Header';
import { makeStyles } from '@material-ui/core/styles';
import { TickerContext } from '../../contexts/TickerContext';
import TickerCardMin from '../ticker/TickerCardMin';
import TickerCardMax from '../ticker/TickerCardMax';
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
        alignItems: 'center',
        width: '96%',
        minWidth: '96%',
    },
});

const LandingCard = ({ username }: Credentials): ReactElement => {
    const classes = useStyles();
    const model_obj = useContext(TickerContext);
    const [expanded, setExpanded] = useState(-1);
    const [nav, setNav] = useState(1);
    const ticker_exp: Ticker = (expanded !== -1) ? model_obj[expanded] : model_obj[0];

    // TO DO: render 6 tickers per page w/ bottom nav
    // const rendered_tickers = model_obj.splice(ticker_nav * 6, (ticker_nav + 1) * 6);
    return (
        <Card className={classes.root} id="Landing-root">
            <Header username={username} setNav={setNav} id="Landing-header"/>
            <div className="Landing-ticker-root" id="Landing-root">
                {(expanded === -1) && (
                    <div className="Landing-tickers-container-min" id="Landing-tickers-container-min">
                        {model_obj.map((ticker: Ticker, key: number): ReactElement => (
                            <TickerCardMin
                                {...ticker}
                                setExpanded={setExpanded}
                                key={key}
                                index={key} />
                        ))}
                    </div>
                )}
                {(expanded !== -1) && (
                    <div className="Landing-tickers-container-max" id="Landing-tickers-container-max">
                        <TickerCardMax
                            {...ticker_exp}
                            setExpanded={setExpanded}
                            key={expanded}
                            index={expanded} />
                    </div>
                )}
            </div>
        </Card>
    );
};

export default LandingCard;
