import React from 'react';
import { Modal } from 'antd';

const CustomModal = (props) => {
const { isModalVisible, setModalVisibility, onConfirm, onCancel, title } = props;
  return (
    <>
      <Modal title={title} open={isModalVisible} onOk={onConfirm} onCancel={onCancel}>
        {props.children}
      </Modal>
    </>
  );
};

export default CustomModal;