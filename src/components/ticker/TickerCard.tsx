import React, { ReactElement, useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
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
        justifyContent: 'flex-start',
        marginTop: '2vh',
        minHeight: '33vh',
        minWidth: '30%',
        margin: '.8%',
    },
    rootMax: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '2vh',
        minHeight: '96vh',
        minWidth: '96%',
        margin: '.8%',
    },
    cardMin: {
        display: 'flex',
        height: '32vh',
        width: '100%',
    },
    cardMax: {
        display: 'flex',
        height: '80vh',
        width: '100%',
    },
});

const TickerCard = ({ticker_id, price, indicators, setExpanded, index, exp}: Ticker): ReactElement => {
    const classes = useStyles();
    const init_root_style = (exp === true) ? classes.rootMax : classes.rootMin;
    const init_card_style = (exp === true) ? classes.cardMax : classes.cardMin;
    const [expanded, setExpandedLocal] = useState(false);
    const [root, setRootStyle] = useState(init_root_style);
    const [card, setCardStyle] = useState(init_card_style);

    const handleExpansion = (event: MouseEvent<HTMLButtonElement>): void => {
        if (expanded === false) {
            setRootStyle(classes.rootMax);
            setCardStyle(classes.cardMax);
            setExpanded(index);
        } else {
            setRootStyle(classes.rootMin);
            setCardStyle(classes.cardMin);
            setExpanded(-1);
        }
        setExpandedLocal(!expanded);
    };
    return (
        <Button className={root} onClick={handleExpansion}>
            <Card className={card}>
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
