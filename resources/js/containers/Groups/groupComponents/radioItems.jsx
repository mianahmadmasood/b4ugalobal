import React from "react";
import { Form, Input, Button, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const RADIO_VALUES = [
    { label: "Yes", value: true },
    { label: "No", value: false },
];

const OPERATORS = ["=", "!="];

const KEY_OPTIONS = [
    "is_test_account",
    "is_training_done",
    "is_block",
    "is_office_visit",
    "is_email_verified",
    "is_profile_lock",
    "is_driver_verified",
    "is_suspended_for_cancel",
    "is_suspended_for_negative_balance",
    "is_suspended_for_city",
];

const Items = ({ field, children }) => {
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
                <Select style={{ width: 230 }}>
                    {KEY_OPTIONS.map((op) => (
                        <Option key={op} value={op}>
                            {op}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                {...field}
                label="Value"
                name={[field.name, "value"]}
                fieldKey={[field.fieldKey, "value"]}
                rules={[
                    {
                        required: true,
                        message: "Missing value",
                    },
                ]}
            >
                <Select
                    style={{
                        width: 80,
                    }}
                >
                    {RADIO_VALUES.map((item) => (
                        <Option key={item.label} value={item.value}>
                            {item.label}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                {...field}
                label="Operator"
                name={[field.name, "operator"]}
                fieldKey={[field.fieldKey, "operator"]}
                rules={[
                    {
                        required: true,
                        message: "Missing operator",
                    },
                ]}
            >
                <Select style={{ width: 80 }}>
                    {OPERATORS.map((op) => (
                        <Option key={op} value={op}>
                            {op}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            {children}
        </Space>
    );
};

export default Items;
