import {calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({input}){
    // console.log(input)
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = 
        resultsData[0].valueEndOfYear - resultsData[0].annualInvestment;
    console.log(resultsData)

    return (
        <table id = "result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Invest</th>
                    <th>Invested Capital</th>
                    <th>tax</th>
                    <th>real interest</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = 
                        yearData.valueEndOfYear - yearData.annualInvestment * yearData.year
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    const tax = yearData.interest*0.15

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                        <td>{formatter.format(tax)}</td>
                        <td>{formatter.format(yearData.interest-tax)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}