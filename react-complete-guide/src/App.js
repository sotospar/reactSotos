import React from 'react';
import ExpensesComponent from "./components/Expenses/ExpensesComponent";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [{
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28)
  },
  {
    title: 'Smart TV',
    amount: 799.99,
    date: new Date(2021, 9, 15)
  },
  {
    title: 'Laptop',
    amount: 1190.99,
    date: new Date(2021, 8, 6)
  }]


  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started..."),
  //   React.createElement(ExpensesComponent, { items: expenses })
  // );
  return (
    <div>
      <NewExpense />
      <ExpensesComponent items={expenses}/>
    </div>
  );
}

export default App;
