import React, { Component, ReactNode } from 'react';
import LoginModal from './LoginModal';
import './Login.css';

class LoginWrapper extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            creds: null,
            isLoggedIn: false,
        };
        this.login = this.login.bind(this);
    }

    componentDidMount(): void {
        // Check Local Storage For Login Info
        const local: string | null = window.localStorage.getItem('index-indicator-uc');
        if ( local !== null) {
            const { username, model_id } = JSON.parse(local);
            this.setState({
                creds: { username, model_id },
                isLoggedIn: true,
            });
        }
    }

    login(creds: Credentials): void {
        this.setState({ creds, isLoggedIn: true });
        this.props.setCredentials(creds);
    }

    render(): ReactNode {
        const wrapperStyle = (this.state.isLoggedIn === true) ? 'Login-wrapper-parent-sign-in' : 'Login-wrapper-parent-in';
        return (
            <div className={wrapperStyle}>
                {!this.state.isLoggedIn && <LoginModal login={this.login}/>}
                {this.state.isLoggedIn && this.props.children}
            </div>
        );
    }
}
interface AppCallback {
    setCredentials: (creds: Credentials) => void;
}

interface Credentials {
    username?: string;
    password?: string;
    model_id?: string;
}

interface UserCredentials {
    creds?: null | Credentials;
    isLoggedIn: boolean;
}

export default LoginWrapper;
