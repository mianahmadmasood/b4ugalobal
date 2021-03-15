import React, { useState, useEffect } from "react";

import { Form, Input, Button, Space, Select } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const ROLE_OPTIONS = ["rider", "driver"];
const GENDER_OPTIONS = ["male", "female"];
const CITY_OPTIONS = [
    "Lahore",
    "Karachi",
    "Hyderabad",
    "Islamabad/Rawalpindi",
    "Peshawar",
];
const DOCUMENTS_OPTIONS = ["NotUploaded", "Processing", "Verified", "Rejected"];

const OPERATORS = ["in", "not in"];

const KEY_OPTIONS = [
    "role",
    "gender",
    "city",
    "id_card_status",
    "driving_license_status",
    "vehicle_picture_status",
    "inspection_report_status",
    "vehicle_registration_status",
    "police_clearance_status",
];

const MultiSelectItems = ({ field, children }) => {
    const [multiOptions, setMultiOptions] = useState([...ROLE_OPTIONS]);
    const [keyValue, setKeyValue] = useState("");
    const [selectedValues, setSelectedValues] = useState(multiOptions[0]);

    const onMultiChange = (values) => {
        console.log("values", values);
        setSelectedValues([...values]);
    };

    const onKeyValueChange = (value) => {
        setKeyValue(value);
    };

    useEffect(() => {
        switch (keyValue) {
            case "city":
                setMultiOptions([...CITY_OPTIONS]);
                break;
            case "role":
                setMultiOptions([...ROLE_OPTIONS]);
                break;
            case "gender":
                setMultiOptions([...GENDER_OPTIONS]);
                break;

            default:
                setMultiOptions([...DOCUMENTS_OPTIONS]);

                break;
        }
    }, [keyValue]);

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
                <Select
                    style={{ width: 200 }}
                    vlaue={keyValue}
                    onChange={onKeyValueChange}
                >
                    {KEY_OPTIONS.map((op) => (
                        <Option key={op} value={op}>
                            {op}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                {...field}
                label="Values"
                style={{ width: "100%" }}
                name={[field.name, "value"]}
                fieldKey={[field.fieldKey, "value"]}
                rules={[
                    {
                        required: true,
                        message: "Missing Values",
                    },
                ]}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ minWidth: 200 }}
                    value={selectedValues}
                    onChange={onMultiChange}
                    placeholder="Please select"
                >
                    {multiOptions.map((opt) => (
                        <Option key={opt}>{opt}</Option>
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

export default MultiSelectItems;
