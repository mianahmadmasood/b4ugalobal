import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterCustom = () => {
    return (
        <div>
            <Footer style={{ textAlign: "center" }}>
                ©2021 Created by B4Usoft
            </Footer>
        </div>
    );
};

export default FooterCustom;
