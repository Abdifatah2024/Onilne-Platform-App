import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      FullName: 'Abdifatah Ismail Abdi',
      EmailAddress: 'Test123@gmail.com',
      Password: '1234Aa',
      confirm:'1234Aa'
    }
  ]
};

const todoSlice = createSlice({
  name: 'Register slice',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    }
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice;
