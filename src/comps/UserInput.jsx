export default function UserInput({inputData, onUserInput}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={() => onUserInput("initialInvestment")}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={() => onUserInput("annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={() => onUserInput("expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputData.duration}
            onChange={() => onUserInput("duration")}
          />
        </p>
      </div>
    </section>
  );
}
