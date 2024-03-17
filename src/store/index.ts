import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tableRedicer from "./slices/table/table-slice";

const reducers = combineReducers({
    table: tableRedicer,
});

const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
