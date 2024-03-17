import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFormFields } from "@/components/header/form-add-employee/From";
import {
    EmployeeWithoutIdEmailType,
    IEmployee,
    IState,
    StatusEnum,
} from "./interfaces";
import { mok_data } from "./data";

const initialState: IState = {
    table: mok_data,
    sortedTable: mok_data,
    search: {
        value: "",
        quantity: 0,
    },
};

const tableSlice = createSlice({
    name: "table-slice",
    initialState,
    reducers: {
        search: (state, { payload }: PayloadAction<string>) => {
            const searchTerm = payload.toLowerCase();
            const filteredTable = state.table.filter((item) =>
                item.name.toLowerCase().includes(searchTerm)
            );

            state.sortedTable = payload ? filteredTable : state.table;

            state.search = {
                value: payload,
                quantity: filteredTable.length,
            };
        },
        create: (state, action: PayloadAction<IFormFields>) => {
            /* eslint-disable */
            const id = self.crypto.randomUUID();

            const item = { ...action.payload, status: StatusEnum.FREE, id };

            state.table.unshift(item);
            state.sortedTable.unshift(item);
        },
        remove: (state, action: PayloadAction<string>) => {
            const sorted = state.sortedTable.filter(
                (item) => item.id !== action.payload
            );

            state.table = sorted;
            state.sortedTable = sorted;
        },
        update: (state, action: PayloadAction<IEmployee>) => {
            const index = state.sortedTable.findIndex(
                (e) => e.id === action.payload.id
            );

            state.sortedTable[index] = action.payload;
            state.table[index] = action.payload;
        },
        sort: (
            state,
            action: PayloadAction<{
                value: boolean;
                field: EmployeeWithoutIdEmailType;
            }>
        ) => {
            const { value, field } = action.payload;

            if (!value) {
                state.sortedTable = state.sortedTable.sort((a, b) => {
                    if (a[field] < b[field]) {
                        return -1;
                    }
                    if (a[field] > b[field]) {
                        return 1;
                    }
                    return 0;
                });
            } else {
                state.sortedTable = state.table;
            }
        },
    },
});

export const { search, remove, create, update, sort } = tableSlice.actions;
export default tableSlice.reducer;
