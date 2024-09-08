import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false },
  reducers: {
    markFetchDone: (state) => {
      void (state.fetchDone = true);
      // replace void with return
    },
    markFetchStarted: (state) => {
      void (state.currentlyFetching = true);
      // replace void with return
    },
    markFetchFinished: (state) => {
      void (state.currentlyFetching = false);
      // replace void with return
    },
  },
});
export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;
