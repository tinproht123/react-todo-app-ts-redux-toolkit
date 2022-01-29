import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import TodoItem from './TodoItem';
import { clearList } from '../redux/features/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state.todo);

  const handleClear = () => {
    dispatch(clearList());
  };

  if (list.length === 0) {
    return <h2 className="text-center my-3 text-danger">LIST IS EMPTY</h2>;
  }
  return (
    <div className="container-fluid my-3">
      {/* List */}
      <ul className="list-group">
        {list.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ul>
      <button onClick={handleClear} className="w-100 btn btn-danger mt-3">
        CLEAR LIST
      </button>
    </div>
  );
};

export default TodoList;
