import React, { ReactElement, useState, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './Ticker.css';

interface Indicator {
    ind_title: string;
    ind_val: number;
}

interface Ticker {
    ticker_id: string;
    price: number;
    indicators: Indicator[];
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '2vh',
        minHeight: '33vh',
        minWidth: '30%',
        margin: '.8%',
    },
    card: {
        display: 'flex',
        height: '100%',
        width: '100%',
    }
});

const TickerCard = ({ticker_id, price, indicators}: Ticker): ReactElement => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (event: MouseEvent<HTMLButtonElement>): void => {
        setExpanded(!expanded);
    };

    return (
        <Button className={classes.root} onClick={handleExpansion}>
            <Card className={classes.card}>
                <div className="Root">
                    <div className="Header">
                        {ticker_id}
                        {price}
                    </div>
                    {indicators[0].ind_title}
                </div>
            </Card>
        </Button>
    );
};

export default TickerCard;
