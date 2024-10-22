const LABELS = {
  "Initial Investment": "initialInvestment",
  "Annual Investment": "annualInvestment",
  "Expected Return": "expectedReturn",
  Duration: "duration",
};

export default function ({ labelName, type, onInputChange, fieldData }) {
  return (
    <p>
      <label>{labelName}</label>
      <input
        required
        type={type}
        value={fieldData}
        onChange={(event) =>
          onInputChange({
            field: LABELS[labelName],
            newValue: event.target.value,
          })
        }
      ></input>
    </p>
  );
}
