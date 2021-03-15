import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from 'react-redux'


const GroupForm = ({ groupHandler, reset }) => {
    const [form] = Form.useForm();
    const formRef = React.createRef();
    const loadingGroupNameAddButton = useSelector(state => state.groupNameReducer.loadingGroupNameAddButton)

    useEffect(() => {

    }, [])


    useEffect(() => {
        onReset()
        console.log('Reset :>> ');

    }, [reset])


    const onReset = () => {
        formRef.current.resetFields();

    };


    const onFinish = (values) => {
        console.log('values :>> ', values);
        groupHandler(values)
    };

    return (
        <div>
            <Form

                form={form}
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                autoComplete="off"
                ref={formRef}
            >
                <Form.Item
                    name="name"
                    label="Group Name"
                    rules={[
                        {
                            required: true,
                            message: "Missing Group Name",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item style={{ marginTop: 20, textAlign: "right" }}>
                    <Button loading={loadingGroupNameAddButton} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default GroupForm;
