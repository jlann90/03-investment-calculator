import UserInput from "./UserInput";

export default function UserInputTable({ onChangeInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          value={input.initialInvestment}
          onChange={(event) =>
            onChangeInput("initialInvestment", event.target.value)
          }
        />
        <UserInput
          label="Annual Investment"
          value={input.annualInvestment}
          onChange={(event) =>
            onChangeInput("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          value={input.expectedReturn}
          onChange={(event) =>
            onChangeInput("expectedReturn", event.target.value)
          }
        />
        <UserInput
          label="Duration"
          value={input.duration}
          onChange={(event) => onChangeInput("duration", event.target.value)}
        />
      </div>
    </section>
  );
}
