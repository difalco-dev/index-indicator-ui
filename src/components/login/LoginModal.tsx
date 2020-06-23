import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        marginTop: '24vh',
        width: '24%',
        height: '56vh',
    },
    title: {
        fontSize: 14,
    },
    input: {
        '& > *': {
            margin: 16,
            width: '25ch',
        },
    },
    submit: {
        height: '6vh',
        width: '56%',
        margin: 8,
    },
});

export default function OutlinedCard(props: any): any {
    const classes = useStyles();
    const { login } = props;

    const [username, setUserName] = React.useState('');
    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(event.target.value);
    };

    const [password, setPassword] = React.useState('');
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: any): void => {
        const model_id = 'test_01';
        login({ username, password, model_id });
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
                </form>
                <div className="Login-button-group">
                    <Button className={classes.submit} variant="contained" color="primary" onClick={handleSubmit}>
                        Log In
                    </Button>
                    <Button className={classes.submit} variant="contained" color="primary" onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
