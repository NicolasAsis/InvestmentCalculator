import MoneyBagImg from "./assets/investment-calculator-logo.png";

import {useState} from 'react';

import Header from "./comps/Header.jsx";
import UserInput from "./comps/UserInput.jsx";
import Result from './comps/Result.jsx';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  });

  const inputIsValid = inputData.duration >=1;

  function handleChange(inputTitle) {
    setInputData((inputData) => {
      return {
        ...inputData,
        [inputTitle]: +event.target.value,
      };
    });
    // console.log(inputData);
  }

  return (
    <main>
      <Header img={MoneyBagImg} heading="Investment Calculator" />

      <UserInput inputData={inputData} onUserInput={handleChange}/>

      {inputIsValid ? <Result initialData={inputData}/> : <p className="center">Please enter a duration greater than zero.</p>}
    </main>
  );
}

export default App;
