function Button({ btnText, setColour }) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: btnText, color: (btnText === 'white' || btnText === 'lavender' || btnText === 'yellow' || btnText === 'pink') && 'black' }}
      onClick={() => setColour(btnText)}
    >
      {btnText}
    </button>
  );
}
export default Button;
