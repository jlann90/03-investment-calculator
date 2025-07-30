export default function UserInput({ label, value, onChange, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input
        {...props}
        type="number"
        value={value}
        required
        onChange={onChange}
      />
    </p>
  );
}
