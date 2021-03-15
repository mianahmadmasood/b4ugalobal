import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    GroupOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const MENU_ITEMS = [
    { label: "Compaigns", icon: <PieChartOutlined /> },
    { label: "Groups", icon: <GroupOutlined /> },
];

const MenuCustom = ({ onMenuChange }) => {
    return (
        <Menu theme="dark" defaultSelectedKeys={["Compaigns"]} mode="inline">
            {MENU_ITEMS.map(({ label, icon }) => (
                <Menu.Item
                    key={label}
                    icon={icon}
                    onClick={() => onMenuChange(label)}
                >
                    {label}
                </Menu.Item>
            ))}
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <DesktopOutlined />
                        <span>Templates</span>
                    </span>
                }
            >
                <Menu.Item key="email" onClick={() => onMenuChange("email")}>
                    Email
                </Menu.Item>
                <Menu.Item
                    key="message"
                    onClick={() => onMenuChange("message")}
                >
                    SMS
                </Menu.Item>
                <Menu.Item
                    key="pushNotification"
                    onClick={() => onMenuChange("pushNotification")}
                >
                    Push Notification
                </Menu.Item>
            </SubMenu>
            {
                //    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                //     <Menu.Item key="3">Tom</Menu.Item>
                //     <Menu.Item key="4">Bill</Menu.Item>
                //     <Menu.Item key="5">Alex</Menu.Item>
                // </SubMenu>
                // <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                //     <Menu.Item key="6">Team 1</Menu.Item>
                //     <Menu.Item key="8">Team 2</Menu.Item>
                // </SubMenu>
                // <Menu.Item key="9" icon={<FileOutlined />}>
                //     Files
                // </Menu.Item>
            }
        </Menu>
    );
};

export default MenuCustom;
