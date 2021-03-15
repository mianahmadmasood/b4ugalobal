import React from 'react'
import { notification } from 'antd';


export default function Notification(messageType, message, description) {
    const openNotification = () => {
        notification[messageType || "success"]({
            message: message || "Message",
            description: description || "Message Description"
        });
    };

    return openNotification()
}
