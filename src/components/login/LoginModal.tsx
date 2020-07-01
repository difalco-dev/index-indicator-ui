import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '24%',
        minWidth: 280,
        height: '56vh',
        minHeight: 320,
    },
    title: {
        fontSize: 14,
    },
    input: {
        '& > *': {
            margin: 16,
        },
    },
    submit: {
        height: '6vh',
        width: '56%',
        margin: 8,
    },
});

interface Credentials {
    username?: string;
    password?: string;
    model_id?: string;
}

interface Props {
    login: (creds: Credentials) => void;
}

export default function LoginModal({ login }: Props): any {
    const classes = useStyles();

    const [username, setUserName] = useState('');
    const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserName(event.target.value);
    };

    const [password, setPassword] = useState('');
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
        login({ username, password });
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom={true}>
                    Welcome || IndexIndicator
                </Typography>
                <form className={classes.input} noValidate={true} autoComplete="off" >
                    <TextField
                        id="username"
                        label="Username"
                        value={username}
                        onChange={handleUserNameChange}
                        variant="filled" />
                    <TextField
                        id="password"
                        label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        variant="filled"
                        type="password"/>
                    <div className="Login-button-group">
                        <Button className={classes.submit} variant="contained" color="primary" onClick={handleSubmit}>
                            Log In
                        </Button>
                        <Button className={classes.submit} variant="contained" color="primary" onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
