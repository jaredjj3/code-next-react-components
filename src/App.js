import React from 'react';
import { ParentToChild } from './ParentToChild';
import { ChildToParent } from './ChildToParent';
import { SiblingToSibling } from './SiblingToSibling';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>code-next-react-components</h1>

      <hr />

      <ParentToChild />

      <ChildToParent />

      <SiblingToSibling />
    </div>
  );
}
