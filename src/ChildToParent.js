import React, { useState } from 'react';

export const ChildToParent = () => {
  return (
    <>
      <h2>ChildToParent</h2>

      <TodoList />
    </>
  );
};

const INITIAL_TODOS = [
  { id: 1, text: 'master react' },
  { id: 2, text: 'walk dog' },
  { id: 3, text: 'practice guitar' },
];

const NOOP = () => {
  // noop
};

// TODO: Update this component to handle click events from the TodoListItem.
const TodoList = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  return (
    <ul class="list-group">
      {todos.map((todo) => (
        <li class="list-group-item">
          <TodoListItem key={todo.id} todo={todo} />
        </li>
      ))}
    </ul>
  );
};

// TODO: Update this component to call the onClick prop with a todo object.
const TodoListItem = (props) => {
  const todo = props.todo;

  return (
    <div class="d-flex justify-content-between">
      {todo.text} <button class="btn btn-primary btn-sm">done</button> 
    </div>
  );
};
