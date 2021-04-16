interface IListItem {
  id: number;
  text: string;
  date: string;
  isDone: boolean;
}

interface IState {
  list: IListItem[];
}

interface ICombinedState {
  filterReducer: IState;
  listReducer: IState;
}

interface IAction{
  type: string;
  value: V|V[];
}

// interface IListAction {
//   type: string;
//   value: IListItem;
// }

interface IListProps {
  items: IListItem[];
}

interface FilterConsoleProps{
  list: IListItem[]
}

interface ISearchAction {
  type: string;
  value: string;
}