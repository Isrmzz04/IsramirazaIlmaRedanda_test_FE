import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "@/service/service";

export const getEmployees = createAsyncThunk("feat/getEmployees", async () => {
    try {
        const response = await httpService.get("/employees")
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const getEmployeeById = createAsyncThunk("feat/getEmployeeById", async (id) => {
    try {
        const response = await httpService.get(`/employees/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})