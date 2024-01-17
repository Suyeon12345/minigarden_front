import { createSlice } from "@reduxjs/toolkit";

const gardenSlice = createSlice({
  name: "gardenSlice",
  initialState:{},
  reducers:{
    setEmp:(state, action)=>
    {
      state.emp_id = action.payload.emp_id;
      state.emp_name = action.payload.emp_name;
      state.lev = action.payload.lev;
      state.emp_type = action.payload.emp_type;
    }
  }
})
 export default gardenSlice;