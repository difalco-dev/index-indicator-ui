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
    exp: boolean;
    setExpanded: Dispatch<SetStateAction<number>>;
}

const useStyles = makeStyles({
    rootMin: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '2vh',
        minWidth: '30%',
    },
    rootMax: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '96vh',
        minWidth: '96%',
    },
    cardMin: {
        display: 'flex',
        minWidth: '100%',
    },
    cardMax: {
        display: 'flex',
        minWidth: '100%',
    },
});

const TickerCard = ({ticker_id, price, indicators, setExpanded, index, exp}: Ticker): ReactElement => {
    const classes = useStyles();
    const init_root_style = (exp === true) ? classes.rootMax : classes.rootMin;
    const init_card_style = (exp === true) ? classes.cardMax : classes.cardMin;
    const [root, setRootStyle] = useState(init_root_style);
    const [card, setCardStyle] = useState(init_card_style);

    const handleExpansionOuter = (event: MouseEvent<HTMLButtonElement>): void => {
        if (exp === false) {
            setRootStyle(classes.rootMax);
            setCardStyle(classes.cardMax);
            setExpanded(index);
        }
    };

    const handleExpansionInner = (event: MouseEvent<HTMLButtonElement>): void => {
        if (exp === true) {
            setRootStyle(classes.rootMin);
            setCardStyle(classes.cardMin);
            setExpanded(-1);
        }
    };

    return (
        <Button className={root} onClick={handleExpansionOuter}>
            <Card className={card}>
                {!exp && (
                    <div className="Root-ticker">
                        <div className="Top-row">
                            <div>{ticker_id}</div>
                            <div>{price}</div>
                            <div>^</div>
                        </div>
                        <div className="Min-graph-parent">G1</div>
                    </div>
                )}
                {exp && (
                    <div className="Root-max">
                        <div className="Indicator-parent">
                            <Card>
                                <div className="Indicator-title-row">
                                    <div>{ticker_id}</div>
                                    <div>{price}</div>
                                </div>
                            </Card>
                            <Typography variant="h6">
                                Tickers
                            </Typography>
                            {indicators.map((indicator: Indicator, key: number): ReactElement => (
                                <Card key={key}>
                                    <div className="Indicator-row">
                                        <div>title_{indicator.ind_title}</div>
                                        <div>|</div>
                                        <div>val_{indicator.ind_val}</div>
                                    </div>
                                </Card>
                            ))}
                            <div>
                                <Button color="secondary" variant="contained" onClick={handleExpansionInner}>close</Button>
                            </div>
                        </div>
                        <div className="Graph-parent">
                            <div className="Graph-child">
                                <div>
                                    G1
                                </div>
                                <div>
                                    G2
                                </div>
                            </div>
                            <div className="Graph-child">
                                <div>
                                    G3
                                </div>
                                <div>
                                    G4
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Card>
        </Button>
    );
};

export default TickerCard;
