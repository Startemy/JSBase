'use strict';
//4-1 Написать функцию, преобразующую число в объект
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
    const product = new Product('Milanchiki', 45);
    product.make25PercentDiscount();
    console.log(product);


    //es6
    class Product_scnd {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        make25PercentDiscount() {
            this.price = (this.price - (this.price * 25 / 100));
        }
    }
    const product_ = new Product_scnd('Milanchiki', 45);
    product.make25PercentDiscount();
    console.log(product_);
}

//4-1-2
function post() {
    const push = prompt('Сообщение');
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
    const attac = new Attac('Artem', '', new Date().toLocaleDateString());
    attac.makeTextHighlighted();
    attac.medit();
    console.log(attac);

    ///////es6
    class Post_scnd {
        constructor(author, text, date) {
            this.author = author;
            this.text = text;
            this.date = date;
        }

        medit() {
            this.text = push;
        }
    }
    class Attac_scnd extends Post_scnd {
        constructor(author, text, date) {
            super(author, text, date);
            this.highlighted = false;
        }
        makeTextHighlighted() {
            this.highlighted = true;
        }
    }
    const attac_ = new Attac_scnd('Artem', '', new Date().toLocaleDateString());
    attac_.makeTextHighlighted();
    attac_.medit();
    console.log(attac_);


}