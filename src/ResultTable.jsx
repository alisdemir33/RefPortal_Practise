// src/ResultTable.js
import React from 'react';

const ResultTable = ({ results }) => {
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th className="center">Year</th>
            <th className="center">Investment Value</th>
            <th className="center">Interest(Year)</th>
            <th className="center">Total Interest</th>
            <th className="center">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td className="center">{item.year}</td>
              <td>{item.valueEndOfYear.toFixed(2)}</td>
              <td>{item.interestEarnedInYear.toFixed(2)}</td>
              <td>{item.totalInterest.toFixed(2)}</td>
              <td>{item.totalInvestment.toFixed(2)}</td>             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
