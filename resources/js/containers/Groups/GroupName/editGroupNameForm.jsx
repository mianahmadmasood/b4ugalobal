import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { showGroupNameRequest } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'



const GroupForm = ({ groupHandler, reset, editGroupId }) => {

    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const formRef = React.createRef();


    // Show group
    const showGroupNameReducer = useSelector(state => state.groupNameReducer.showGroupName)
    const showGroupNameLoading = useSelector(state => state.groupNameReducer.loadingShowGroupNameButton)


    useEffect(() => {

        form.resetFields()
        dispatch(showGroupNameRequest(editGroupId))
    }, [editGroupId, reset])


    useEffect(() => {
        form.resetFields()
        console.log('groupNameReducer :>> ', showGroupNameReducer);

        if (showGroupNameReducer) {

            form.setFieldsValue({ ...showGroupNameReducer });
        }
    }, [showGroupNameReducer])



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
                    <Button loading={showGroupNameLoading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default GroupForm;
