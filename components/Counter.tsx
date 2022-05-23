import * as React from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group';

export function Counter() {
  const [count, setCount] = React.useState(0);
  const css = `.button-one {
    color: red;
  }`

  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>
        Clicks: <strong>{count}</strong>
      </div>
      <style>
        {css}
      </style>
      <button className={"button-one"} onClick={() => setCount(count + 1)}> Click </button>
      {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <button onClick={() => setCount(count + 1)}> Click </button>
        </ReactCSSTransitionGroup> */}
    </div>
  );
}
