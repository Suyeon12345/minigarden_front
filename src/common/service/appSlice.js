import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name:"appSlice",
  initialState:{
    appArr:[],
    length:0,
  },
  reducers:{
    addLine:(state, action)=>{
      let check = false;
      state.appArr.forEach((element) => {
        if(element.emp_id === action.payload.emp_id){//현재 목록에 있는 값과 같은 것이 들어오면 예외처리
          alert("이미 동일한 이름이 있습니다.");
          check = true;
        }
      });
      if(!check){
        state.appArr.push(action.payload);//처음 들어오는 이름인 경우에만 리스트에 추가
        state.length++;
      }
    },
    deleteLine:(state, action) =>{
      state.appArr = action.payload;
    }
  }
})

export const agrSlice = createSlice({
  name:"agrSlice",
  initialState:{
    agrArr:[],
    length:0,
  },
  reducers:{
    addLine:(state, action)=>{
      let check = false;
      state.agrArr.forEach((element) => {
        if(element.emp_id === action.payload.emp_id){
          alert("이미 동일한 이름이 있습니다.");
          check = true;
        }
      });
      if(!check){
        state.agrArr.push(action.payload);
        state.length++;
      }
    },    
    deleteLine:(state, action) =>{
      state.agrArr = action.payload;
    }
  }
})