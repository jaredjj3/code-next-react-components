import React, { useState } from 'react';

// TODO: Without changing anything, what does this code do?
export const ParentToChild = () => {
  const [msg, setMsg] = useState('');

  // TODO: Update this code so that the fooified and barified versions of
  // the message are rendered when the input is changed.

  return (
    <>
      <h2>ParentToChild</h2>

      <div>
        <input id="msg" class="form-control" />
      </div>

      <div>msg: {msg}</div>

      <Fooifier />
    </>
  );
};
const Fooifier = (props) => {
  const msg = props.msg;
  const msgWithFoo = `${msg} foo`;

  return (
    <>
      <div>fooified: {msgWithFoo}</div>
      <Barifier />
    </>
  );
};

const Barifier = (props) => {
  const msg = props.msg;
  const msgWithBar = `${msg} bar`;

  return (
    <>
      <div>barified: {msgWithBar}</div>
    </>
  );
};
