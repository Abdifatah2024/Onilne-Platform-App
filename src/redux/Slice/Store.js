import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    // myTodos: todoSlice.reducer
  }
});

export default store;
