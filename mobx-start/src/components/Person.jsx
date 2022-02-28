export default function Person({ age10, plus }) {
  return (
    <>
      <h1>{age10}</h1>
      <p>
        <button onClick={click}>plus</button>
      </p>
    </>
  );

  function click() {
    plus();
  }
}
