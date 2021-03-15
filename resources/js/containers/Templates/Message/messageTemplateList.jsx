import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, Spin } from "antd";
import MessageTemplateForm from "./messageTemplateForm";
import WithModal from "../../../components/Hoc/withModal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { MinusCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { addMessageTemplateRequest, deleteMessageTemplateRequest, getMessageTemplateListRequest, updateMessageTemplateRequest } from '../../../redux/actions';

const MessageEditorModal = WithModal(MessageTemplateForm);


const MessageTemplate = () => {

    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [editId, setEditId] = useState(null);

    const [messageTemplates, setMessageTemplates] = useState(null);
    const messageTemplateReducer = useSelector(state => state.messageTemplateReducer.messageTemplateList)
    const loadingMessageTemplateListButton = useSelector(state => state.messageTemplateReducer.loadingMessageTemplateListButton)

    const addedMessageTemplate = useSelector(state => state.messageTemplateReducer.addedMessageTemplate)
    const deleteMessageTemplate = useSelector(state => state.messageTemplateReducer.deleteMessageTemplate)
    const updatedMessageTemplate = useSelector(state => state.messageTemplateReducer.updatedMessageTemplate)
    const loadingMessageTemplateRemoveButton = useSelector(state => state.messageTemplateReducer.loadingMessageTemplateRemoveButton)

    const loadingMessageTemplateAddButton = useSelector(state => state.messageTemplateReducer.loadingMessageTemplateAddButton)

    useEffect(() => {

        dispatch(getMessageTemplateListRequest())

    }, [addedMessageTemplate !== null, deleteMessageTemplate !== null, updatedMessageTemplate !== null])

    useEffect(() => {
        setMessageTemplates(messageTemplateReducer)
    }, [messageTemplateReducer])


    useEffect(() => {

        setOpenModal(false)

    }, [addedMessageTemplate !== null, updatedMessageTemplate !== null])



    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const onTemplateClick = (id) => {

        setEditId(id)
        toggleModal();
    };

    const onAddNew = () => {
        setEditId(null)
        toggleModal();
    };

    const onAddMessage = (message, id) => {


        if (id) {

            let copy = { ...message };
            copy.id = id
            copy.medium = 'SMS'
            console.log('copy in edit :>> ', copy);
            dispatch(updateMessageTemplateRequest(copy))

        }
        else {
            let copy = { ...message };
            copy.medium = 'SMS'
            console.log('copy in add :>> ', copy);
            dispatch(addMessageTemplateRequest(copy))
        }



    };

    const onDeleteMessageTemplateHandler = (id) => {

        dispatch(deleteMessageTemplateRequest(id))


    }

    return (
        <div>
            <MessageEditorModal
                openModal={openModal}
                toggleModal={toggleModal}
                title={editId ? "Update SMS" : "Add SMS"}
                selectedTemplate={selectedTemplate}
                onAddMessage={onAddMessage}
                editId={editId}
                style={{ top: 5 }}
            />





            <div style={{ textAlign: "right", marginBottom: "10px" }}>

                <Button
                    onClick={onAddNew}
                    disabled={loadingMessageTemplateAddButton}
                >
                    {loadingMessageTemplateAddButton || loadingMessageTemplateRemoveButton ? <Spin size="small" /> : "Add New SMS Template"}
                </Button>
            </div>

            {loadingMessageTemplateListButton ? <Spin size="large" style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} /> :


                <Row>
                    {messageTemplates && messageTemplates.length > 0 &&
                        messageTemplates.map((template, i) => (
                            <Col
                                lg={8}
                                md={8}
                                xl={8}
                                sm={24}
                                xs={24}
                                key={i}
                                style={{ padding: 10, overflow: "auto" }}
                            >
                                <Card style={{ borderWidth: 1, borderColor: '#CEDCE4', borderStyle: 'solid' }}
                                    title={template.subject}
                                    extra={<button disabled={loadingMessageTemplateRemoveButton}
                                        className="bg-red-500 px-2 pb-2 text-white rounded cursor-pointer"
                                        onClick={() => onDeleteMessageTemplateHandler(template.id)}>
                                        {loadingMessageTemplateRemoveButton ? "..." : <DeleteOutlined />}
                                    </button>}>
                                    <div
                                        style={{
                                            cursor: "pointer",
                                        }}
                                        onClick={() => onTemplateClick(template.id)}
                                    >
                                        {template.txt}

                                    </div>
                                </Card>
                            </Col>
                        ))}
                </Row>
            }
        </div>
    );
};

export default MessageTemplate;
