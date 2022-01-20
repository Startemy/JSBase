'use strict';

//3-1 С помощью цикла for написать алгоритм для вывода чисел
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

//3-2 Выведите в консоль значения, указанные рядом с комментариями

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

//3-3 на каждый товар применить скидку 15%
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
    products.forEach(products => {
        let startprice = products.price;
        products.price = products.price - (products.price * 15 / 100); //Почему массив меняется, только если параментр функции products. А если например prod то нет?
        console.log(`Цена товара с id: ${products.id} и начальной ценой: ${startprice}\$ со скидкой 15% = ${products.price - (products.price * 15 / 100)}\$`);
    });
    console.log(products);
}

//3-4 

// 1.Получить все товары, у которых есть фотографии
// 2.Отсортируйте товары по цене (от низкой цены к высокой)
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
    /** @withphotos фильтр по наличию значения photos и по его наполнению */
    const withphotos = products.filter(products => {
        return products.photos && products.photos.length !== 0;
    });
    console.log(withphotos);

    /** @sortir Сортировка по цене */
    let sortin = products.sort((a, b) => {
        return a.price - b.price;
    });
    console.log(sortin);
}

//3-5 ывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла

function zeronine() {
    for (let i = 0; i < 10; console.log(i++)) { }
}

//3-6
function slide() {
    for (let i = 0, q = ''; i < 20; i++) {
        q += 'x';
        console.log(q);
        /** */
        console.log('x'.repeat(i + 1));
    }
}