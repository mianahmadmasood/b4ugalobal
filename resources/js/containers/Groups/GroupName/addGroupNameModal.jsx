import React, { useState } from "react";
import { Modal } from "antd";
import AddGroupNameForm from "./addGroupNameForm";

const NewGroupModal = ({ openModal, toggleModal, groupHandler }) => {
    return (
        <div>
            <Modal
                title="ADD NEW GROUP"
                visible={openModal}
                onOk={toggleModal}
                onCancel={toggleModal}
                width={600}
                footer={null}
            >
                <AddGroupNameForm groupHandler={groupHandler} reset={toggleModal} />
            </Modal>
        </div>
    );
};

export default NewGroupModal;
