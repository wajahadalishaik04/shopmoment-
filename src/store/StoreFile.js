import { configureStore } from "@reduxjs/toolkit";
import { heroBannerCount, productReducer, usersReducers } from "./ReducerFile";

const Store = configureStore({
  reducer: { productReducer, heroBannerCount, usersReducers },
});
export default Store;
