'use strict';
//ДЗ-1//
//1-1
function deg() {
    let C = Number(prompt('Введите температуру'));
    let F = (9 / 5) * C + 32;
    alert('Температура в Фаренгейтах = ' + F + '\u2109');
}
//1-2
function vasya() {
    let name = ('Василий');
    let admin = name;
    alert(admin);
}
//1-3
function description() {
    let a = 10 + 10 + "10";
    alert('10 + 10 + "10" = ' + a + '\n В данном случае плюс перед кавычками играет функцию присоедиения строки');

    let b = 10 + "10" + 10;
    alert('10 + "10" + 10 = ' + b + '\n Тоже самое что и в первом случае только присоединение до и после');

    let c = 10 + 10 + +"10";
    alert('10 + 10 + +"10" = ' + c + '\n В данном случае первый плюс это оператор сложения, а второй принудительно делает строку - числом');

    let d = 10 / -"";
    alert('10 / -"" = ' + d + '\n В данном случае минус делает сроку отрицательным числом. А пустые кавычки возвращают 0. Ноль не может быть отрицательным и на ноль делить нельзя, точнее получается бесконечность');
    let e = 10 / +"2,5";
    alert('10 / +"2,5" = ' + e + '\n Неправильная запись десятичных чисел. Разделителем обязана быть точка. Плюс(+) принудительно делает строку числом.')
}

//ДЗ-2//

//2-1
function one() {
    let a = 1, b = 1, c, d;
    c = ++a;
    alert('Пример 1 \n' + 'Ответ: ' + c + ' - т.к. инкреммент а=2 следовательно с=а=2');
    d = b++;
    alert('Пример 2 \n' + 'Ответ: ' + d + ' - т.к. инкремент стоит после, то "d" принимает значение "b" до инкремента т.е. 1');
    c = 2 + ++a;
    alert('Пример 3 \n' + 'Ответ: ' + c + ' - т.к. "a" в первой функции принела значение по инкременту 2, то в данной функции инкремент а=2+1=3');
    d = 2 + b++;
    alert('Пример 4 \n' + 'Ответ: ' + d + ' - т.к. "b" во второй функции принела значение по инкременту 2, а в данной функции инкремент стоит после, следовательно сложение происходит, до инкремента с числом 2');
    alert('a = ' + a + ' - в первом и третьем примере функия инкремента для "а" применилась два раза');
    alert('b = ' + b + ' - во втором и четвертом примере функия инкремента для "b" применилась два раза');
}

//2-2
function two() {
    let a = 2;
    let x = 1 + (a *= 2);
    alert('а = ' + a + '\n Оперератор присваивания с умножением возвращает а = 4');
    alert('x = ' + x + '\n Арифметическое действие');
}

//2-3
function three() {
    let a = Number(prompt('Введите число a'));
    let b = Number(prompt('Введите число b'));
    let result;
    if (a >= 0 && b >= 0 && a > b) {
        result = a - b;
        alert('Разность чисел = ' + result);
    } else if (a >= 0 && b >= 0 && b > a) {
        result = b - a;
        alert('Разность чисел = ' + result);
    } else if (a < 0 && b < 0) {
        result = a * b;
        alert('Произведение чисел = ' + result);
    } else if (a > 0 && b < 0 || a < 0 && b > 0) {
        result = a + b;
        alert('Сумма чисел = ' + result);
    } else {
        alert('Вы ввели не число!')
    }
}

//2-4
function for_one() {
    function one(a, b) {
        return a - b;
    }
    let result = one(25, 5);
    alert('Разность чисел 25 и 5 = ' + result);
}

function for_two() {
    function one(a, b) {
        return a + b;
    }
    let result = one(25, 5);
    alert('Сумма чисел 25 и 5 = ' + result);
}

function for_three() {
    function one(a, b) {
        return a / b;
    }
    let result = one(25, 5);
    alert('Деление чисел 25 и 5 = ' + result);
}

function for_for() {
    function one(a, b) {
        return a * b;
    }
    let result = one(25, 5);
    alert('Умножение чисел 25 и 5  = ' + result);
}

//2-5
function five() {
    let operation = prompt('Укажите оператор + - / *');
    let arg1 = Number(prompt('Введите число a'));
    let arg2 = Number(prompt('Введите число b'));
    let result = mathOperation(arg1, arg2, operation);
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case '+':
                return arg1 + arg2;
            case '-':
                return arg1 - arg2;
            case '*':
                return arg1 * arg2;
            case '/':
                return arg1 / arg2;
            default:
                return ('Вы указали неверный оператор \n Пожалуйста, укажите корректный оператор +, -, *, /');
        }
    }
    alert(result);
}

//2-6
function six() {

    //способ 1
    let num = Number(prompt('Введите сумму которую хотите положить на счет'));
    function Num(n, text_forms) {
        n = Math.abs(n) % 10;
        if (n >= 5 && n <= 9) { return text_forms[2]; }
        if (n > 1 && n < 5) { return text_forms[1]; }
        if (n == 1) { return text_forms[0]; }
        return text_forms[2];
    }
    alert('Ваша сумма в ' + num + Num(num, [' рубль', ' рубля', ' рублей']) + ' зачислена');

    //способ 2
    //     let num = prompt('Введите сумму которую хотите положить на счет');
    //     let n = Array.from(num);
    //     let last = n[n.length - 1];
    //     let result = summa(last);

    //     function summa(last) {
    //         switch (last) {
    //             case '1':
    //                 return 'рубль';
    //             case '0':
    //             case '5':
    //             case '6':
    //             case '7':
    //             case '8':
    //             case '9':
    //                 return 'рублей';
    //             case '2':
    //             case '3':
    //             case '4':
    //                 return 'рубля';
    //         }
    //     }
    //     alert('Ваша сумма ' + num + ' ' + result + ' успешно зачислена.');
}


