function Square({ value, setValue }) {
  return (
    <button className="button" onClick={setValue}>
      {value}
    </button>
  );
}

export default Square;
