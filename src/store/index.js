import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice, { bagActions } from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
