import { useState } from "react";
import Header from "./components/Header";
import UserInputTable from "./components/UserInputTable";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInputs.duration >= 1;

  function handleInputChange(inputKey, newValue) {
    setUserInputs((prevUserInput) => ({
      ...prevUserInput,
      // adding the + ensures the values are treated as numbers and added together rather than concatenating
      [inputKey]: +newValue,
    }));
  }

  return (
    <main>
      <Header />
      <UserInputTable onChangeInput={handleInputChange} input={userInputs} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultsTable input={userInputs} />}
    </main>
  );
}

export default App;
