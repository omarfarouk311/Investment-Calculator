import UserInput from "./components/UserInput";
import Input from "./components/Input";
import { useState } from "react";

const LABELS = {
  initialInvestment: "Initial Investment",
  annualInvestment: "Annual Investment",
  expectedReturn: "Expected Return",
  duration: "Duration",
};

function App() {
  const [userInput, setUserInput] = useState({
    [LABELS.initialInvestment]: 0,
    [LABELS.annualInvestment]: 0,
    [LABELS.expectedReturn]: 0,
    [LABELS.duration]: 0,
  });

  function handleInputChange({ field, newValue }) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [field]: newValue,
      };
    });
  }

  return (
    <UserInput
      InputFields={
        <>
          <div className="input-group">
            <Input
              labelName={LABELS.initialInvestment}
              type={"number"}
              fieldData={userInput[LABELS.initialInvestment]}
              onInputChange={handleInputChange}
            />
            <Input
              labelName={LABELS.annualInvestment}
              type={"number"}
              fieldData={userInput[LABELS.annualInvestment]}
              onInputChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <Input
              labelName={LABELS.expectedReturn}
              type={"number"}
              fieldData={userInput[LABELS.expectedReturn]}
              onInputChange={handleInputChange}
            />
            <Input
              labelName={LABELS.duration}
              type={"number"}
              fieldData={userInput[LABELS.duration]}
              onInputChange={handleInputChange}
            />
          </div>
        </>
      }
    />
  );
}

export default App;
