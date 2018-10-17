import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as contentActions from "../../redux/actions/content";
import CounterModal from "./CounterModal";
import CarList from "./CarList";
import { carListSort } from "../../redux/selectors/carListSort";

const Content = props => {
  return (
    <div className="App-content" onWheel={props.onMouseScroll}>
      <div className="half-width">
        <div className="modal">
          <h4> Click Reset button to reset Modal Count to zero, Clicking open increases the Modal Count</h4>
          <Button onClick={props.onResetCount} type="danger">
            Reset
          </Button>
          <Button type="primary" onClick={() => props.onModalToggle(true)}>
            Open
          </Button>
        </div>
        <div className="scrollMouse">
            <div
              style={{
                fontSize: props.fontSize,
                cursor: "pointer",
                marginTop: "1%"
              }}
            >
              Scroll the Mouse Wheel to Increase or Decrease the font size
            </div>
        </div>
      </div>
      <div className="half-width">
        <CarList {...props} />
      </div>
      <CounterModal {...props} />
    </div>
  );
};

export default connect(
  ({ content }) => ({
    ...content,
    carListSort: carListSort(content)
  }),
  contentActions
)(Content);
