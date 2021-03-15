import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { showPushNotificationTemplateRequest } from '../../../redux/actions';

const { Option } = Select;
const { TextArea } = Input;

const PushNotificationTemplateForm = ({
    onAddPushNotification,
    editId
}) => {

    const dispatch = useDispatch()
    const formRef = useRef();
    const [form] = Form.useForm();

    const loadingPushNotificationTemplateAddButton = useSelector(state => state.pushNotificationTemplateReducer.loadingPushNotificationTemplateAddButton)
    const loadingPushNotificationTemplateShowButton = useSelector(state => state.pushNotificationTemplateReducer.loadingPushNotificationTemplateShowButton)
    const showPushNotificationTemplate = useSelector(state => state.pushNotificationTemplateReducer.showPushNotificationTemplate)

    const [originalImage, setOriginalImage] = useState("")
    const [thumbnailImage, setThumbnailImage] = useState("")

    useEffect(() => {


        if (editId) {
            dispatch(showPushNotificationTemplateRequest(editId))
        }

    }, [editId])


    useEffect(() => {

        if (editId && showPushNotificationTemplate) {

            console.log('showPushNotificationTemplate :>> ', showPushNotificationTemplate);
            form.setFieldsValue(showPushNotificationTemplate)
            setOriginalImage("")
            setThumbnailImage("")


        }


    }, [showPushNotificationTemplate])

    const onFinish = (values) => {

        console.log("Success:", values);
        let copy = { ...values }
        copy.image_path = originalImage
        copy.thumbnail_path = thumbnailImage

        onAddPushNotification(copy, editId);

    };

    const originalImageHandler = (e) => {
        console.log('e.target.files[0] :>> ', e.target.files[0]);

        setOriginalImage(e.target.files[0])
    }

    const thumbnailImageHandler = (e) => {
        console.log('e.target.files[0] in thumbnail :>> ', e.target.files[0]);
        setThumbnailImage(e.target.files[0])
    }


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

                {!editId && <><Form.Item name="image_path" label="Image" rules={[
                    {
                        required: true,
                        message: "Please upload image",
                    },
                ]}>

                    <Input type="file" accept=".jpg, .jpeg , .png" name="image_path" onChange={originalImageHandler} />
                </Form.Item>


                    <Form.Item name="thumbnail_path" label="Thumbnail Image" rules={[
                        {
                            required: true,
                            message: "Please upload thumbnail image",
                        },
                    ]}>




                        <Input type="file" accept=".jpg, .jpeg , .png" name="thumbnail_path" onChange={thumbnailImageHandler} />
                    </Form.Item>

                </>
                }

                <Form.Item
                    label="Promo Code"
                    name="promo_code"
                    rules={[
                        {
                            required: true,
                            message: "Please input promo code",
                        },
                    ]}
                >
                    <Input />
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
                    <Button loading={loadingPushNotificationTemplateAddButton || loadingPushNotificationTemplateShowButton} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PushNotificationTemplateForm;
