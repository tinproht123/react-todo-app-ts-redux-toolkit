import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state.todo);

  return (
    <div className="container-fluid my-3">
      {/* List */}
      <ul className="list-group">
        {list.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
