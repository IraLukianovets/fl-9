let totalPrice = parseFloat(prompt('Enter an amount of money', '0'));
let discount = parseFloat(prompt('Enter a discount', '0'));
let priceWithDiscount;
let savedMoney;
let discountShortend = discount.toFixed(2);
let output;

if (totalPrice <= 0 || discount <= 0 || discount >= 100) {
    output = 'Invalid data';
} else {
    savedMoney = (totalPrice * discount / 100).toFixed(2);
    priceWithDiscount = (totalPrice - savedMoney).toFixed(2);
    output = `Price without discount: ${totalPrice}
              Discount: ${discountShortend} %
              Price with discount:  ${priceWithDiscount}
              Saved: ${savedMoney}`
}

console.log(output);