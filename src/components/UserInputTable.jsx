import UserInput from "./UserInput.jsx";

const initialUserInputs = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null,
};

export default function UserInputTable() {
  let userInputs = { ...initialUserInputs };

  if (label == "Initial Investment") {
    userInputs.initialInvestment = Number(inputNumber);
  }

  if (label == "Annual Investment") {
    userInputs.annualInvestment = Number(inputNumber);
  }

  if (label == "Expected Return") {
    userInputs.expectedReturn = Number(inputNumber);
  }

  if (label == "duration") {
    userInputs.expectedReturn = Number(inputNumber);
  }
  console.log(userInputs);

  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput label="Initial Investment" />
        <UserInput label="Annual Investment" />
      </div>
      <div className="input-group">
        <UserInput label="Expected Return" />
        <UserInput label="Duration" />
      </div>
    </div>
  );
}
