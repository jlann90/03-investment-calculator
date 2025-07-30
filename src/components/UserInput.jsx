import { useState } from "react";

export default function UserInput({ label, ...props }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <p>
      <label>{label}</label>
      <input
        {...props}
        type="number"
        value={userInput.initialInvestment}
        required
        onChange={(event) =>
          handleChange("initialInvestment", event.target.value)
        }
      />
    </p>
  );
}
