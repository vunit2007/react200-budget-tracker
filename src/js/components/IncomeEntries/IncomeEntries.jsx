import React from 'react';

import { updateIncomeDescription, updateIncomeAmount, addIncome } from './incomeActions';

export default class IncomeEntries extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddIncome = this.handleAddIncome.bind(this);
  }

  handleDescriptionInput(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeDescription(value));
  }

  handleAmountInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeAmount(value));
  }

  handleAddIncome() {
    const { description, amount, dispatch } = this.props;
    dispatch(addIncome(description, amount));
  }

  render() {
    const { description, amount, lineItems } = this.props;
    return (
      <div className='shadow'>
        <div className='card-header text-white bg-success font-weight-bold text-uppercase'>
          Income Entries
        </div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='income-description'>Description</label>
              <input
                type='text'
                className='form-control bg-transparent'
                id='income-description'
                value={ description }
                onChange={ this.handleDescriptionInput }
              />
            </div>
            <div className='form-group'>
              <label htmlFor='income-amount'>Amount</label>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    $
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control bg-transparent w-50'
                  placeholder='0.00'
                  aria-label='amount'
                  aria-describedby='basic-addon1'
                  id='income-amount'
                  value={ amount }
                  onChange={ this.handleAmountInput }
                />
              </div>
            </div>
            <div className='text-right mb-5'>
              <button type='button' className='btn btn-success' onClick={ this.handleAddIncome }>
                <i className='fa fa-plus pr-2' />
                Add Income
              </button>
            </div>
            <table className='table table-sm table-hover'>
              <thead>
                <tr>
                  <th className='text-secondary'>Description</th>
                  <th className='text-secondary' style={ { width: 120 } }>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {lineItems.map(lineItem => (
                  <tr>
                    <td>{lineItem.description}</td>
                    <td>${lineItem.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
