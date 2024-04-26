import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, getEmployeeById } from "./action";

export const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        loading: false,
        dataEmployees: [],
        dataEmployee: {
            id: null,
            employeeName: null,
            joinDate: null,
            jobs: null,
            shift: null,
            status: null,
        },
        error: null
    },
    extraReducers: (builder) => builder
    .addCase(getEmployees.pending, (state) => {
        state.loading = true;
    })
    .addCase(getEmployees.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dataEmployees = payload
    })
    .addCase(getEmployees.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload
    })
    .addCase(getEmployeeById.pending, (state) => {
        state.loading = true
    })
    .addCase(getEmployeeById.fulfilled, (state, { payload }) => {
        state.loading = false
        state.dataEmployee = payload
    })
    .addCase(getEmployeeById.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
    })
})

export default employeesSlice.reducer