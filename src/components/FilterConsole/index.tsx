import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortAll, sortDone, sortNotDone } from "../../redux/actionCreators";
import "./index.scss";

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
      <span
        className="all-btn"
        onClick={() => {
          setFilterState({
            all: true,
            done: false,
            notDone: false,
          });
        }}
      >
        all
      </span>
      <span
        className="done-btn"
        onClick={() => {
          setFilterState({
            all: false,
            done: true,
            notDone: false,
          });
        }}
      >
        done
      </span>
      <span
        className="not-done-btn"
        onClick={() => {
          setFilterState({
            all: false,
            done: false,
            notDone: true,
          });
        }}
      >
        not done
      </span>
    </div>
  );
}
