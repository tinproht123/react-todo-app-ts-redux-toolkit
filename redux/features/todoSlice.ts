import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  check: boolean;
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 1, title: 'add item to list', check: false },
    { id: 2, title: 'you can delete item from list', check: false },
    { id: 3, title: 'click on item to check', check: false },
    { id: 4, title: 'click on item again to uncheck', check: true },
    {
      id: 5,
      title: 'item got checked will be push to end of the list',
      check: true,
    },
    {
      id: 6,
      title:
        'item  unchecked will be push back in head of the list (try double click on this one)',
      check: false,
    },
  ],
  reducers: {
    addItem: (state, action: PayloadAction<Todo>) => {
      const newItem = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        check: action.payload.check,
      };
      newItem.check ? state.push(newItem) : state.unshift(newItem);
    },

    //Remove item
    removeItem: (state, action: PayloadAction<Todo>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    //Toggle check
    toggleCheck: (state, action: PayloadAction<Todo>) => {
      const indexItem = state.find((item) => item.id === action.payload.id);
      indexItem.check = !indexItem.check;
      state.splice(state.indexOf(indexItem), 1);
      indexItem.check ? state.push(indexItem) : state.unshift(indexItem);
    },

    //clear all item in list
    clearList: (state) => {
      return [];
    },
  },
});

export const { addItem, removeItem, toggleCheck, clearList } =
  todoSlice.actions;

export default todoSlice.reducer;
