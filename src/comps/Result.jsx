import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ initialData }) {
  // console.log(initialData);

  const calcData = calculateInvestmentResults(initialData);

  let initialInvestment = initialData.initialInvestment;
  const annualInvestment = initialData.annualInvestment;

  let interest = 0;

//   console.log(calcData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calcData.map((annualData) => {
          return (
            <tr key={annualData.year}>
              <td>{annualData.year}</td>
              <td>{formatter.format(annualData.valueEndOfYear)}</td>
              <td>{formatter.format(annualData.interest)}</td>
              <td>{formatter.format(interest += annualData.interest)}</td>
              <td>{formatter.format(initialInvestment+=annualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
