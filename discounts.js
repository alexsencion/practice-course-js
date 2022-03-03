// const originalPrice = 120;
// const discount = 18;

function calcPriceWithDiscount(price, discount) {

    const pricePorcentagesWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePorcentagesWithDiscount) / 100;

    return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = calcPriceWithDiscount(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "the price with discount is $" + priceWithDiscount;

}



// console.log({
//     originalPrice, discount, pricePorcentagesWithDiscount, priceWithDiscount
// });



