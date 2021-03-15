import React, { useState } from "react";
import { Modal } from "antd";
import EditGroupNameForm from "./editGroupNameForm";

const NewGroupModal = ({ openModal, toggleModal, groupHandler, editGroupId }) => {
    return (
        <div>
            <Modal
                title="UPDATE GROUP NAME"
                visible={openModal}
                onOk={toggleModal}
                onCancel={toggleModal}
                width={600}
                footer={null}
            >
                <EditGroupNameForm groupHandler={groupHandler} reset={toggleModal} editGroupId={editGroupId} />
            </Modal>
        </div>
    );
};

export default NewGroupModal;
