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

  const onTodoListItemClick = (todo) => {
    setTodos((todos) => todos.filter(({ id }) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onClick={onTodoListItemClick} />
      ))}
    </ul>
  );
};

// TODO: Update this component to call the onClick prop with a todo object.
const TodoListItem = (props) => {
  const todo = props.todo;

  const onClick = () => {
    if (props.onClick) {
      props.onClick(todo);
    }
  };

  return (
    <li>
      <button class="btn btn-primary btn-sm" onClick={onClick}>
        done
      </button>{' '}
      {todo.text}
    </li>
  );
};
