import React from 'react';
import './style.css';
import gFetch from 'Promise.js';

export default function App() {
  gFetch
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
