import { useState } from "react";
import UserInput from "./UserInput.jsx";

export default function UserInputTable() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputKey, newValue) {
    setUserInputs((prevUserInput) => ({
      ...prevUserInput,
      [inputKey]: newValue,
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          value={userInputs.initialInvestment}
          onChange={(event) =>
            handleInputChange("initialInvestment", event.target.value)
          }
        />
        <UserInput
          label="Annual Investment"
          value={userInputs.annualInvestment}
          onChange={(event) =>
            handleInputChange("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          value={userInputs.expectedReturn}
          onChange={(event) =>
            handleInputChange("expectedReturn", event.target.value)
          }
        />
        <UserInput
          label="Duration"
          value={userInputs.duration}
          onChange={(event) =>
            handleInputChange("duration", event.target.value)
          }
        />
      </div>
    </section>
  );
}
