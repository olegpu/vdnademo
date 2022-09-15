import { useState } from "react"; 
import { Value } from "../../types";
import { Options } from "./Options";
import "./styles.css";

export const Preview = ({ size, width, height }: Value) => {
  const [selectedNumOptions, setSelectedNumOptions] = useState(2);
  const [continueButtonVisability, setContinueButtonVisability] = useState('show');

  return (
    <div>
      <div className="quiz-container relative" style={{ width, height }}>
        <Options 
            title="Which of the following brands have you seen adverts for in the past 2 weeks?" 
            optionsNum={selectedNumOptions} 
            continueButtonVisability={continueButtonVisability}
            wrapperSize={size}
        />
      </div>
      <div className="options-num">
      <span>Options num: </span>
      {[2, 3, 4, 5].map((numOptions: number, key: number) => 
          <span key={key}>
            <label htmlFor="numberOptions">{numOptions}</label>
            <input type="radio" 
                  name="numberOptions" 
                  checked={selectedNumOptions === numOptions}
                  value={numOptions} 
                  key={key}
                  onChange={() => setSelectedNumOptions(numOptions)}
            />
          </span>
      )}
      </div>
      <div className="continue-button-wrapper">
        <span>Continue: </span>
        {['show', 'hide'].map((continueButtonVisabilityOption: string, key: number) => 
            <span key={key}>
              <label htmlFor="continueButtonVisability">{continueButtonVisabilityOption}</label>
              <input type="radio" 
                    name="continueButtonVisability" 
                    checked={continueButtonVisability === continueButtonVisabilityOption}
                    value={continueButtonVisabilityOption} 
                    key={key}
                    onChange={() => setContinueButtonVisability(continueButtonVisabilityOption)}
              />
            </span>
        )}
      </div>
    </div>
  );
};
