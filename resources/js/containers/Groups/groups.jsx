import React, { useEffect, useState } from "react";
import { Button, Pagination, Spin } from "antd";
import { Table, Tag, Space, Row, Col, Card, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";

import AddGroupNameModal from './GroupName/addGroupNameModal'
import EditGroupNameModal from './GroupName/editGroupNameModal'
import EditGroupCriteriaModal from './GroupCriteria/editGroupCriteriaModal'

import { addGroupNameRequest, deleteGroupNameRequest, updateGroupNameRequest } from "../../redux/GroupName/actions";
import { addGroupRequest } from '../../redux/GroupName/actions';
import { getGroupNameListRequest } from '../../redux/GroupName/actions';
import { deleteGroupRequest } from '../../redux/GroupName/actions';
import { deleteGroupCriteriaRequest, updateGroupCriteriaRequest } from '../../redux/actions';

const { Column, ColumnGroup } = Table;

const Groups = () => {
    const dispatch = useDispatch();
    const [addGroupNameOpenModal, setAddGroupNameOpenModal] = useState(false);
    const [editGroupNameOpenModal, setEditGroupNameOpenModal] = useState(false);
    const [editGroupNameId, setEditGroupNameId] = useState(null)
    const [editGroupName, setEditGroupName] = useState(null)

    const [editGroupCriteriaOpenModal, setEditGroupCriteriaOpenModal] = useState(false);

    const [groupNameList, setGroupNameList] = useState(null);


    const loadingGroupNameAddButton = useSelector(
        (state) => state.groupNameReducer.loadingGroupNameAddButton
    );

    const groupNameListReducer = useSelector(state => state.groupNameReducer.groupNameList)
    // const addedGroupCriteriaReducer = useSelector(state => state.groupCriteriaReducer.addedGroupCriteria)
    const deleteGroupName = useSelector(state => state.groupNameReducer.deleteGroupName)
    const addedGroupName = useSelector(state => state.groupNameReducer.addedGroupName)
    const updatedGroupName = useSelector(state => state.groupNameReducer.updatedGroupName)
    const loadingGroupNameListButton = useSelector(state => state.groupNameReducer.loadingGroupNameListButton)
    const totalPages = useSelector(state => state.groupNameReducer.totalPages)

    const [currentPage, setCurrentPage] = useState(1)



    useEffect(() => {
        dispatch(getGroupNameListRequest({ page: currentPage }))
    }, [deleteGroupName !== null, addedGroupName !== null, updatedGroupName !== null, currentPage])



    // useEffect(() => {
    //     setEditGroupNameOpenModal(false)

    // }, [addedGroupCriteriaReducer !== null])

    useEffect(() => {


        setGroupNameList(groupNameListReducer)

    }, [groupNameListReducer])


    // Group Name

    // Add Group Name
    const addGroupNameToggleModal = () => {
        setAddGroupNameOpenModal(!addGroupNameOpenModal);
    };

    const addGroupNameSubmitHandler = (newGroup) => {
        console.log("add group name", newGroup);
        dispatch(addGroupNameRequest(newGroup));
        addGroupNameToggleModal();
    };

    // Edit Group Name

    const editGroupNameToggleModal = () => {
        setEditGroupNameOpenModal(!editGroupNameOpenModal);
    };

    const editGroupNameHandler = (id) => {

        console.log('object :>> ', id);
        editGroupNameToggleModal()
        setEditGroupNameId(id)
    }

    const editGroupNameSubmitHandler = (newGroup) => {
        console.log("edit group name", newGroup);

        let dispatchedData = {
            ...newGroup,
            id: editGroupNameId
        }

        console.log('dispatchedData fgf :>> ', dispatchedData);


        dispatch(updateGroupNameRequest(dispatchedData))
        editGroupNameToggleModal()
    }


    // Edit Group Criteria
    const editGroupCriteriaToggleModal = () => {
        setEditGroupCriteriaOpenModal(!editGroupCriteriaOpenModal);
    };

    const editGroupCriteriaHandler = (id, name) => {

        console.log('object :>> ', id, name);
        setEditGroupNameId(id)
        setEditGroupName(name)
        editGroupCriteriaToggleModal()
    }

    const editGroupCriteriaSubmitHandler = (newGroup) => {
        // console.log("edit group name", newGroup);
        if (newGroup.deleteField === true) {

            dispatch(deleteGroupCriteriaRequest(newGroup.id))
        }

        else {
            let dispatchedData = {
                id: newGroup.id,
                group_id: newGroup.group_id,
                group_key: newGroup.key,
                group_operator: newGroup.operator,
                group_type: newGroup.type,
                group_value: newGroup.value
            }


            console.log('edit group criteria submit handler in component :>> ', dispatchedData);
            dispatch(updateGroupCriteriaRequest(dispatchedData))
        }

    }








    const GROUP_COLUMNS = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",

        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (_, record) =>


                groupNameList.length >= 1 ? (
                    <div className="flex space-x-3">

                        <div className="cursor-pointer" onClick={() => editGroupCriteriaHandler(record.id, record.name)}><a>{record.name}</a></div>

                    </div>

                ) : null

        },

        {
            title: 'Actions',
            dataIndex: 'operation',
            key: 'operation',
            render: (_, record) =>


                groupNameList.length >= 1 ? (
                    <div className="flex space-x-3">

                        <div className="cursor-pointer" onClick={() => editGroupNameHandler(record.id)}><a>Edit</a></div>
                        <div><Popconfirm title="Sure to delete?" onConfirm={() => dispatch(deleteGroupNameRequest(record.id))}>
                            <a>Delete</a>
                        </Popconfirm>
                        </div>
                    </div>

                ) : null,
        },

    ];


    const onChangePagination = (pageNo) => {
        console.log('on change pagination :>> ', pageNo);
        setCurrentPage(pageNo)
    }




    return (
        <div>
            <AddGroupNameModal
                toggleModal={addGroupNameToggleModal}
                openModal={addGroupNameOpenModal}
                groupHandler={addGroupNameSubmitHandler}
            />

            <EditGroupNameModal
                toggleModal={editGroupNameToggleModal}
                openModal={editGroupNameOpenModal}
                groupHandler={editGroupNameSubmitHandler}
                editGroupId={editGroupNameId}

            />


            <EditGroupCriteriaModal
                toggleModal={editGroupCriteriaToggleModal}
                openModal={editGroupCriteriaOpenModal}
                groupHandler={editGroupCriteriaSubmitHandler}
                editGroupId={editGroupNameId}
                editGroupName={editGroupName}


            />
            <div style={{ textAlign: "right", margin: 10 }}>
                <Button
                    onClick={addGroupNameToggleModal}
                    disabled={loadingGroupNameAddButton}
                >
                    {loadingGroupNameAddButton ? <Spin size="small" /> : "Add New Group"}
                </Button>
            </div>
            <div className="flex flex-col justify-between" style={{ minHeight: '70vh' }}>
                <div className="">
                    <Table loading={loadingGroupNameListButton} columns={GROUP_COLUMNS} rowKey={record => record.id} dataSource={groupNameList || []} pagination={false} />
                </div>

                <div className="flex justify-end items-end mt-4">

                    <Pagination
                        onChange={onChangePagination}
                        showSizeChanger={false}
                        defaultCurrent={1}
                        total={totalPages || 10}
                    />

                </div>

            </div>




        </div>
    );
};

export default Groups;