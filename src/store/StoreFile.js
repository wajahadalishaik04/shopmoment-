import { configureStore } from "@reduxjs/toolkit";
import { heroBannerCount,  productReducer } from "./ReducerFile";

const Store = configureStore({
    reducer:{productReducer}
});
const heroImageStore = configureStore({
    reducer:{heroBannerCount}
})


export default {Store , heroImageStore};
