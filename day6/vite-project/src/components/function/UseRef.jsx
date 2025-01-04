import { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
  const prevText = useRef("");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <section>
      <h1>This is an example of useRef</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>My current render is: {text}</h2>
      <h3>My previous render was: {prevText.current}</h3>
    </section>
  );
};

export default UseRef;
