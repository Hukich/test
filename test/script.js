let money,
    time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 0);
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-11-20');
    
    while(isNaN(money) || money == null || money == '') {
        money = +prompt('Ваш бюджет на месяц?', 0);
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный расход: ' + appData.moneyPerDay);    
}
detectDayBudget();



function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка')
    } else {
        console.log('Eror');
    }
}
detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сума накоплений?');
        let percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12 * percent;
        alert('Доход в месяц от вашего депозита: ' + appData.monthIncome.toFixed());
    }
}
checkSavings();
