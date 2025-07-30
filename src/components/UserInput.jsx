import { useState } from "react";

export default function UserInput({ label, ...props }) {
  const [inputNumber, setInputNumber] = useState();

  function handleUpdateNumber(event) {
    setInputNumber(event.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input
        {...props}
        type="number"
        value={inputNumber}
        onChange={handleUpdateNumber}
      />
    </div>
  );
}
