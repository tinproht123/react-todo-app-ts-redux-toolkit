import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/todoSlice';

const TodoForm = (): JSX.Element => {
  //Input value
  const [text, setText] = useState('');
  const [check, setCheck] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const dispatch = useDispatch();

  //setText not working
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    dispatch(addItem({ title: text, check: check }));
    setText('');
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          value={text}
          placeholder="Enter the value..."
          onChange={(e: { target: HTMLInputElement }) =>
            setText(e.target.value)
          }
        />
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
      <div className="mt-3">
        <input
          type="checkbox"
          value={check}
          onChange={(e: { target: HTMLInputElement }) =>
            setCheck(e.currentTarget.checked)
          }
          className="form-check-input"
        />
        <label className="form-check-label mx-2" style={{ letterSpacing: 3 }}>
          Check?
        </label>
      </div>
    </form>
  );
};

export default TodoForm;
