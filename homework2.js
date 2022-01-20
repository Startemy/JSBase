'use strict';

//2-1
function one() {
    /** @a Задаем значения переменных */
    let a = 1, b = 1, c, d;
    console.log('Заданы переменные: a = 1, b = 1, c, d;')

    /** т.к. инкреммент а=2 следовательно с=а=2 */
    c = ++a;
    console.log(`c = ++a; \nОтвет: ${c}`);

    /** т.к. инкремент стоит после, то "d" принимает значение "b" до инкремента т.е. 1 */
    d = b++;
    console.log(`d = b++; \nОтвет: ${d}`);

    /** @c т.к. "a" в первой функции принела значение по инкременту 2, то в данной функции инкремент а=2+1=3 */
    c = 2 + ++a;
    console.log(`c = 2 + ++a; \nОтвет: ${c}`);

    /**
     * т.к. "b" во второй функции принела значение по инкременту 2, а
     * в данной функции инкремент стоит после, следовательно сложение 
     * происходит, до инкремента с числом 2
    **/
    d = 2 + b++;
    console.log(`d = 2 + b++; \nОтвет: ${d} - `);

    /** в первом и третьем примере функия инкремента для "а" применилась два раза */
    console.log(`a = ${a}`);

    /** во втором и четвертом примере функия инкремента для "b" применилась два раза */
    console.log(`b = ${b}`);
}

//2-2
function two() {
    let a = 2;
    let x = 1 + (a *= 2);
    console.log('Заданы переменные и функция: \n a = 2; \n x = 1 + (a *= 2);')
    console.log(`а = ${a}\n Оперератор присваивания с умножением (a *= 2) возвращает а = 4.`);
    console.log(`x = ${x}\n Арифметическое действие 1 + 5.`);
}

//2-3
function three() {
    let a = Number(prompt('Введите число a'));
    let b = Number(prompt('Введите число b'));
    let result;
    if (a >= 0 && b >= 0 && a > b) {
        result = a - b;
        alert(`Разность чисел = ${result}`);
    } else if (a >= 0 && b >= 0 && b > a) {
        result = b - a;
        alert(`Разность чисел = ${result}`);
    } else if (a < 0 && b < 0) {
        result = a * b;
        alert(`Произведение чисел = ${result}`);
    } else if (a > 0 && b < 0 || a < 0 && b > 0 || a == b) {
        result = a + b;
        alert(`Сумма чисел = ${result}`);
    } else {
        alert('Вы ввели не число!')
    }
}

//2-4
function for_one() {
    function one(a, b) {
        return a - b;
    }
    let result_one = one(25, 5);
    console.log(`Разность чисел 25 и 5 = ${result_one}`);

    function two(a, b) {
        return a + b;
    }
    let result_two = two(25, 5);
    console.log(`Сумма чисел 25 и 5 = ${result_two}`);

    function three(a, b) {
        return a / b;
    }
    let result_three = three(25, 5);
    console.log(`Деление чисел 25 и 5 = ${result_three}`);

    function for_(a, b) {
        return a * b;
    }
    let result_for = for_(25, 5);
    console.log(`Умножение чисел 25 и 5  = ${result_for}`);
}

//2-5
function five() {
    let operation = prompt('Укажите оператор + - / *');
    let a = Number(prompt('Введите число a'));
    let b = Number(prompt('Введите число b'));
    function one(a, b) {
        if (a >= 0 && b >= 0 && a > b) {
            return a - b;
        } else if (a >= 0 && b >= 0 && b > a) {
            return b - a;
        }
    }
    function two(a, b) {
        return a + b;
    }
    function three(a, b) {
        return a / b;
    }
    function for_(a, b) {
        return a * b;
    }
    function mathOperation(a, b, operation) {
        switch (operation) {
            case '+':
                return two(a, b);
            case '-':
                return one(a, b);
            case '*':
                return for_(a, b);
            case '/':
                return three(a, b);
            default:
                return ('Вы указали неверный оператор \n Пожалуйста, укажите корректный оператор +, -, *, /');
        }
    }
    if (operation == '+') {
        alert(`Сумма = ${mathOperation(a, b, operation)}`);
    } else if (operation == '-') {
        alert(`Разность = ${mathOperation(a, b, operation)}`);
    } else if (operation == '*') {
        alert(`Произведение = ${mathOperation(a, b, operation)}`);
    } else {
        alert(`Деление = ${mathOperation(a, b, operation)}`);
    }
}

//2-6
function six() {

    //способ 1
    let num = Number(prompt('Введите сумму которую хотите положить на счет'));
    function Num(n, text_forms) {
        n = Math.abs(n) % 10;
        if (n >= 5 && n <= 9) {
            return text_forms[2];
        }
        if (n > 1 && n < 5) {
            return text_forms[1];
        }
        if (n == 1) {
            return text_forms[0];
        }
        return text_forms[2];
    }
    alert(`Ваша сумма в ${num}${Num(num, [' рубль', ' рубля', ' рублей'])} зачислена`);

    //способ 2
    let num_second = prompt('Введите сумму которую хотите положить на счет');
    let n = Array.from(num_second);
    let last = n[n.length - 1];
    let res = summ(last);

    function summ(last) {
        switch (last) {
            case '1':
                return 'рубль';
            case '0':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                return 'рублей';
            case '2':
            case '3':
            case '4':
                return 'рубля';
        }
    }
    alert('Ваша сумма ' + num_second + ' ' + res + ' успешно зачислена.');
}