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
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

// TODO: Update this component to call the onClick prop with a todo object.
const TodoListItem = (props) => {
  const todo = props.todo;

  return (
    <li>
      <button class="btn btn-primary btn-sm">done</button> {todo.text}
    </li>
  );
};
