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
    init() {
        this.container = document.querySelector('#catalog');
        this.items = getItems();
        this._render();
    },
    _render() {
        let htmlStr = '';

        this.items.forEach((item, i) => {
            htmlStr += `
                <div class="featuredItem">
                    <div class="featuredImgWrap">
                        <div class="featuredBuy">
                            <button>
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
        });
        this.container.innerHTML = htmlStr;
    }
}

catalog.init();


function getItems() {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createItem(i));
    }

    return arr;
}


function createItem(index) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: `prod_${index + 1}` //'prod_1'
    }
}
