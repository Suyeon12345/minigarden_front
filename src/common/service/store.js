import { configureStore } from "@reduxjs/toolkit";
import gardenSlice from "./gardenSlice";

const store = configureStore({
  reducer:{
    gardenSlice:gardenSlice.reducer,
  }
})

export default store;