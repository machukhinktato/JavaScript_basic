/*jshint esversion: 6 */
'use strict';


function initCatalog() {
    let TITLES = [
        'MANGO PEOPLE T-SHIRT',
        'BANANA PEOPLE T-SHIRT',
        'POTATO PEOPLE T-SHIRT',
        'CUCUMBER PEOPLE T-SHIRT',
        'PEPPER PEOPLE T-SHIRT',
        'GOROKCH PEOPLE T-SHIRT',
        'ORANGE PEOPLE T-SHIRT',
        'KIWI PEOPLE T-SHIRT'
    ];
    let PRICES = [52, 68, 36.1, 700, 87, 50, 67.5, 120.03];

    const catalog = {
        items: [],
        container: null,
        basket: null,
        init(basket) {
            this.container = document.querySelector('#catalog');
            this.items = getCatalogItems(TITLES, PRICES);
            this.basket = basket;
            this._render();
            this._handleEvents();
        },
        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderCatalogTemplate(item, i);
            });
            this.container.innerHTML = htmlStr;
        },

        _handleEvents() {
            this.container.addEventListener('click', event => {
                if (event.target.name == 'add') {
                    // console.log('куплено')
                    let id = event.target.dataset.id;
                    let item = this.items.find(el => el.productId == id);
                    item = Object.assign({}, item, {productAmount:1});
                    this.basket.add(item);
                }
            });

        }
    };
    return catalog;
}


function getCatalogItems(TITLES, PRICES) {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createCatalogItems(i, TITLES, PRICES));
    }

    return arr;
}


function createCatalogItems(index, TITLES, PRICES) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: `prod_${index + 1}` //'prod_1'
    }
}

function renderCatalogTemplate() {
    return `
            <div class="featuredItem">
            <div class="featuredImgWrap">
                <div class="featuredBuy">
                    <button 
                        name="add"
                        data-id="${item.productId}"
                    >
                        <img src="../src/assets/images/addToCart.png" alt="">
                        Add to Cart
                    </button>
                </div>
                <img class="featuredProduct" src="../src/assets/images/featuredItem${1 + i}.jpg" alt="">
            </div>
            <div class="featuredNameAndPrice">
                <div class="featuredItemName">
                    ${item.productName}
                </div>
                <div class="featuredItemPrice">$${item.productPrice}</div>
            </div>
        </div>
    `
}