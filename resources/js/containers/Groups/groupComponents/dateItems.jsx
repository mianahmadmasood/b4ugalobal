import React from "react";

import { DatePicker, Form, Space, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const DateItems = ({ field, children }) => {
    console.log("field", field);
    return (
        <Space align="baseline">
            <Form.Item
                {...field}
                label="Key"
                name={[field.name, "key"]}
                fieldKey={[field.fieldKey, "key"]}
                rules={[
                    {
                        required: true,
                        message: "Missing key",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                {...field}
                label="Date"
                name={[field.name, "value"]}
                fieldKey={[field.fieldKey, "value"]}
                rules={[
                    {
                        required: true,
                        message: "Missing Date",
                    },
                ]}
            >
                <DatePicker showTime />
            </Form.Item>
            {children}
        </Space>
    );
};

export default DateItems;
