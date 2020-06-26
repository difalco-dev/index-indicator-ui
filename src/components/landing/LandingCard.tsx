import React, { useContext, ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import Header from '../header/Header';
import { makeStyles } from '@material-ui/core/styles';
import { TickerContext } from '../../contexts/TickerContext';

import './Landing.css';

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
    return (
        <Card className={classes.root}>
            <Header username={username} />
            <div>{JSON.stringify(model_obj[0])}</div>
        </Card>
    );
};

export default LandingCard;
