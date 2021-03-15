import React from "react";
import { Layout, Button } from "antd";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import "../componentStyles.css";
import { logoutUserRequest } from '../../redux/actions';

const { Header } = Layout;

const HeaderCustom = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const logoutHandler = async () => {


        await dispatch(logoutUserRequest())

        history.push('/login')
    }

    return (
        <Header className="header" style={{ padding: 0, marginBottom: 10 }}>
            {" "}
            <div className="grid grid-cols-12 text-white">

                <div className="col-span-3">

                </div>

                <div className="col-span-6 flex justify-center items-center">
                    <div className="text-white text-center">
                        B4U NOTIFICATIONS SYSTEM

            </div>
                </div>

                <div className="col-span-3 flex justify-end items-center px-4 py-1">
                    <div >
                        <Button type="primary" onClick={logoutHandler}>Logout</Button>
                    </div>
                </div>

            </div>

        </Header>
    );
};

export default HeaderCustom;
