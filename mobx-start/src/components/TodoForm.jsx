import { useRef } from "react";

export default function TodoForm({ add }) {
  const ref = useRef();
  return (
    <>
      <p>
        <input ref={ref} /> <button onClick={click}>add</button>
      </p>
    </>
  );

  function click() {
    add(ref.current.value);
  }
}
