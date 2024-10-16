import { createReducer } from "@reduxjs/toolkit";


const initialState={
    c:10,
}

export const customReducer = createReducer(initialState, (builder) => {
    builder
      .addCase('increment', (state) => {
        state.c += 1;
      })
      .addCase('decrement', (state) => {
        state.c -= 1;
      })
      .addCase('incrementByValue',(state,action)=>{
        state.c+=1;
        state.c+=action.payload;
      });
  });

