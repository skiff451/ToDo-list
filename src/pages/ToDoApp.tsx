import { useSelector } from "react-redux";
import List from "../components/List";
import AddConsole from "../components/AddConsole";
import FilterConsole from "../components/FilterConsole";
import SearchConsole from "../components/SearchConsole";
import "../index.scss";

export default function App() {
  const state = useSelector((state: ICombinedState) => state);
  const { listReducer, filterReducer } = state;
  const currentList = listReducer.list;
  const activeList = filterReducer.list;

  return (
    <div className="app">
      <div className="todo">
        <h1>TO DO LIST</h1>
        <div className="filter-group">
          <SearchConsole list={currentList} />
          <div className="filters">
            <FilterConsole list={currentList} />
          </div>
        </div>
        <div className="content">
          <AddConsole />
          <List items={activeList} />
        </div>
      </div>
    </div>
  );
}
