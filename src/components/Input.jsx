export default function ({ labelName, type, onInputChange, fieldData }) {
  return (
    <p>
      <label>{labelName}</label>
      <input
        required
        type={type}
        value={fieldData}
        onChange={(event) =>
          onInputChange({ field: labelName, newValue: event.target.value })
        }
      ></input>
    </p>
  );
}
