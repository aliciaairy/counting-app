let startBtn = document.getElementById('start'),
  expensesItemBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudget = document.getElementsByTagName('button')[2],
  btns = document.querySelectorAll('button');

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

let money, time;


startBtn.addEventListener('click', function () {
  time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-24');
  money = +prompt('Ваш бюджет на месяц?', '4000');

  btns.forEach(function (btn) {
    btn.removeAttribute('disabled')
  })

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '4000');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  let newDate = new Date(Date.parse(time));
  yearValue.value = newDate.getFullYear()
  monthValue.value = newDate.getMonth() + 1;
  dayValue.value = newDate.getDate();
})

expensesItemBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if ((typeof (a)) === 'string' &&
      (typeof (a)) != null &&
      (typeof (b)) != null &&
      a != '' &&
      b != '' &&
      a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = 0;
    }
  };
  expensesValue.textContent = sum;
  appData.sumOfExpenses = sum
})

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let answer = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = answer;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
})

countBudget.addEventListener('click', function () {
  appData.moneyPerDay = ((appData.budget - appData.sumOfExpenses) / 30).toFixed(1);
  dayBudgetValue.textContent = appData.moneyPerDay;

  if (appData.budget != undefined) {
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  };
});

chooseIncome.addEventListener('input', function () {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
})

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
})

chooseSum.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  }
})

choosePercent.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

  }
})

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  sumOfExpenses: 0,
  optionalExpenses: {},
  income: [],
  savings: false
};