let money = +prompt('Ваш бюджет на месяц?',0);
let time = prompt('Введите дату в формате YYYY-MM-DD','2019-11-20');
let section = prompt('Введите обязательную статью расходов в этом месяце');
let howMuch = prompt('Во сколько обойдется?');

let appData = {
    budget : money,
    timeData : time,
    expenses : {
        section : howMuch,
    },
    optionalExpenses : {

    },
    income : [

    ],
    savings : false,

};
alert(appData.budget/30);