import { configureStore } from "@reduxjs/toolkit";
import { heroBannerCount,  productReducer } from "./ReducerFile";

const Store = configureStore({
    reducer:{productReducer, heroBannerCount}
});
export default Store;
