import { createReducer } from "@reduxjs/toolkit";
export const productReducer = createReducer({ count: 0 }, (builder) => {
  builder.addCase("incrementCount", (state) => {
    state.count = state.count + 1;
  });
});

export const heroBannerCount = createReducer({ bannerCount: 0 }, (builder) => {
  builder.addCase("increaseCount", (state) => {
    state.bannerCount = state.bannerCount + 1;
  });
});

export const usersReducers = createReducer({ users: [] }, (builder) => {
  builder.addCase("addUsers", (state, action) => {
    state.users = action.payload;
  });
});
export const ProductsCardReducer = createReducer({products:[]},(builder)=>
{
  builder.addCase("addProducts",(state,action)=>
  {
    state.products=action.payload;
  })
})