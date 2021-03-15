import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button, Popconfirm, Pagination } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { addCampaignRequest, deleteCampaignRequest, getCampaignListRequest, updateCampaignRequest } from "../../redux/actions";

import WithModal from "../../components/Hoc/withModal";
import CompaignForm from "./compaignForm";
import CampaignFormEdit from "./campaignFormEdit";

const CompaignFormModal = WithModal(CompaignForm);
const CompaignFormModalEdit = WithModal(CampaignFormEdit);


const Compaigns = () => {
    const dispatch = useDispatch()
    // States
    const [openModal, setOpenModal] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [editCampaignId, setEditCampaignId] = useState(null)

    const [campaign, setCampaign] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = useSelector(state => state.campaignReducer.totalPages)
    const campaignList = useSelector(state => state.campaignReducer.campaignList)
    const loadingCampaignListButton = useSelector(state => state.campaignReducer.loadingCampaignListButton)
    const addedCampaign = useSelector(state => state.campaignReducer.addedCampaign)
    const updatedCampaign = useSelector(state => state.campaignReducer.updatedCampaign)
    const deleteCampaign = useSelector(state => state.campaignReducer.deleteCampaign)



    console.log('campaignList :>> ', campaignList);

    useEffect(() => {

        dispatch(getCampaignListRequest({ page: currentPage }))
    }, [addedCampaign !== null, updatedCampaign !== null, deleteCampaign !== null, currentPage])

    useEffect(() => {

        setCampaign(campaignList)

    }, [campaignList])

    useEffect(() => {
        if (updatedCampaign !== null) {
            setOpenModal(false)
            setOpenModalEdit(false)

        }
    }, [updatedCampaign !== null])


    useEffect(() => {
        if (addedCampaign !== null) {
            setOpenModal(false)
            setOpenModalEdit(false)
        }
    }, [addedCampaign !== null])



    const toggleModal = () => {
        setOpenModal(!openModal);
    };


    const toggleModalEdit = () => {
        setOpenModalEdit(!openModalEdit);
    };



    const onCampaignClick = (record) => {

        console.log('record :>> ', record);
        setOpenModalEdit(!openModalEdit);
        setEditCampaignId(record.id)
    }

    const COMPAIGN_COLUMNS = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },

        {
            title: "Total Count",
            dataIndex: "total_count",
            key: "total_count",
        },
        {
            title: "Group Id",
            dataIndex: "group_id",
            key: "group_id",
        },

        {
            title: "Template Id",
            dataIndex: "template_id",
            key: "template_id",
        },

        {
            title: 'Actions',
            dataIndex: 'operation',
            render: (_, record) =>

                campaign.length >= 1 ? (
                    <div className="flex space-x-3">

                        <div className="cursor-pointer" onClick={() => onCampaignClick(record)}><a>Edit</a></div>
                        <div><Popconfirm title="Sure to delete?" onConfirm={() => dispatch(deleteCampaignRequest(record.id))}>
                            <a>Delete</a>
                        </Popconfirm>
                        </div>
                    </div>

                ) : null,
        },
    ];

    const onSubmitValues = (values) => {

        let copy = { ...values }

        console.log('values in lift state :>> ', copy);

        dispatch(addCampaignRequest({ ...copy }))

    }


    const onSubmitValuesEdit = (values) => {

        let copy = { ...values }


        let dispatchedData = {
            ...copy,
            id: editCampaignId,
        }

        dispatch(updateCampaignRequest({ ...dispatchedData }))
        console.log('values in edit lift state  :>> ', dispatchedData);


        // dispatch(addCampaignRequest({ ...copy }))
    }



    const onChangePagination = (pageNo) => {
        console.log('on change pagination :>> ', pageNo);
        setCurrentPage(pageNo)
    }

    return (
        <div>
            <CompaignFormModal
                openModal={openModal}
                toggleModal={toggleModal}
                title="Add New Campaign"
                onSubmitValues={onSubmitValues}
            />

            <CompaignFormModalEdit
                openModal={openModalEdit}
                toggleModal={toggleModalEdit}
                title="Update Campaign"
                onSubmitValues={onSubmitValuesEdit}
                editCampaignId={editCampaignId}
            />

            <div style={{ textAlign: "right", marginBottom: "10px" }}>
                <Button onClick={toggleModal}>Add New Compaign</Button>
            </div>









            <div className="flex flex-col justify-between" style={{ minHeight: '70vh' }}>
                <div className="">
                    <Table loading={loadingCampaignListButton} rowKey={record => record.id} columns={COMPAIGN_COLUMNS} dataSource={campaign || []} pagination={false} />
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

export default Compaigns;
