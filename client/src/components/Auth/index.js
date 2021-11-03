import React from 'react';
import keys from '../../config/keys';
import { __getCookie } from '../../utils/cookie.util';
import * as Constants from '../../constants/constants';
const jwtDecode = require('jwt-decode');

const RequireAdminAuth = (Component) => {
    return class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        componentDidMount() {
            var allowedUID = [];
            if (Constants.G_URL !== 'http://localhost:3080/') {
                if (Constants.G_URL === 'https://dev.skeleton.com/') {
                    // 3 - vinay@demo.com
                    // 4 - vinay@sample.com
                    allowedUID = [4];
                } else {
                    // 3 - vinay@demo.com
                    // 4 - vinay@sample.com
                    allowedUID = [4];
                }

                if (__getCookie(keys.cookiePrefix + 'ut').cookieExists) {
                    let decodedToken = jwtDecode(__getCookie(keys.cookiePrefix + 'ut').cookieValue);
                    let uid = parseInt(decodedToken.uid);
                    if (allowedUID.includes(uid)) {
                        this.setState({
                            loading: false,
                        });
                    }else {
                        window.location.href = Constants.G_HOME_URL;
                    }
                } else {
                    window.location.href = Constants.G_HOME_URL;
                }
            } else {
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            return this.state.loading ? <></> : <Component {...this.props}/>;
        }
    };
};

export default RequireAdminAuth;
