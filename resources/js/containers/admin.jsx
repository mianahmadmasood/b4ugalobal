import React, { useState } from "react";
import { Layout } from "antd";

import Menu from "../components/Menu/menu";
import HeaderCustom from "../components/Header/header";
import FooterCustom from "../components/Footer/footer";
import Templates from "../containers/Templates/templates";
import Compaigns from "./Compaigns/compaigns";
import Groups from "./Groups/groups";
import MessageTemplate from "./Templates/Message/messageTemplateList";
import PushNotificationTemplate from "./Templates/pushNotification/pushNotificationTemplateList";

import "./styles.css";

const { Content, Sider } = Layout;

const Admin = () => {
    const [collapsed, setCollapse] = useState(false);
    const [selectedMenuItem, setMenuItem] = useState("Compaigns");

    //functions
    const toggle = () => {
        setCollapse(!collapsed);
    };

    const onMenuChange = (item) => {
        setMenuItem(item);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
                <div className="logo">LOGO </div>
                <Menu onMenuChange={onMenuChange} />
            </Sider>
            <Layout className="site-layout">
                <HeaderCustom />
                <Content style={{ margin: "16px" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, height: "100%" }}
                    >
                        {selectedMenuItem === "Compaigns" && <Compaigns />}
                        {selectedMenuItem === "Groups" && <Groups />}
                        {selectedMenuItem === "email" && (
                            <div>
                                <Templates></Templates>
                            </div>
                        )}
                        {selectedMenuItem === "message" && <MessageTemplate />}
                        {selectedMenuItem === "pushNotification" && <PushNotificationTemplate />}
                    </div>
                </Content>
                <FooterCustom />
            </Layout>
        </Layout>
    );
};

export default Admin;
