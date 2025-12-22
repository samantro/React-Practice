import { useState } from 'react';
function Counter({ buttonName }) {
  let [count, setCount] = useState(0);
  function Count() {
    if(count == 20) return;
    setCount(count + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={Count}>{buttonName}</button>
    </>
  );
}

export default Counter;
