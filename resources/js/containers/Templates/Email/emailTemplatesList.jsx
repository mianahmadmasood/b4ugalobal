import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "antd";
import EmailTemplateEditor from "./addEmailTemplate/addEmailTemplate";
import EditEmailTemplateEditor from "./editEmailTemplate/editEmailTemplate";
import { MinusCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";


import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import WithModal from "../../../components/Hoc/withModal";
import { addEmailTemplateRequest, deleteEmailTemplateRequest, getEmailTemplateListRequest, updateEmailTemplateRequest } from '../../../redux/actions';
import htmlToImage from './htmlToImage';
import { Spin } from 'antd';
import { SERVER_URL } from '../../../constants/commonValues';
const EmailEditorModal = WithModal(EmailTemplateEditor);
const EditEmailEditorModal = WithModal(EditEmailTemplateEditor);


const EmailTemplatesList = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const [editOpenModal, setEditOpenModal] = useState(false);
    const [selectedTemplateId, setSelectedTemplateId] = useState(null);

    const [emailTemplates, setEmailTemplates] = useState(null);

    const templateListReducer = useSelector(state => state.emailTemplateReducer.templateList)
    const loadingEmailTemplateListButton = useSelector(state => state.emailTemplateReducer.loadingEmailTemplateListButton)
    const addedEmailTemplate = useSelector(state => state.emailTemplateReducer.addedEmailTemplate)
    const deleteEmailTemplate = useSelector(state => state.emailTemplateReducer.deleteEmailTemplate)
    const loadingEmailTemplateRemoveButton = useSelector(state => state.emailTemplateReducer.loadingEmailTemplateRemoveButton)
    const loadingEmailTemplateAddButton = useSelector(state => state.emailTemplateReducer.loadingEmailTemplateAddButton)
    const updatedEmailTemplate = useSelector(state => state.emailTemplateReducer.updatedEmailTemplate)


    useEffect(() => {

        dispatch(getEmailTemplateListRequest())

    }, [deleteEmailTemplate !== null, addedEmailTemplate !== null, updatedEmailTemplate !== null])

    useEffect(() => {




        // if (loadingEmailTemplateAddButton === true) {

        //     setTimeout(() => {
        //         window.location.reload()

        //     }, 6000)
        // }



    }, [loadingEmailTemplateAddButton === true])

    useEffect(() => {

        setOpenModal(false)
        setEditOpenModal(false)

    }, [addedEmailTemplate !== null, updatedEmailTemplate !== null])

    useEffect(() => {
        setEmailTemplates(templateListReducer)
    }, [templateListReducer])

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const editToggleModal = () => {
        setEditOpenModal(!editOpenModal);
    };

    editOnExport



    const onExport = async (exportedTemplate) => {

        var elemDiv = await document.createElement('div');
        await elemDiv.setAttribute("id", "screen");

        await document.body.appendChild(elemDiv);

        document.getElementById('screen').innerHTML = exportedTemplate.email_content.html


        const imageRes = await htmlToImage()
        console.log('imageRes :>> ', imageRes);


        let dispatchedData = {
            subject: exportedTemplate.subject,
            category: exportedTemplate.category,
            medium: exportedTemplate.medium,
            email_content: exportedTemplate.email_content.html,
            design: JSON.stringify(exportedTemplate.email_content.design),
            base64Image: imageRes

        }

        console.log('design :>> ', JSON.stringify(exportedTemplate.email_content.design));
        // console.log('design parse :>> ', JSON.parse(exportedTemplate.email_content.design));

        console.log('dispatchedData :>> ', dispatchedData);

        dispatch(addEmailTemplateRequest(dispatchedData))

    };



    // Edit Email Template 
    const editOnExport = async (exportedTemplate) => {

        var elemDiv = await document.createElement('div');
        await elemDiv.setAttribute("id", "screen");

        await document.body.appendChild(elemDiv);

        document.getElementById('screen').innerHTML = exportedTemplate.email_content.html


        const imageRes = await htmlToImage()
        console.log('imageRes :>> ', imageRes);

        let dispatchedData = {
            id: selectedTemplateId,
            subject: exportedTemplate.subject,
            category: exportedTemplate.category,
            medium: exportedTemplate.medium,
            email_content: exportedTemplate.email_content.html,
            design: JSON.stringify(exportedTemplate.email_content.design),
            base64Image: imageRes
        }

        // console.log('design :>> ', JSON.stringify(exportedTemplate.email_content.design));
        // console.log('design parse :>> ', JSON.parse(exportedTemplate.email_content.design));

        console.log('edit dispatchedData :>> ', dispatchedData);

        dispatch(updateEmailTemplateRequest(dispatchedData))

    };

    const onTemplateClick = (id) => {
        setSelectedTemplateId(id);
        editToggleModal();
    };

    const onAddNew = () => {
        setSelectedTemplateId(null);
        dispatch(getEmailTemplateListRequest())
        toggleModal();
    };


    const onDeleteEmailTemplateHandler = (id) => {

        dispatch(deleteEmailTemplateRequest(id))


    }


    return (
        <div>
            <EmailEditorModal
                openModal={openModal}
                toggleModal={toggleModal}
                title="Email Editor"
                size={1500}
                onExport={onExport}
                style={{ top: 5 }}
            />

            <EditEmailEditorModal
                openModal={editOpenModal}
                toggleModal={editToggleModal}
                title="Update Email"
                size={1500}
                selectedTemplateId={selectedTemplateId}
                onExport={editOnExport}
                style={{ top: 5 }}
            />
            <div style={{ textAlign: "right", marginBottom: "10px" }}>

                <Button onClick={onAddNew}>

                    {loadingEmailTemplateAddButton || loadingEmailTemplateRemoveButton ? <Spin size="small" /> : "Add New Email Template"}


                </Button>
            </div>

            {loadingEmailTemplateListButton ? <Spin size="large" style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} /> :
                <Row>
                    {templateListReducer && templateListReducer.length > 0 &&
                        templateListReducer.map((template, i) => (
                            <Col
                                xl={8}
                                lg={8}
                                md={12}
                                sm={12}
                                xs={24}
                                key={i}
                                style={{ padding: 10, overflow: "auto" }}
                            >

                                <Card style={{ borderWidth: 1, borderColor: '#CEDCE4', borderStyle: 'solid' }}
                                    title={template.subject}
                                    extra={<button disabled={loadingEmailTemplateRemoveButton}
                                        className="bg-red-500 px-2 pb-2 text-white rounded cursor-pointer"
                                        onClick={() => onDeleteEmailTemplateHandler(template.id)}>
                                        {loadingEmailTemplateRemoveButton ? "..." : <DeleteOutlined />}
                                    </button>}>



                                    <div
                                        style={{
                                            cursor: "pointer",
                                            objectFit: "contain",
                                        }}
                                        onClick={() => onTemplateClick(template.id)}

                                    >


                                        <img src={`${template.thumbnail_path}`} />
                                    </div>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>

            }


        </div>
    );
};

export default EmailTemplatesList;
