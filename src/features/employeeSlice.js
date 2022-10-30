import { createSlice } from "@reduxjs/toolkit"

const initialState={employeeList:[]}

export const employeeSlice=createSlice({

name:"listemployee",
initialState,
reducers:{

        savedNewEmployee:(state=initialState,action)=>{
             state.employeeList=[action.payload,...state.employeeList];
        },
    }
});
export const {savedNewEmployee}=employeeSlice.actions;
const employeeReducer=employeeSlice.reducer;
export default employeeReducer