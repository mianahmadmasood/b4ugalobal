import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, Spin } from "antd";
import PushNotificationTemplateForm from "./pushNotificationTemplateForm";
import WithModal from "../../../components/Hoc/withModal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { MinusCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { addPushNotificationTemplateRequest, deletePushNotificationTemplateRequest, getPushNotificationTemplateListRequest, updatePushNotificationTemplateRequest } from '../../../redux/actions';
import { SERVER_URL } from '../../../constants/commonValues';

const PushNotificationEditorModal = WithModal(PushNotificationTemplateForm);


const PushNotificationTemplate = () => {

    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [editId, setEditId] = useState(null);

    const [pushNotificationTemplates, setPushNotificationTemplates] = useState(null);
    const pushNotificationTemplateReducer = useSelector(state => state.pushNotificationTemplateReducer.pushNotificationTemplateList)
    const loadingPushNotificationTemplateListButton = useSelector(state => state.pushNotificationTemplateReducer.loadingPushNotificationTemplateListButton)

    const addedPushNotificationTemplate = useSelector(state => state.pushNotificationTemplateReducer.addedPushNotificationTemplate)
    const deletePushNotificationTemplate = useSelector(state => state.pushNotificationTemplateReducer.deletePushNotificationTemplate)
    const updatedPushNotificationTemplate = useSelector(state => state.pushNotificationTemplateReducer.updatedPushNotificationTemplate)
    const loadingPushNotificationTemplateRemoveButton = useSelector(state => state.pushNotificationTemplateReducer.loadingPushNotificationTemplateRemoveButton)

    const loadingPushNotificationTemplateAddButton = useSelector(state => state.pushNotificationTemplateReducer.loadingPushNotificationTemplateAddButton)

    useEffect(() => {

        dispatch(getPushNotificationTemplateListRequest())

    }, [addedPushNotificationTemplate !== null, deletePushNotificationTemplate !== null, updatedPushNotificationTemplate !== null])

    useEffect(() => {
        setPushNotificationTemplates(pushNotificationTemplateReducer)
    }, [pushNotificationTemplateReducer])


    useEffect(() => {

        setOpenModal(false)

    }, [addedPushNotificationTemplate !== null, updatedPushNotificationTemplate !== null])



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

    const onAddPushNotification = (pushNotification, id) => {


        if (id) {

            let copy = { ...pushNotification };
            copy.id = id
            copy.medium = 'SMS'
            console.log('copy in edit :>> ', copy);
            let form_data = new FormData();
            form_data.append('id', copy.id)
            form_data.append('subject', copy.subject)
            form_data.append('category', copy.category)
            form_data.append('medium', copy.medium)
            form_data.append('image_path', null)
            form_data.append('thumbnail_path', null)
            form_data.append('promo_code', copy.promo_code)

            // // Display the key/value pairs
            // for (let pair of form_data.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }
            dispatch(updatePushNotificationTemplateRequest(copy))

        }
        else {
            let copy = { ...pushNotification };
            copy.medium = 'PUSH_NOTIFICATION'
            console.log('copy in add :>> ', copy);


            let form_data = new FormData();

            form_data.append('subject', copy.subject)
            form_data.append('category', copy.category)
            form_data.append('medium', copy.medium)
            form_data.append('image_path', copy.image_path)
            form_data.append('thumbnail_path', copy.thumbnail_path)
            form_data.append('promo_code', copy.promo_code)

            // // Display the key/value pairs
            // for (let pair of form_data.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }

            dispatch(addPushNotificationTemplateRequest(form_data))
        }



    };

    const onDeletePushNotificationTemplateHandler = (id) => {

        dispatch(deletePushNotificationTemplateRequest(id))


    }

    return (
        <div>
            <PushNotificationEditorModal
                openModal={openModal}
                toggleModal={toggleModal}
                title={editId ? "Update PUSH NOTIFICATION" : "Add PUSH NOTIFICATION"}
                selectedTemplate={selectedTemplate}
                onAddPushNotification={onAddPushNotification}
                editId={editId}
                style={{ top: 5 }}
            />





            <div style={{ textAlign: "right", marginBottom: "10px" }}>

                <Button
                    onClick={onAddNew}
                    disabled={loadingPushNotificationTemplateAddButton}
                >
                    {loadingPushNotificationTemplateAddButton || loadingPushNotificationTemplateRemoveButton ? <Spin size="small" /> : "Add New Notification Template"}
                </Button>
            </div>

            {loadingPushNotificationTemplateListButton ? <Spin size="large" style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} /> :


                <Row>
                    {pushNotificationTemplates && pushNotificationTemplates.length > 0 &&
                        pushNotificationTemplates.map((template, i) => (
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
                                    extra={<button disabled={loadingPushNotificationTemplateRemoveButton}
                                        className="bg-red-500 px-2 pb-2 text-white rounded cursor-pointer"
                                        onClick={() => onDeletePushNotificationTemplateHandler(template.id)}>
                                        {loadingPushNotificationTemplateRemoveButton ? "..." : <DeleteOutlined />}
                                    </button>}>
                                    <div

                                    >
                                        {template.txt}

                                    </div>
                                    <div style={{
                                        cursor: "pointer",
                                    }}
                                        onClick={() => onTemplateClick(template.id)}>
                                        {/* <img src={require(`../../../../../storage/app/${template.image_path}`).default} style={{ height: '100%', width: '100%' }} /> */}

                                        {/* <img src={require(`${SERVER_URL}${template.image_path}`).default} style={{ height: '100%', width: '100%' }} /> */}

                                        <img src={`${template.image_path}`} />
                                    </div>

                                </Card>
                            </Col>
                        ))}
                </Row>
            }
        </div>
    );
};

export default PushNotificationTemplate;
