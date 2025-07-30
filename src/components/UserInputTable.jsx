import UserInput from "./UserInput.jsx";

export default function UserInputTable() {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput label="Initial Investment" />
        <UserInput label="Annual Investment" />
      </div>
      <div className="input-group">
        <UserInput label="Expected Return" />
        <UserInput label="Duration" />
      </div>
    </section>
  );
}
