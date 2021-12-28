'use strict';
//ДЗ-1//
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
    let a = 10 + 10 + "10";
    console.log(`10 + 10 + "10" = ${a}\n В данном случае плюс перед кавычками играет функцию присоедиения строки`);

    let b = 10 + "10" + 10;
    console.log(`10 + "10" + 10 = ${b}\n Тоже самое что и в первом случае только присоединение до и после`);

    let c = 10 + 10 + +"10";
    console.log(`10 + 10 + +"10" = ${c}\n В данном случае первый плюс это оператор сложения, а второй принудительно делает строку - числом`);

    let d = 10 / -"";
    console.log(`10 / -"" = ${d}\n В данном случае минус делает сроку отрицательным числом. А пустые кавычки возвращают 0. Ноль не может быть отрицательным и на ноль делить нельзя, точнее получается бесконечность`);
    let e = 10 / +"2,5";
    console.log(`10 / +"2,5" = ${e}\n Неправильная запись десятичных чисел. Разделителем обязана быть точка. Плюс(+) принудительно делает строку числом.`)
}

//ДЗ-2//

//2-1
function one() {
    let a = 1, b = 1, c, d;
    console.log('Заданы переменные: a = 1, b = 1, c, d;')
    c = ++a;
    console.log(`c = ++a; \nОтвет: ${c} - т.к. инкреммент а=2 следовательно с=а=2`);
    d = b++;
    console.log(`d = b++; \nОтвет: ${d} - т.к. инкремент стоит после, то "d" принимает значение "b" до инкремента т.е. 1`);
    c = 2 + ++a;
    console.log(`c = 2 + ++a; \nОтвет: ${c} - т.к. "a" в первой функции принела значение по инкременту 2, то в данной функции инкремент а=2+1=3`);
    d = 2 + b++;
    console.log(`d = 2 + b++; \nОтвет: ${d} - т.к. "b" во второй функции принела значение по инкременту 2, а в данной функции инкремент стоит после, следовательно сложение происходит, до инкремента с числом 2`);
    console.log(`a = ${a} - в первом и третьем примере функия инкремента для "а" применилась два раза`);
    console.log(`b = ${b} - во втором и четвертом примере функия инкремента для "b" применилась два раза`);
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
    /////Можно ли записать по другому?
    if (operation == '+') {
        alert(`Сумма = ${result}`);
    } else if (operation == '-') {
        alert(`Разность = ${result}`);
    } else if (operation == '*') {
        alert('Произведение = ' + result);
    } else {
        alert(`Деление = ${result}`);
    }
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
    alert(`Ваша сумма в ${num}${Num(num, [' рубль', ' рубля', ' рублей'])} зачислена`);

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

//ДЗ-3//
//3-1
function chetnechet() {
    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(`${i} это ноль`);
        } else if (i % 2 == 0) {
            console.log(`${i} четное число`);
        } else if ((i % 2 != 0)) {
            console.log(`${i} нечетное число`);
        }
    }
}
//3-2
function vivod() {
    const post = {
        author: "John", //вывести этот текст 
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число 
                }
            },
            {
                userId: 5, //вывести это число 
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст 
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
    console.log(`Author: ${post.author}`);
    console.log(`Alex dislikes: ${post.comments[0].rating.dislikes}`);
    console.log(`Id Jane: ${post.comments[1].userId}`);
    console.log(`Text Jane: ${post.comments[1].text}`);
}

//3-3
function sale() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    ////НЕ ЗАБЫВАТЬ ЧТО forEach НИЧЕГО НЕ ВОЗВРАЩАЕТ!!!!! (Для себя )
    let disc = products.forEach(function (products) {
        console.log(`Цена товара с id: ${products.id} и начальной ценой: ${products.price}\$ со скидкой 15% = ${products.price - (products.price * 15 / 100)}\$`);
    });

}

//3-4
function filter() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: ["1.jpg", "2.jpg",]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: ["3.jpg"]
        },
        {
            id: 8,
            price: 78,
        },
    ];
    //Фильтр
    let withphotos = products.filter(function (products) {
        return products.photos && products.photos.length !== 0;
    });
    console.log(withphotos);
    ///Сортировка
    let sortir = products.sort(function (a, b) {
        return a.price - b.price;
    });
    console.log(sortir);
}

//3-5
//Не понял как вывести все числа в консоль не записывая в теле for?
function zeronine() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

//3-6
function slide() {
    for (let i = 0, q = 'x'; i < 20; i++) {
        q = q + 'x';
        console.log(q);
    }
}



/////ДЗ-4////////////
//4-1
function numtoobj() {
    let num = Number(prompt('Введите число от 0 до 999'));
    num = Math.floor(num);
    if (num < 0 || num > 999 || !Number.isInteger(num)) {
        alert('Вы ввели не то число или вовсе не число');
    }
    class Propofnum {
        constructor(units, tens, hundreds) {
            this.units = units;
            this.tens = tens;
            this.hundreds = hundreds;
        }
    }
    let obj = new Propofnum(num % 10, Math.floor(num / 10) % 10, Math.floor(num / 100))
    console.log(obj);
}

//4-1-1
function prod() {
    ////es5
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.make25PercentDiscount = function () {
        this.price = (this.price - (this.price * 25 / 100));
    }
    let product = new Product('Milanchiki', 45);
    product.make25PercentDiscount();
    console.log(product);

    /////es6
    // class Product {
    //     constructor(name, price) {
    //         this.name = name;
    //         this.price = price;
    //     }
    //     make25PercentDiscount() {
    //         this.price = (this.price - (this.price * 25 / 100));
    //     }
    // }
    // let product = new Product('Milanchiki', 45);
    // product.make25PercentDiscount();
    // console.log(product);
}

//4-1-2
function post() {
    let push = prompt('Сообщение');
    ///es5
    function Post(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    Post.prototype.medit = function () {
        this.text = push;
    }
    function Attac(author, text, date) {
        Post.call(this, author, text, date);
        this.highlighted = false;
    }
    Attac.prototype = Object.create(Post.prototype);
    Attac.prototype.constructor = Attac;
    Attac.prototype.makeTextHighlighted = function () {
        this.highlighted = true;
    }

    /////////es6
    // class Post {
    //     constructor(author, text, date) {
    //         this.author = author;
    //         this.text = text;
    //         this.date = date;
    //     }
    //     medit() {
    //         this.text = push;
    //     }
    // }
    // class Attac extends Post {
    //     constructor(author, text, date) {
    //         super(author, text, date);
    //         this.highlighted = false;
    //     }
    //     makeTextHighlighted() {
    //         this.highlighted = true;
    //     }
    // }
    let attac = new Attac('Artem', '', '26.12.21');
    attac.makeTextHighlighted();
    attac.medit();
    console.log(attac);

}

