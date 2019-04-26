import React from 'react';

function calculateSum(lineItems) {
  return lineItems.reduce((acc, lineItem) => acc + lineItem.amount, 0);
}

function formatCurrency(amount) {
  if (amount >= 0 || amount <= 0) {
    const dollars = Math.floor(amount);
    const cents = Math.floor((amount - dollars) * 100).toString().padEnd(2, '0');
    return `$${dollars.toLocaleString()}.${cents}`;
  }
}

class Summary extends React.Component {
  render() {
    const { incomeItems, expenseItems } = this.props;

    const incomeTotal = calculateSum(incomeItems);
    const expenseTotal = calculateSum(expenseItems);
    const difference = (Math.round((incomeTotal - expenseTotal) * 100) / 100).toFixed(2);
    let balance = null;
    if (difference > 0) {
      balance = "text-success";
    } else if (difference < 0) {
      balance = "text-danger";
    } else {
      balance = "text-info";
    };
    let totalIncome = null;
    if (incomeTotal == 0) {
      totalIncome = "text-muted";
    } else {
      totalIncome = "text-success";
    };
    let totalExpense = null;
    if (expenseTotal == 0) {
      totalExpense= "text-muted";
    } else {
      totalExpense = "text-danger";
    };
    return (
      <div className='shadow'>
        <div className='card-header text-white bg-info font-weight-bold text-uppercase'>Summary</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row mb-4'>
              <div className='col-6 text-center'>
                <label htmlFor="total-income">Total Income</label>
                <p className={`${totalIncome}`}>{ formatCurrency(incomeTotal) }</p>
              </div>
              <div className='col-6 text-center'>
                <label htmlFor="total-expenses">Total Expenses</label>
                <p className={`${totalExpense}`}>{ formatCurrency(expenseTotal) }</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <label htmlFor="balance" className='font-weight-bold text-uppercase text-secondary'>Balance</label>
                <h2 className={`font-weight-bold text-uppercase ${balance}`}>{ formatCurrency(difference) }</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;