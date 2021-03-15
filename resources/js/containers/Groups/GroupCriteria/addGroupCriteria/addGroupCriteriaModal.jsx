import React, { useState } from "react";
import { Modal } from "antd";
import AddGroupCriteriaForm from "./addGroupCriteriaForm";

const NewGroupModal = ({ openModal, toggleModal, groupHandler }) => {


    return (
        <div>
            <Modal
                title="ADD NEW GROUP CRITERIA"
                visible={openModal}
                onOk={toggleModal}
                onCancel={toggleModal}
                width={600}
                footer={null}
            >
                <AddGroupCriteriaForm groupHandler={groupHandler} reset={toggleModal} />
            </Modal>
        </div>
    );
};

export default NewGroupModal;
