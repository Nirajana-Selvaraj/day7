import { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [num,setNum] = useState(0);
  const prevNum = useRef("");

  useEffect(() => {
    prevNum.num = num;
  }, [num]);

  function  increment() {
    setNum(num + 1);
  }
  function  decrement() {
    setNum(num - 1);
  }
  return (
    <section>
      <h1>This is an example of useRef</h1>
      
      <h2>My current render is: {num}</h2>
      <h3>My previous render was: {prevNum.num}</h3>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>

    </section>
  );
};

export default UseRef;
