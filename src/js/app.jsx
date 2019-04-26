import React from 'react';
import IncomeEntries from './components/IncomeEntries';
import ExpenseEntries from './components/ExpenseEntries';
import Summary from './components/Summary';

export default class App extends React.Component {
  render() {
    return (
      <div className='container text-dark'>
        <div className='col-12 my-md-5 my-4'>
          <div className='row justify-content-center'>
            <div className='col-lg-2 col-sm-6 col-7'>
              <img src='../img/budget-icon-blue.png' className='img-fluid' />
            </div>
            <div className='my-auto'>
              <h1 className='display-3 text-secondary text-center text-lg-left font-weight-bold mb-0 pt-2'>
                Budget Tracker
              </h1>
              <div className='display-5 text-dark font-italic pt-2 d-none d-sm-block'>
                <span className='border-bottom pb-2'>Created to help you </span> stay within your
                budget and <span className='font-weight-bold text-success'>save money</span>.
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-12 mb-md-5 mb-4'>
            <IncomeEntries />
          </div>
          <div className='col-lg-4 col-12 mb-md-5 mb-4'>
            <Summary />
          </div>
          <div className='col-lg-4 col-12 mb-md-5 mb-4'>
            <ExpenseEntries />
          </div>
        </div>
        <div className='row justify-content-center mb-4 mb-sm-5'>
          <div className='col-lg-11 col-12 d-flex'>
            <blockquote className='text-right blockquote mb-0'>
              <i className='fas fa-quote-left h1 text-info mb-0 pr-3' />
              <span className='text-secondary shadow-sm'>
                It’s not how much money you make, but how much money you keep, how hard it works for
                you, and how many generations you keep it for.
              </span>
              <footer className='blockquote-footer text-info mt-2'>
                <cite title='Source Title'>
                  <small>Robert Kiyosaki</small>
                </cite>
              </footer>
            </blockquote>
            <div className='quote-border bg-secondary d-none d-lg-block ml-3' />
          </div>
        </div>
      </div>
    );
  }
}
