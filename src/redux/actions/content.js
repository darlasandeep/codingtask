import {
  ON_MOUSE_SCROLL,
  ON_MODAL_TOGGLE,
  ON_RESET_COUNT,
  ON_FILTER_CHANGE,
  ON_SORT_TOGGLE
} from "../constants/content";

export const onMouseScroll = e => {
  debugger
  return {
    type: ON_MOUSE_SCROLL,
    deltaY: e.deltaY
  };
};

export const onModalToggle = isOpen => {
  return {
    type: ON_MODAL_TOGGLE,
    isOpen
  };
};

export const onResetCount = () => {
  return {
    type: ON_RESET_COUNT
  };
};

export const onFilterValueChange = filterValue => {
  return {
    type: ON_FILTER_CHANGE,
    filterValue
  };
};

export const onSortToggle = () => {
  return {
    type: ON_SORT_TOGGLE
  };
};
