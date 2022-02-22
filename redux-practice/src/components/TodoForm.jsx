import { useRef } from "react";

// container가 주는 데이터나 함수를 받아서 그냥 보여주거나 함수를 실행하는 역할
export default function TodoForm({ add }) {
  // uncontrolled component
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
}
