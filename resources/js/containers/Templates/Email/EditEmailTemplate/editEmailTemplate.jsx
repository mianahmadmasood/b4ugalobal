import React, { useRef, useState, useEffect } from "react";
import { render } from "react-dom";
import { Form, Input, Button, Select, Col, Row } from "antd";
const { Option } = Select;
import EmailEditor from "react-email-editor";
import Notification from '../../../../components/Notification/notification';
import { useDispatch, useSelector } from 'react-redux'
import { showEmailTemplateRequest } from '../../../../redux/actions';

const App = ({ onExport, selectedTemplateId, toggleModal }) => {

    const dispatch = useDispatch()

    const formRef = useRef();

    const emailEditorRef = useRef(null);
    const loadingEmailTemplateAddButton = useSelector(state => state.emailTemplateReducer.loadingEmailTemplateAddButton)
    const loadingEmailTemplateShowButton = useSelector(state => state.emailTemplateReducer.loadingEmailTemplateShowButton)
    const showEmailTemplate = useSelector(state => state.emailTemplateReducer.showEmailTemplate)

    const [emailTemplate, setEmailTemplate] = useState(null)
    const [subject, setSubject] = useState(null)
    const [category, setCategory] = useState(null)


    useEffect(() => {
    }, [loadingEmailTemplateShowButton]);


    useEffect(() => {

        dispatch(showEmailTemplateRequest(selectedTemplateId))

    }, [selectedTemplateId])


    useEffect(() => {

        if (showEmailTemplate) {
            setEmailTemplate(showEmailTemplate)
            setCategory(showEmailTemplate.category)
            setSubject(showEmailTemplate.subject)

        }

    }, [showEmailTemplate])

    useEffect(() => {

        if (emailTemplate !== null) {

            onLoad(emailTemplate.design)

        }

    }, [emailTemplate])


    const exportJson = () => {
        emailEditorRef.current.editor.exportHtml((data) => {


            let copy = { email_content: data }
            if (subject == "" || subject == null || category == "" || category == null) {
                Notification('error', 'Empty Fields', 'Please Fill out all the fields')
            }
            else {

                copy.subject = subject
                copy.category = category
                copy.medium = "EMAIL"
                onExport(copy);
                // toggleModal();
            }

        });
    };



    // const toggleModal = () => {
    //     emailEditorRef.current.editor.loadDesign({});

    // }

    const onLoad = (design) => {


        console.log('templateJson :>> ', JSON.parse(design));
        let jsonTemplate = JSON.parse(design)
        if (design) {
            const templateJson = { ...jsonTemplate };
            return emailEditorRef.current.editor.loadDesign(templateJson);
        }
    };



    const onSelectHandler = (value) => {

        console.log('e.target.value :>> ', value);
        setCategory(value)
    };

    const onInputHandler = (e) => {
        setSubject(e.target.value)


    };

    return (
        <div>
            <div>
                {
                    // <button onClick={exportHtml}>Export HTML</button>
                }
                <Row justify="end" className="mb-3">
                    <Button loading={loadingEmailTemplateAddButton || loadingEmailTemplateShowButton} onClick={exportJson}>Save</Button>
                </Row>

                <Row gutter={[0, 5]}>
                    <Col xs={2} md={2} lg={2} xl={2} xxl={2}>
                        Subject :
    </Col>
                    <Col xs={22} md={22} lg={22} xl={22} xxl={22}>
                        <Input disabled={loadingEmailTemplateShowButton} type="text" name="subject" value={subject} onChange={onInputHandler} />
                    </Col>

                    <Col xs={2} md={2} lg={2} xl={2} xxl={2}>
                        Category::
    </Col>
                    <Col xs={22} md={22} lg={22} xl={22} xxl={22}>
                        <Select disabled={loadingEmailTemplateShowButton} onChange={onSelectHandler} value={category} style={{ width: '100%' }}>
                            <Option value="PROMO">PROMO</Option>
                            <Option value="NEWS">NEWS</Option>
                            <Option value="ALERT">ALERT</Option>

                        </Select>    </Col>
                </Row>

            </div>
            <EmailEditor ref={emailEditorRef} />

        </div>
    );
};

export default App;
