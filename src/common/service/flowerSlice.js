import { createSlice } from "@reduxjs/toolkit";

const detailInfo = createSlice({
    name : "detailInfo",
    initialState:{value: 0 },
    reducers : {
        setDetail:(state, action)=> {
            state.value = action.payload
        },
        setUpdate:(state, action)=> {
            state.value = action.payload
        }
    }
})



export default detailInfo;
export const { setDetail } = detailInfo.actions