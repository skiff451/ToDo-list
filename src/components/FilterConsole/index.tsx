import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortAll, sortDone, sortNotDone } from "../../redux/actionCreators";

export default function FilterConsole({ list }: FilterConsoleProps) {
  const [filterState, setFilterState] = useState({
    all: true,
    done: false,
    notDone: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterState.all) {
      dispatch(sortAll(list));
    } else if (filterState.done) {
      dispatch(sortDone(list));
    } else if (filterState.notDone) {
      dispatch(sortNotDone(list));
    }
  }, [filterState, list, dispatch]);

  return (
    <div className="filter-console">
      <button
        onClick={() => {
          setFilterState({
            all: true,
            done: false,
            notDone: false,
          });
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          setFilterState({
            all: false,
            done: true,
            notDone: false,
          });
        }}
      >
        done
      </button>
      <button
        onClick={() => {
          setFilterState({
            all: false,
            done: false,
            notDone: true,
          });
        }}
      >
        not done
      </button>
    </div>
  );
}
