import UserInput from "./components/UserInput";
import Input from "./components/Input";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange({ field, newValue }) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [field]: +newValue,
      };
    });
  }

  const validDuration = userInput.duration >= 0;

  return (
    <>
      <UserInput
        InputFields={
          <>
            <div className="input-group">
              <Input
                labelName="Initial Investment"
                type={"number"}
                fieldData={userInput.initialInvestment}
                onInputChange={handleInputChange}
              />
              <Input
                labelName="Annual Investment"
                type={"number"}
                fieldData={userInput.annualInvestment}
                onInputChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <Input
                labelName="Expected Return"
                type={"number"}
                fieldData={userInput.expectedReturn}
                onInputChange={handleInputChange}
              />
              <Input
                labelName="Duration"
                type={"number"}
                fieldData={userInput.duration}
                onInputChange={handleInputChange}
              />
            </div>
          </>
        }
      />
      {validDuration ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please enter a valid duration value!</p>
      )}
    </>
  );
}

export default App;
