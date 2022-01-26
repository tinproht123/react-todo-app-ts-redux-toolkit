import React from 'react';
import { removeItem, toggleCheck } from '../redux/features/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(removeItem({ id: item.id }));
  };

  const handleToggle = () => {
    dispatch(toggleCheck({ id: item.id }));
  };

  return (
    <li
      className={`border border-2 list-group-item my-2 ${
        item.check && 'border-primary text-primary'
      }`}
      onClick={handleToggle}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className=" text-text" style={{ marginBottom: 0 }}>
          {item.title}
        </p>
        <i onClick={handleRemove} className="fas fa-times text-danger"></i>
      </div>
    </li>
  );
};

export default TodoItem;
