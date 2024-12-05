
import React, { useContext } from 'react';
import { MyContext } from './App';

function Child() {

  const value = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Value: {value}</p>
    </div>
  );
}

export default Child;


