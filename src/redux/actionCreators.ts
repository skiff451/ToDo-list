import * as actions from "./actionsTypes";

export function addListItem(value: string) {
  return {
    type: actions.ADD_LIST_ITEM,
    value: {
      id: Date.now(),
      text: value,
      date: ` ${new Date().toLocaleTimeString()} 
              ${new Date().toLocaleDateString()}`,
      isDone: false,
    },
  };
}

export function removeListItem(value: number) {
  return {
    type: actions.REMOVE_LIST_ITEM,
    value,
  };
}

export function toggleDone(value: number) {
  return {
    type: actions.TOGGLE_DONE,
    value,
  };
}

export function sortAll(value: IListItem[]) {
  return {
    type: actions.SORT_ALL_ITEMS,
    value,
  };
}
export function sortDone(value: IListItem[]) {
  return {
    type: actions.SORT_DONE_ITEMS,
    value,
  };
}
export function sortNotDone(value: IListItem[]) {
  return {
    type: actions.SORT_NOT_DONE_ITEMS,
    value,
  };
}
export function searchItem(value: string) {
  return {
    type: actions.SEARCH_ITEMS,
    value,
  };
}
