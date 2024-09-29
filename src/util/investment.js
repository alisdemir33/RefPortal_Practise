// This function expects individual arguments for initial investment, annual investment, expected return, and duration.
export function calculateInvestmentResults(
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
) {
  // Convert all inputs to numbers to avoid any concatenation issues
  const parsedInitialInvestment = parseFloat(initialInvestment);
  const parsedAnnualInvestment = parseFloat(annualInvestment);
  const parsedExpectedReturn = parseFloat(expectedReturn);
  const parsedDuration = parseInt(duration, 10);

  const annualData = [];
  let investmentValue = parsedInitialInvestment;
  let totalInterest=0.0;
  let totalInvestment=parsedInitialInvestment;

  for (let i = 0; i < parsedDuration; i++) {
    const interestEarnedInYear = investmentValue * (parsedExpectedReturn / 100);
    totalInterest+=interestEarnedInYear;
    totalInvestment+=parsedAnnualInvestment;
    investmentValue += interestEarnedInYear + parsedAnnualInvestment;   

    annualData.push({
      year: i + 1, // year identifier
      valueEndOfYear: investmentValue, // investment total value at end of year
      interestEarnedInYear: interestEarnedInYear, // the amount of interest earned in this year
      totalInterest:totalInterest,//total interest earned
      totalInvestment: totalInvestment, // total invested money

    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
