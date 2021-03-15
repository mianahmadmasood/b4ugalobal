import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Select, Divider, Spin } from "antd";
import { MinusCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import RadioItems from "../groupComponents/radioItems";
import MutliSeletItems from "../groupComponents/multiSelectItems";
import DateRangeItems from "../groupComponents/dateItems";
import { useDispatch, useSelector } from 'react-redux'
import AddGroupCriteriaModal from './addGroupCriteria/addGroupCriteriaModal'



import { addGroupCriteriaRequest, showGroupCriteriaRequest } from '../../../redux/actions';

const { Option } = Select;


const GroupForm = ({ groupHandler, editGroupId }) => {

    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [fieldTypes, setFieldTypes] = useState([]);
    const [addGroupCriteriaOpenModal, setAddGroupCriteriaOpenModal] = useState(false);
    const [customData, setCustomData] = useState(null)
    const [deleteField, setDeleteField] = useState(true)

    // Show group
    const showGroupCriteriaReducer = useSelector(state => state.groupCriteriaReducer.showGroupCriteria)
    const showGroupCriteriaLoading = useSelector(state => state.groupCriteriaReducer.loadingShowGroupCriteriaButton)
    const addedGroupCriteriaReducer = useSelector(state => state.groupCriteriaReducer.addedGroupCriteria)
    const loadingGroupCriteriaAddButton = useSelector(state => state.groupCriteriaReducer.loadingGroupCriteriaAddButton)
    const updatedGroupCriteria = useSelector(state => state.groupCriteriaReducer.updatedGroupCriteria)
    const deleteGroupCriteria = useSelector(state => state.groupCriteriaReducer.deleteGroupCriteria)



    useEffect(() => {
        console.log('editGroupId in group criteria :>> ', editGroupId);
        form.resetFields()
        dispatch(showGroupCriteriaRequest(editGroupId))

        setAddGroupCriteriaOpenModal(false)

    }, [editGroupId, addedGroupCriteriaReducer !== null, updatedGroupCriteria !== null, deleteGroupCriteria !== null])

    const [groupData, setGroupData] = useState(null)

    // Add Group Criteria
    const addGroupCriteriaToggleModal = () => {
        setAddGroupCriteriaOpenModal(!addGroupCriteriaOpenModal);
    };

    const addGroupCriteriaSubmitHandler = (newGroup) => {
        console.log("add group name", newGroup);

        let dispatchedData = {
            ...newGroup,
            group_id: editGroupId,
        }
        console.log('add group criteria :>> ', dispatchedData);

        dispatch(addGroupCriteriaRequest(dispatchedData));
    };


    useEffect(() => {
        form.resetFields()
        console.log('groupCriteriaReducer :>> ', showGroupCriteriaReducer);

        if (showGroupCriteriaReducer) {

            let copy = { ...showGroupCriteriaReducer }

            copy.group = copy.group_criteria
            delete copy['group_criteria']

            let newFieldType = []
            copy.group.forEach((item, i) => {
                newFieldType.push(copy.group[i].type)
            })


            form.setFieldsValue({ ...copy });
            setGroupData({ ...copy })
            setFieldTypes([...newFieldType])
        }
    }, [showGroupCriteriaReducer])


    const onFinish = async (values) => {
        const filteredData = await values.group.filter((item, i) => {
            return customData === i
        })

        const dispatchedData = {
            ...filteredData[0],
            deleteField: deleteField
        }
        console.log('dispatchedData :>> ', dispatchedData);

        groupHandler(dispatchedData)

    }

    const onAdd = (addFunc) => {
        setAddGroupCriteriaOpenModal(true)

    };
    const onRemove = (index) => {
        console.log('index :>> ', index, groupData);
        setDeleteField(true)
        setCustomData(index)
    };


    const onUpdate = (index) => {
        console.log('index :>> ', index, groupData);
        setDeleteField(false)
        setCustomData(index)

    };

    return (
        <div>
            <AddGroupCriteriaModal
                toggleModal={addGroupCriteriaToggleModal}
                openModal={addGroupCriteriaOpenModal}
                groupHandler={addGroupCriteriaSubmitHandler}
            />

            <Form
                form={form}
                name="dynamic_form_nest_item"
                autoComplete="off"
                onFinish={onFinish}
            >


                <Form.List name="group">
                    {(fields, { add, remove }) => (
                        <>
                            <Form.Item className="">
                                <div className="flex justify-end items-end">

                                    <Button
                                        color="primary"
                                        onClick={() => onAdd(add)}
                                        type="primary"
                                        disabled={showGroupCriteriaLoading}
                                        icon={!showGroupCriteriaLoading && <PlusOutlined />}
                                    >
                                        {showGroupCriteriaLoading ? <Spin size="small" /> : "Add Group Criteria"}

                                    </Button>
                                </div>

                            </Form.Item>
                            {fields.map((field, i) => {
                                if (fieldTypes[i] === "BOOLEAN") {
                                    return (
                                        <RadioItems key={i} field={field}>


                                            <button className="bg-green-400 px-2 pb-2 mb-1 text-white rounded" onClick={() =>
                                                onUpdate(
                                                    i
                                                )
                                            } type="dashed"><EditOutlined /></button>
                                            <button className="bg-red-600 px-2 pb-2 mb-1 text-white rounded" onClick={() =>
                                                onRemove(
                                                    i)
                                            } type="dashed"><DeleteOutlined /></button>

                                        </RadioItems>
                                    )
                                }
                                else if (fieldTypes[i] === "ENUM")
                                    return (
                                        <MutliSeletItems key={i} field={field}>
                                            <button className="bg-green-400 px-2 pb-2 mb-1 text-white rounded" onClick={() =>
                                                onUpdate(
                                                    i
                                                )
                                            } type="dashed"><EditOutlined /></button>
                                            <button className="bg-red-600 px-2 pb-2 mb-1 text-white rounded" onClick={() =>
                                                onRemove(
                                                    i)
                                            } type="dashed"><DeleteOutlined /></button>
                                        </MutliSeletItems>
                                    );
                                else if (fieldTypes[i] === "dateRange")
                                    return (
                                        <DateRangeItems key={i} field={field}>
                                            <button className="bg-green-400 px-2 pb-2 mb-1 text-white rounded" onClick={() =>
                                                onUpdate(
                                                    i
                                                )
                                            } type="dashed"><EditOutlined /></button>
                                            <button className="bg-red-600 px-2 pb-2 mb-1 text-white rounded" onClick={() =>
                                                onRemove(
                                                    i)
                                            } type="dashed"><DeleteOutlined /></button>
                                        </DateRangeItems>
                                    );
                            })}
                        </>
                    )}
                </Form.List>
            </Form>
        </div>
    );
};

export default GroupForm;
