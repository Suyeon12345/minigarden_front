import { configureStore } from "@reduxjs/toolkit";
import gardenSlice from "./gardenSlice";
import {appSlice, agrSlice} from "./appSlice";

const store = configureStore({
  reducer:{
    gardenSlice:gardenSlice.reducer,
    appSlice:appSlice.reducer,
    agrSlice:agrSlice.reducer,
  }
})

export default store;