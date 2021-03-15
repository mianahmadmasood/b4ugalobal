import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { getGroupNameListRequest } from '../../redux/GroupName/actions';
import RadioGroup from '../../components/RadioGroup/radioGroup';
import { getEmailTemplateListRequest, getMessageTemplateListRequest } from '../../redux/actions';
const { Option } = Select;
const CompaignForm = ({ onSubmitValues }) => {
    const dispatch = useDispatch()

    const [form] = Form.useForm();
    const formRef = React.createRef();
    const [groupNameList, setGroupNameList] = useState(null);
    const [radioSelect, setRadioSelect] = useState("SMS")

    const loadingGroupNameListButton = useSelector(
        (state) => state.groupNameReducer.loadingGroupNameListButton
    );

    const groupNameListReducer = useSelector(state => state.groupNameReducer.groupNameList)

    const loadingCampaignAddButton = useSelector(state => state.campaignReducer.loadingCampaignAddButton)


    useEffect(() => {
        dispatch(getGroupNameListRequest())
    }, [])

    useEffect(() => {


        setGroupNameList(groupNameListReducer)

    }, [groupNameListReducer])




    // Email Actions
    const [emailTemplates, setEmailTemplates] = useState(null);

    const templateListReducer = useSelector(state => state.emailTemplateReducer.templateList)
    const loadingTemplateListButton = useSelector(state => state.emailTemplateReducer.loadingTemplateListButton)


    useEffect(() => {
        dispatch(getEmailTemplateListRequest())

    }, [])

    useEffect(() => {
        setEmailTemplates(templateListReducer)
    }, [templateListReducer])



    // SMS Template Options
    const [messageTemplates, setMessageTemplates] = useState(null);
    const messageTemplateReducer = useSelector(state => state.messageTemplateReducer.messageTemplateList)
    const loadingMessageTemplateListButton = useSelector(state => state.messageTemplateReducer.loadingMessageTemplateListButton)


    useEffect(() => {

        dispatch(getMessageTemplateListRequest())

    }, [])

    useEffect(() => {
        setMessageTemplates(messageTemplateReducer)
    }, [messageTemplateReducer])


    const onFinish = (values) => {

        let dispatchedData = { ...values }
        dispatchedData.status = "created"

        console.log("dispatchedData", dispatchedData);

        onSubmitValues(dispatchedData)
    };


    const onRadioChange = (e) => {
        console.log('e.target.value :>> ', e.target.value);
        form.setFieldsValue({
            template_id: null,
        });
        setRadioSelect(e.target.value)


    }
    return (
        <div>
            <Form onFinish={onFinish} name="compaign" form={form} ref={formRef} >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input compaign name",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Total Count"
                    name="total_count"
                    rules={[
                        {
                            required: true,
                            message: "Please input total count",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Select Group"
                    name="group_id"
                    rules={[
                        {
                            required: true,
                            message: "Please Select Group",
                        },
                    ]}
                >
                    <Select loading={loadingGroupNameListButton} disabled={loadingGroupNameListButton}>


                        {groupNameList && groupNameList.map((group, i) => {
                            return <Option key={group.id} value={group.id}>{group.name}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Row className="ml-2 mt-2 mb-5">
                    <Col span={10}  >Select Template Type :</Col>
                    <Col span={14}>
                        <RadioGroup options={["SMS", 'EMAIL']} onChange={onRadioChange} value={radioSelect} />

                    </Col>
                </Row>

                {radioSelect === "SMS" ?
                    <Form.Item
                        label="Select SMS Template"
                        name="template_id"
                        rules={[
                            {
                                required: true,
                                message: "Please Select SMS Template",
                            },
                        ]}
                    >
                        <Select loading={loadingMessageTemplateListButton} disabled={loadingMessageTemplateListButton}>


                            {messageTemplates && messageTemplates.map((group, i) => {
                                return <Option key={group.id} value={group.id}>{group.subject}</Option>
                            })}
                        </Select>
                    </Form.Item>
                    :


                    <Form.Item
                        label="Select Email Template"
                        name="template_id"
                        rules={[
                            {
                                required: true,
                                message: "Please Select Email Template",
                            },
                        ]}
                    >
                        <Select loading={loadingTemplateListButton} disabled={loadingTemplateListButton}>


                            {templateListReducer && templateListReducer.map((group, i) => {
                                return <Option key={group.id} value={group.id}>{group.subject}</Option>
                            })}
                        </Select>
                    </Form.Item>

                }


                <Form.Item className="mt-2" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', width: '100%' }}>
                    <Button loading={loadingCampaignAddButton} type="primary" htmlType="submit" style={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CompaignForm;
