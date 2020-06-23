import React, { Component } from 'react';

interface Credentials {
    username?: string;
    password?: string;
    module_id?: string;
}

interface UserCredentials {
    creds?: null | Credentials;
    isLoggedIn: boolean;
}

class LoginWrapper extends Component<{}, UserCredentials> {
    constructor(props: any) {
        super(props);
        this.state = {
            creds: null,
            isLoggedIn: false,
        };
    }

    componentDidMount(): void {
        // Check Local Storage For Login Info
        const local = window.localStorage.getItem('index-indicator-uc');
        if ( local !== null && typeof local === 'object' ) {
            const { username, password, module_id } = local;
            this.setState({
                creds: { username, password, module_id },
                isLoggedIn: true,
            });
        } else {
            console.log(local);
        }
    }

    login(credentials: Credentials): void {

    }

    render(): React.ReactNode {
        const login = null;
        return (
            <div>
                {login === null && <div>login</div>}
            </div>
        );
    }
}

export default LoginWrapper;
