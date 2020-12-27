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
}