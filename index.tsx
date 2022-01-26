import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/app/store';

function App() {
  return (
    <div
      className="container mx-auto my-5 border border-2  p-4 shadow"
      style={{ maxWidth: 500 }}
    >
      <h1 className="text-center mb-4">
        <span className="text-primary">React</span> Todo App
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
