# code-next-react-components

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-react-components)

In this lesson, engineers will

- recall how to communicate from a parent to a child component
- learn how to communicate from a child to a parent or sibling component
- practice state management

## Component Relationships

A parent component renders its child components. This is best illustrated with an example:

```jsx
const Parent = () => {
  return (
    <div>
      This text is rendered from the Parent
      <Child />
      <Sibling />
    </div>
  );
};

const Child = () => {
  return <div>This text is rendered from the Child</div>;
};

const Sibling = () => {
  return <div>This text is rendered from the Sibling</div>;
};
```

Keep in mind that the Sibling component is also a Child. 

There are three relationships of concern:

- Parent -> Child
- Child -> Parent
- Sibling -> Sibling

## Parent to child

Parents talk to children through props. It's as simple as that.

```jsx
const Parent = () => {
  const [secret, setSecret] = useState('foo');

  return <Child msg={secret} />;
};

const Child = (props) => {
  const msg = props.msg;

  return <div>msg</div>;
};
```

Typically, state lives in a parent component and it only gets passed down to the components that need to know about it.

### YOUR TURN

Open `src/ParentToChild.js` and practice.