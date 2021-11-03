import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { Route } from "react-router-dom";
import { check_login } from "../../utils/auth.util";

const WithAuth = ({ component: Component, ...rest }) => {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        if (check_login()) {
            setloading(false);
        } else {
            window.location.href = "/";
        }
    }, []);

    return (
        <Route {...rest} render={(props) => <>{loading ? <Spin /> : <Component {...props} />}</>} />
    );
};

export default WithAuth;
