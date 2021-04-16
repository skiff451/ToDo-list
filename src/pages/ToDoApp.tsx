import { useSelector } from "react-redux";
import List from "../components/List";
import AddConsole from "../components/AddConsole";
import FilterConsole from "../components/FilterConsole";
import SearchConsole from "../components/SearchConsole";

export default function App() {
  const state = useSelector((state: ICombinedState) => state);
  const { listReducer, filterReducer } = state;
  const currentList = listReducer.list;
  const activeList = filterReducer.list;

  const string = "Мама мыла раму";
  console.log(string.search(""));

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="filter-group">
        
        <FilterConsole list={currentList} />
        <SearchConsole list={ currentList}/>
      </div>
      <List items={activeList} />
      <AddConsole />
    </>
  );
}
