/**
 * @param placeholder - placeholder for the input {string}
 * @param value - value of the input {string}
 * @param onChange - function to handle input change {s: string=> void, onchange}
 * @param label - label for the input
 * @param className - class name for the input
 */


export function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="form-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
