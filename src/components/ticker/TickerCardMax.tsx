import React, { ReactElement, useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IndicatorTable from './indicators/IndicatorTable';
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
    rootMax: {
        display: 'flex',
        padding: 16,
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center',
        margin: '2%',
    },
});

const TickerCardMax = ({ ticker_id, price, indicators, setExpanded, index }: Ticker): ReactElement => {
    const classes = useStyles();

    return (
        <Card className={classes.rootMax}>
            <div className="Root-ticker-max">
                <div className="Indicator-parent">
                    <div className="Indicator-title-row">
                        <Typography variant="h6">
                            {ticker_id}
                        </Typography>
                        <Typography variant="h6">
                            ${price}
                        </Typography>
                    </div>
                    {/*indicators.map((indicator: Indicator, key: number): ReactElement => (
                        <div className="Indicator-row" key={key}>
                            <div>title_{indicator.ind_title}</div>
                            <div>|</div>
                            <div>val_{indicator.ind_val}</div>
                        </div>
                    ))*/}

                    <IndicatorTable indicators={indicators}/>
                    <div>
                        <Button
                            color="secondary"
                            variant="contained"
                             onClick={(event: MouseEvent<HTMLButtonElement>): void => setExpanded(-1)}>
                            close
                        </Button>
                    </div>
                </div>
                <div className="Graph-parent">
                    <div className="Graph-child">
                        <div>
                            Graph1
                        </div>
                        <div>
                            Graph2
                        </div>
                    </div>
                    <div className="Graph-child">
                        <div>
                            Graph3
                        </div>
                        <div>
                            Graph4
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default TickerCardMax;
