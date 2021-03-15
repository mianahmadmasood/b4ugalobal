import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { showMessageTemplateRequest } from '../../../redux/actions';

const { Option } = Select;
const { TextArea } = Input;

const MessageTemplateForm = ({
    onAddMessage,
    editId
}) => {

    const dispatch = useDispatch()
    const formRef = useRef();
    const [form] = Form.useForm();

    const loadingMessageTemplateAddButton = useSelector(state => state.messageTemplateReducer.loadingMessageTemplateAddButton)
    const loadingMessageTemplateShowButton = useSelector(state => state.messageTemplateReducer.loadingMessageTemplateShowButton)
    const showMessageTemplate = useSelector(state => state.messageTemplateReducer.showMessageTemplate)


    useEffect(() => {


        if (editId) {
            console.log('editId :>> ', editId);
            dispatch(showMessageTemplateRequest(editId))
        }

    }, [editId])


    useEffect(() => {

        if (editId && showMessageTemplate) {

            console.log('showMessageTemplate :>> ', showMessageTemplate);
            form.setFieldsValue(showMessageTemplate)
        }


    }, [showMessageTemplate])

    const onFinish = (values) => {

        console.log("Success:", values);

        onAddMessage(values, editId);

    };

    return (
        <div>
            <Form
                ref={formRef}
                onFinish={onFinish}
                name="messageTemplate"
                form={form}

            >
                <Form.Item
                    label="Template Name"
                    name="subject"
                    rules={[
                        {
                            required: true,
                            message: "Please input template name",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Message Text"
                    name="txt"
                    rules={[
                        {
                            required: true,
                            message: "Please enter message text",
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Write your message here"
                        autoSize={{ minRows: 4, maxRows: 8 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Select Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: "Please Select Category",
                        },
                    ]}
                >
                    <Select>
                        <Option key="PROMO">PROMO</Option>
                        <Option key="NEWS"> NEWS</Option>
                        <Option key="ALERT"> ALERT</Option>

                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button loading={loadingMessageTemplateAddButton || loadingMessageTemplateShowButton} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default MessageTemplateForm;
