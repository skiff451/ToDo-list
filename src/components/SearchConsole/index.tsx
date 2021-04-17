import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchItem, sortAll } from "../../redux/actionCreators";
interface SearchConsoleProps {
  list: IListItem[];
}

export default function SearchConsole({ list }: SearchConsoleProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(sortAll(list));
    dispatch(searchItem(value));
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="type here to search"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}
