let startBtn = document.getElementById('start'),
  expensesItemBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudget = document.getElementsByTagName('button')[2];

let budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item'),
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');