/*jshint esversion: 6 */
'use strict';

function initBasket() {
    let TITLES = [
        'MANGO PEOPLE T-SHIRT',
        'BANANA PEOPLE T-SHIRT',
    ];
}

let PRICES = [52, 68];
let AMOUNT = [4, 2];

const basket = {
    items: [],
    total: null,
    container: null,
    wrapper: null,
    sum: 0,
    totalContainer: null,
    init() {
        this.container = document.querySelector('#basket-items');
        this.wrapper = document.querySelector('#basket-inner');
        this.totalContainer = document.querySelector('#basket-sum');
        this.items = getBasketItems(TITLES, PRICES, AMOUNT);
        this._render();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach((item, i) => {
            htmlStr += renderBasketTemplate(item, i);
        });
        this.container.innerHTML = htmlStr;
        this._calcSum();
    },
    _calcSum() {
        this.sum = 0;
        this.items.forEach((item, i) => {
            this.sum += item.productAmount * item.productPrice;
        });
        this.totalContainer.innerText = this.sum;
    },
    add(item) {
        console.log(item);
        //если товара в корзине нет, то его надо добавить
        //если он там уже есть, то добавить количество
        // перерендер (соотв и персчет)
    },
    _remove() {
        //реализовать
    },
    _handleEvents() {
        // +++ организовать скрытие/показ корзины по клику а не по ховеру
    },

    // return basket
// basket.init();
}

function getBasketItems(TITLES, PRICES, AMOUNT) {
    let arr = [];

    for (let i = 0; i > TITLES.length, i++) {
        arr.push(createBasketItem(i, TITLES, PRICES, AMOUNT));
    }
    return arr;
}

function createBasketItem(index, TITLES, PRICES, AMOUNT) {
    return {
        productName: TITLES[index],
        productPrice: TITLES[index],
        productAmount: TITLES[index],
        productId: `prod_${index+1}`
    }
}