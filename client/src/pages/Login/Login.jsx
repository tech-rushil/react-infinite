import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, notification } from "antd";
import { useHistory } from "react-router-dom";

import { InputText, InputPassword } from "../../components/Input/Input";
import { login_user } from "../../utils/auth.util";

const LoginCardWrapper = styled.div`
    padding: 32px;
    width: 420px;
    background-color: var(--dove);
    border-radius: 4px;
    box-shadow: var(--peaky-shadow-high);

    #login-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
        font-weight: 500;

        label {
            font-family: "Inter", sans-serif;
            font-size: 16px;
            font-weight: 700;
        }

        .ant-form-item {
            margin-top: 14px;
        }

        #login-form_userName,
        .ant-select-selector,
        .custom-password .ant-input-password,
        .custom-confirmPassword .ant-input-password {
            height: 64px;
            border: 1px solid #d6d8e7;
            border-radius: 8px;
            font-weight: 500;
        }

        #login-form_password {
            font-weight: 500;
        }

        .input-group .ant-form-item-has-error .ant-input {
            border: 1px solid #ff4d4f !important;
        }

        .input-group,
        .input-group-pass {
            width: 100%;
        }

        .btn-group {
            width: 100%;
        }

        .login-btn {
            border: unset;
            background: unset;
            margin-top: 32px;
            font-size: 24px;
            width: 100%;
            height: 64px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: var(--dove);
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            cursor: pointer;
            background-image: linear-gradient(to right, #232526 0%, #414345 51%, #232526 100%);

            :hover {
                background-position: right center;
            }
        }
    }

    .sign-in-divider {
        margin: 32px 0px;
    }

    .fb-sign-in {
        padding: 0 1rem;
        background: #4267b2;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

        div {
            margin-left: 2.8rem;
            color: var(--dove);
        }

        :hover {
            box-shadow: 0 0 3px 3px rgba(#3b5998, 0.3);
        }

        :active {
            background-color: #3b5998;
        }

        height: 64px;
        border-radius: 4px;
    }

    @media only screen and (max-device-width: 760px) {
        padding: 32px;
        width: 90%;

        #login-form {
            width: 100%;
            flex-direction: column;
        }

        #login-form .input-group,
        #login-form .input-group-pass {
            width: 100%;
        }
    }
`;

const Login = () => {
    const history = useHistory();
    const [btnLoding, setbtnLoding] = useState(false);

    const onFinish = async (values) => {
        setbtnLoding(true);

        const usr_data = {
            name: "Test User",
            username: "foo",
            token: "test_user",
        };

        if (values.userName === "foo" && values.password === "bar") {
            // To set the User Cookie
            login_user(usr_data);
            notification.open({
                message: "Login successful",
                description: "Please wait while we redirect you",
                type: "success",
            });
            history.replace("/home");
        } else {
            notification.open({
                message: "Invalid credentials",
                description: "Please use username: foo and password: bar to login",
                type: "error",
            });
        }

        setbtnLoding(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <div className="login-container f-d f-h-c f-v-c">
                <LoginCardWrapper>
                    <h1 className="h1-heading">Login</h1>
                    <Form
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <div className="input-group">
                            <label>User Name</label>
                            <InputText
                                name={"userName"}
                                placeholder={"Enter your username"}
                                msgText={"username"}
                            />
                        </div>

                        <div className="input-group-pass">
                            <label>Password</label>
                            <InputPassword
                                name={"password"}
                                placeholder={"Enter your password"}
                                msgText={"Password"}
                            />
                        </div>

                        <div className="btn-group">
                            <Button className="login-btn" htmlType="submit" loading={btnLoding}>
                                Sign in
                            </Button>
                        </div>
                    </Form>
                </LoginCardWrapper>
            </div>
        </>
    );
};

export default Login;
