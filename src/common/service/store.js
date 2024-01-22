import { configureStore } from "@reduxjs/toolkit";
import gardenSlice from "./gardenSlice";
import {appSlice, agrSlice} from "./appSlice";
import detailInfo from "./flowerSlice";

const store = configureStore({
  reducer:{
    gardenSlice:gardenSlice.reducer,
    appSlice:appSlice.reducer,
    agrSlice:agrSlice.reducer,
    detailInfo:detailInfo.reducer
  }
})

export default store;