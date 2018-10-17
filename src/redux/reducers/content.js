import {
  ON_MOUSE_SCROLL,
  ON_MODAL_TOGGLE,
  ON_RESET_COUNT,
  ON_FILTER_CHANGE,
  ON_SORT_TOGGLE
} from "../constants/content";
import carList from "./carList";

const content = (
  state = {
    fontSize: 13,
    count: 0,
    isOpen: false,
    carList,
    filterValue: "all",
    asc: true
  },
  action
) => {
  switch (action.type) {
    case ON_MOUSE_SCROLL:
      if (action.deltaY < 0 && state.fontSize < 45) {
        return { ...state, fontSize: state.fontSize + 1 };
      }
      if (action.deltaY > 0 && state.fontSize > 13) {
        return { ...state, fontSize: state.fontSize - 1 };
      }
      return state;
    case ON_MODAL_TOGGLE:
      if (action.isOpen) {
        return {
          ...state,
          isOpen: action.isOpen,
          count: state.count + 1
        };
      }
      return {
        ...state,
        isOpen: action.isOpen
      };
    case ON_RESET_COUNT:
      return {
        ...state,
        count: 0
      };
    case ON_FILTER_CHANGE:
      if (action.filterValue === "all") {
        return {
          ...state,
          filterValue: "all",
          carList
        };
      }
      return {
        ...state,
        filterValue: action.filterValue,
        carList: carList.filter(car => action.filterValue === car.type)
      };
    case ON_SORT_TOGGLE:
      return {
        ...state,
        asc: !state.asc
      };
    default:
      return state;
  }
};

export default content;
