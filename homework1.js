'use strict';

//1-1
function deg() {
    let C = Number(prompt('Введите температуру'));
    let F = (9 / 5) * C + 32;
    alert(`Температура в Фаренгейтах = ${F}\u2109`);
}
//1-2
function vasya() {
    let name = ('Василий');
    let admin = name;
    console.log(admin);
}

//1-3
function description() {
    /**
     *
     * @a Плюс перед кавычками играет функцию присоедиения строки`
     */
    let a = 10 + 10 + "10";
    console.log(`10 + 10 + "10" = ${a}`);

    /**
     * @b Тоже самое что и в первом случае только присоединение до и после
     */
    let b = 10 + "10" + 10;
    console.log(`10 + "10" + 10 = ${b}`);

    /**
     * @c Первый плюс это оператор сложения, а второй принудительно делает строку - числом
     */
    let c = 10 + 10 + +"10";
    console.log(`10 + 10 + +"10" = ${c}`);

    /**
     * @d Минус делает сроку отрицательным числом. А пустые кавычки возвращают 0. На ноль делить нельзя, точнее получается бесконечность
     */
    let d = 10 / -"";
    console.log(`10 / -"" = ${d}`);
    
    /**
     * @e Неправильная запись десятичных чисел. Разделителем обязана быть точка. Плюс(+) принудительно делает строку числом
     */
    let e = 10 / +"2,5";
    console.log(`10 / +"2,5" = ${e}`)
}