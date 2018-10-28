let Store = function () {
    this.pizzaSlicePrice = function (number) {
        this.pizzaPrice = number;
    };

    this.weekendDiscount = function (number) {
        this.weekendDiscount = number;
    };

    this.nightDiscount = function (number) {
        this.nightDiscount = number;
    };

    this.bonus = function (number) {
        this.bonus = number;
    };

    this.buyPizza = function () {
        return `Price after discount is ${this.pizzaPrice} and you have ${this.bonus} bonuses`;
    };
};

let GetDiscount = function (pizza, weekendDiscount, nightDiscount) {
    this.pizza = pizza;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;

    this.buyPizza = function () {
        let price = this.pizza.pizzaPrice;
        let date = new Date();
        const NIGHT_BEGIN = 23;
        const NIGHT_END = 6;
        const SATURDAY = 6;
        const SUNDAY = 0;

        if (date.getHours() >= NIGHT_BEGIN || date.getHours() <= NIGHT_END &&
            date.getDay() === SUNDAY || date.getDay() === SATURDAY) {
            price = price - nightDiscount - weekendDiscount;
        } else if (date.getHours() === NIGHT_BEGIN || date.getHours() <= NIGHT_END) {
            price -= nightDiscount;
        } else if (date.getDay() === SUNDAY || date.getDay() === SATURDAY) {
            price -= weekendDiscount;
        }

        return `Price after discount is ${price} and you have ${this.pizza.bonus} bonuses`;
    };
};

let SetBonus = function (pizza) {
    this.pizza = pizza;
    this.bonus = pizza.bonus;
    this.pizzaPrice = pizza.pizzaPrice;

    for (let i = 1; i <= pizza.pizzaPrice; i++) {
        if (i % 10 === 0) {
            this.bonus++;
        }
    }
    
    this.buyPizza = function () {
        return `Price after discount is ${pizza.pizzaPrice} and you have ${this.bonus} bonuses`;
    };
};

let pizza = new Store();
pizza.pizzaSlicePrice(100);
pizza.bonus(0);

let discount = new GetDiscount(pizza, 10, 20);
console.log(discount.buyPizza());

let bonus = new SetBonus(pizza);
console.log(bonus.buyPizza());

