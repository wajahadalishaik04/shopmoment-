import { configureStore } from "@reduxjs/toolkit";
import { heroBannerCount, productReducer, usersReducers,ProductsCardReducer } from "./ReducerFile";

const Store = configureStore({
  reducer: { productReducer, heroBannerCount, usersReducers,ProductsCardReducer },
});
export default Store;
