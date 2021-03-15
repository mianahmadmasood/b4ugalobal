import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Input, Button, Checkbox, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginUserRequest } from '../redux/actions';
// import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LcCe1oaAAAAAOoHYVzSPFpeIuC1AJcWrlsLa-8h";
const DELAY = 1500;


const Login = ({ history }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authUser.loading);
    const [state, setState] = useState({
        callback: "not fired",
        value: null,
        load: false,
        expired: false
    })

    let _reCaptchaRef;
    useEffect(() => {
        _reCaptchaRef = React.createRef();

    }, [])
    const onFinish = (values) => {
        console.log("Received values of form:,, ", values);
        dispatch(loginUserRequest({ ...values, history }));
    };

    const handleChange = value => {
        console.log("Captcha value:", value);
        setState({ ...state, value });
        // if value is null recaptcha expired
        if (value === null) setState({ ...state, expired: true });
    };

    // const asyncScriptOnLoad = () => {
    //     setState({ ...state, callback: "called!" });
    //     console.log("scriptLoad - reCaptcha Ref-", _reCaptchaRef);
    // };


    // console.log('state', state)

    return (
        <div style={{ background: "#002140" }}>
            <Row>
                <Col lg={8} md={8} xl={9} sm={4} xs={2}></Col>
                <Col
                    lg={8}
                    md={8}
                    xl={6}
                    sm={16}
                    xs={20}
                    style={{
                        height: window.innerHeight,
                        display: "flex",
                        justifyItems: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                    }}
                >
                    <Card
                        style={{
                            textAlign: "center",
                            boxShadow: "1px 1px white",
                            width: "100%",
                        }}
                    >
                        <h1 style={{ marginBottom: 20, color: "#002140" }}>
                            B4UNS LOGIN
                        </h1>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{}}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Email!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    type="email"
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Password!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            {/* <ReCAPTCHA
                                style={{ display: "inline-block" }}
                                ref={_reCaptchaRef}
                                sitekey={TEST_SITE_KEY}
                                onChange={handleChange}
                            // asyncScriptOnLoad={asyncScriptOnLoad}
                            /> */}

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ width: "100%" }}
                                    disabled={loading}
                                // disabled={loading || !state.value || state.expired}

                                >
                                    {loading ? "Singing in.." : "Log in"}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col lg={8} md={8} xl={9} sm={4} xs={2}></Col>
            </Row>
        </div>
    );
};

export default Login;
