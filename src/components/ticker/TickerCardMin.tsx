import React, { ReactElement, useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Ticker.css';

interface Indicator {
    ind_title: string;
    ind_val: number;
}

interface Ticker {
    index: number;
    ticker_id: string;
    price: number;
    indicators: Indicator[];
    setExpanded: Dispatch<SetStateAction<number>>;
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '30%',
    },
    card: {
        display: 'flex',
        minWidth: '100%',
    },
});

const TickerCardMin = ({ ticker_id, price, setExpanded, index }: Ticker): ReactElement => {
    const classes = useStyles();

    return (
        <Button className={classes.root} onClick={(event: MouseEvent<HTMLButtonElement>): void => {
            setExpanded(index);
        }}>
            <Card className={classes.card}>
                <div className="Root-ticker-min">
                    <div className="Top-row">
                        <div>{ticker_id}</div>
                        <div>${price}</div>
                        <div>^%</div>
                    </div>
                    <div className="Min-graph-parent">G1</div>
                </div>
            </Card>
        </Button>
    );
};

export default TickerCardMin;
