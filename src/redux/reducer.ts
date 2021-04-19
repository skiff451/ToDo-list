import { combineReducers } from "redux";
import {
  ADD_LIST_ITEM,
  REMOVE_LIST_ITEM,
  SORT_ALL_ITEMS,
  SORT_DONE_ITEMS,
  SORT_NOT_DONE_ITEMS,
  TOGGLE_DONE,
  SEARCH_ITEMS,
} from "./actionsTypes";
import initialState from "./initialState";

function list(state: IListItem[] = initialState, action: IAction) {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return [...state, action.value];
    case REMOVE_LIST_ITEM:
      return (state = state.filter((listItem) => listItem.id !== action.value));
    case TOGGLE_DONE:
      return (state = state.map((listItem) => {
        if (listItem.id === (action.value)) {
          listItem.isDone = !listItem.isDone;
        }
        return listItem;
      }));
    default:
      return state;
  }
}

function filteredList(state: IListItem[] = [], action: IAction) {
  switch (action.type) {
    case SORT_ALL_ITEMS:
      return (state = action.value);
    case SORT_DONE_ITEMS:
      return (state = action.value.filter((item: IListItem) => item.isDone));
    case SORT_NOT_DONE_ITEMS:
      return (state = action.value.filter((item: IListItem) => !item.isDone));
    case SEARCH_ITEMS:
      return (state = state.filter(
        (item) => item.text.search(action.value) >= 0
      ));
    default:
      return state;
  }
}

export default combineReducers({ filteredList, list });
