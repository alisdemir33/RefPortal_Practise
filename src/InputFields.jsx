// src/InputFields.js
import React from 'react';

const InputFields = ({ initialInvestment, annualInvestment, expectedReturn, duration, handleChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={initialInvestment}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={annualInvestment}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return (%)</label>
          <input
            type="number"
            name="expectedReturn"
            value={expectedReturn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duration (years)</label>
          <input
            type="number"
            name="duration"
            value={duration}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
