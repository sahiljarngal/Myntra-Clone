import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchStatusActions.markFetchStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusActions.markFetchDone());
        dispatch(FetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default FetchItems;
