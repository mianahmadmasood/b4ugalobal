import React from "react";
import { Button, Modal } from "antd";

const WithModal = (WrappedComponent) => {
    const NewModal = ({
        openModal,
        toggleModal,
        title,
        size,
        applyButton,
        btnClick,
        saveBtnText,
        isLoading,
        style,
        ...otherProps
    }) => {
        return (
            <Modal
                style={style || {}}
                title={title}
                visible={openModal}
                onCancel={toggleModal}
                onOk={toggleModal}
                width={size}
                destroyOnClose={true}

                footer={null}>
                {<WrappedComponent toggleModal={toggleModal} {...otherProps} />}
            </Modal>
        );
    };
    return NewModal;
};

export default WithModal;
