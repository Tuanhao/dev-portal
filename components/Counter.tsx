import * as React from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group';

export function Counter() {
  const [count, setCount] = React.useState(0);
  const css = `.button-one {
    color: red;
  }`

  return (
    <div className="border" style={{ border: '1px solid red', padding: '10px' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>
        Clicks: <strong>{count}</strong>
      </div>
      <style>
        {css}
      </style>
      <button className={"button-one"} onClick={() => setCount(count + 1)}> Click </button>
      <p className="text-primary">.text-primary</p>
      <p className="text-secondary">.text-secondary</p>
      <p className="text-success">.text-success</p>
      <p className="text-danger">.text-danger</p>
      <p className="text-warning">.text-warning</p>
      <p className="text-info">.text-info</p>
      <p className="text-light bg-dark">.text-light</p>
      <p className="text-dark">.text-dark</p>
      <p className="text-body">.text-body</p>
      <p className="text-muted">.text-muted</p>
      <p className="text-white bg-dark">.text-white</p>
      <p className="text-black-50">.text-black-50</p>
      <p className="text-white-50 bg-dark">.text-white-50</p>
    </div>
  );
}
