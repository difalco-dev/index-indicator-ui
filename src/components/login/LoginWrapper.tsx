import React, { Component, ReactNode } from 'react';
import LoginModal from './LoginModal';
import './Login.css';

interface Credentials {
    username?: string;
    password?: string;
    model_id?: string;
}

interface UserCredentials {
    creds?: null | Credentials;
    isLoggedIn: boolean;
}

class LoginWrapper extends Component<any, UserCredentials> {
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
        return (
            <div className="Login-parent">
                {!this.state.isLoggedIn && <LoginModal login={this.login}/>}
                {this.state.isLoggedIn && this.props.children}
            </div>
        );
    }
}

export default LoginWrapper;
