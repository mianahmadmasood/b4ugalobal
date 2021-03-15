import React, { useState } from "react";
import { Modal } from "antd";
import EditGroupCriteriaForm from "./editGroupCriteriaForm";

const EditGroupCriteriaModal = ({ openModal, toggleModal, groupHandler, editGroupId, editGroupName }) => {



    return (
        <div>
            <Modal
                title={editGroupName || ""}
                visible={openModal}
                onOk={toggleModal}
                onCancel={toggleModal}
                width={850}
                footer={null}
            >
                <EditGroupCriteriaForm groupHandler={groupHandler} editGroupId={editGroupId} editGroupName={editGroupName} />
            </Modal>
        </div>
    );
};

export default EditGroupCriteriaModal;
