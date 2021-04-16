import { combineReducers } from "redux";
import {
  ADD_LIST_ITEM,
  REMOVE_LIST_ITEM,
  SORT_ALL_ITEMS,
  SORT_DONE_ITEMS,
  SORT_NOT_DONE_ITEMS,
  TOGGLE_DONE,
  SEARCH_ITEMS,
} from "./actions";
import InitialState from "./initialState";

function listReducer(state: IState = InitialState, action: IAction) {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { ...state, list: state.list.concat(action.value) };
    case REMOVE_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((listItem) => listItem.id !== action.value as number),
      };
    case TOGGLE_DONE:
      return {
        ...state,
        list: state.list.map((listItem) => {
          if (listItem.id === action.value as number) {
            listItem.isDone = !listItem.isDone;
          }
          return listItem;
        }),
      };
    default:
      return state;
  }
}

function filterReducer(state: IState = InitialState, action: IAction) {
  switch (action.type) {
    case SORT_ALL_ITEMS:
      return { ...state, list: action.value };
    case SORT_DONE_ITEMS:
      return {
        ...state,
        list: action.value.filter((item: IListItem) => item.isDone),
      };
    case SORT_NOT_DONE_ITEMS:
      return {
        ...state,
        list: action.value.filter((item: IListItem) => !item.isDone),
      };
    case SEARCH_ITEMS:
      return {
        ...state,
        list: state.list.filter(
          (item) => item.text.search(action.value as string) >= 0
        ),
      };
    default:
      return state;
  }
}

export default combineReducers({ filterReducer, listReducer });
