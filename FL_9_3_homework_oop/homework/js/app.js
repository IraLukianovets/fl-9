function Product({ name, description, price }) {

    this.name = name;
    this.description = description;
    this.price = price;

    let purchaseHistory = []; 
    let cartList = [];


    this.setPrice = function (price) {
        price < this.price ? console.error('Cant set smaller price than it is!') : this.price = price;
        return this;
    }

    this.getPrice = function () {
        return this.price;
    }

    this.add = function (cardName) {
        cartList = cardName;
        purchaseHistory.push(`${this.name} was added to ${cartList} on ${new Date()}`);

        return this;
    }
    this.removeProduct = function (cartName) {
        cartList = '';
        purchaseHistory.push(`${this.name} is removed from ${cartName} on ${new Date()}`);
        return this;
    }

    this.getHistory = function () {
        return purchaseHistory;
    }

}

function ShoppingCart({name, owner, maxSize}) {

    this.name = name;
    this.owner = owner;
    this.maxSize = maxSize;

    this.cartProducts = [];
    let createdDate = new Date();
    let cartHistory = [];

    cartHistory.push(`${this.name} was created on ${createdDate}`);

    this.addNewProduct = function (product) {

        if (!(product instanceof Product)) {
            return console.log(`Error. product not an instance of Product`);
        }

        if (this.cartProducts.length < maxSize) {
            this.cartProducts.push(product);
        } else {
            let min = this.cartProducts[0];
            for (let i = 0; i < this.cartProducts.length; i++) {
                if (min.price > this.cartProducts[i].price) {
                    min = this.cartProducts[i];
                }
            }
            this.removeProduct(min);
            this.cartProducts.push(product);
        }
        product.add(this.name);
        cartHistory.push(`${product.name} was added to ${this.name} on ${new Date()}`);

        return this;

    }

    this.removeProduct = function (product) {
        product.removeProduct(this.name);
        let id = this.cartProducts.indexOf(product);
        this.cartProducts.splice(id, 1);
        cartHistory.push(`${product.name} was removed from ${this.name} on ${new Date()}`);

        return this;
    }

    this.getAvaragePrice = function () {
        let avgPrice = 0;
        for (let i = 0; i < this.cartProducts.length; i++) {
            avgPrice += this.cartProducts[i].price;
        }
        return avgPrice / this.cartProducts.length;
    };

    this.getProducts = function () {
        return this.cartProducts;
    };

    this.getTotalPrice = function () {
        let totalPrice = 0;

        for (let i of this.cartProducts) {
            totalPrice += i.price;
        }
        return totalPrice;
    };

    this.getFormattedListOfProducts = function () {

        let result = [];
        let productDescription = [];

        for (let i = 0; i < this.cartProducts.length; i++) {
            productDescription.push(Object.entries(this.cartProducts[i].description).join(' ; ')
                                                                                    .split(',')
                                                                                    .join(':'));
        }
        for (let i = 0; i < this.cartProducts.length; i++) {
            result.push(`${this.cartProducts[i].name} - is on ${this.name} from ${this.cartProducts[i].date}.
            Detailed product description: ${productDescription[i]}`);
        }
        return result;
    };

    this.getHistoryLog = function () {
        return cartHistory;
    }
    
}

const banana = new Product({
    name: 'banana',
    description: {
      color: 'yellow',
      size: 'medium'
    },
    price: 45
  });
  
  const apple = new Product({
    name: 'apple',
    description: {
      color: 'red',
      size: 'small'
    },
    price: 30
  });
  
  const stevesShopCart = new ShoppingCart({
    name: 'stevesCart',
    owner: 'Steve',
    maxSize: 5
  });
  
  stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(apple)
    .removeProduct(banana);
 
    console.log(stevesShopCart.getHistoryLog())


  