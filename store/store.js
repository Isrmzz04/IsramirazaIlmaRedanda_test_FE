import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./employees/slice";

export const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer
    }
})