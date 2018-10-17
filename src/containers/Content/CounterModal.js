import React from "react";
import { Modal } from "antd";

const CounterModal = props => {
  return (
    <Modal
      title="Modal open count"
      visible={props.isOpen}
      onOk={() => props.onModalToggle(false)}
      onCancel={() => props.onModalToggle(false)}
    >
      <h2>
        count:
        {props.count}
      </h2>
    </Modal>
  );
};
export default CounterModal;
