interface IListItem {
  id: number;
  text: string;
  date: string;
  isDone: boolean;
}

interface ICombinedState {
  filteredList: IListItem[];
  list: IListItem[];
}

interface IAction{
  type: string;
  value: V|V[];
}

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

interface SearchConsoleProps {
  list: IListItem[];
}