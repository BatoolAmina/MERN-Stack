const myarr = [34, 56, 12, 43, 2, 9];
const sqrtnums = myarr.map((n) => {
    return n*n;
})
console.log(sqrtnums);

// filter all even numbers from my array
const evenNums = myarr.filter((n) => {
    return n % 2  === 0;
})
console.log(evenNums)

const prices = [2300, 3200, 500, 1250, 800, 5500];
// add 18% GST to each price
const gstPrices = prices.map((p) => {
    return p * 1.18;
});
console.log(gstPrices);

const budgetPrices = prices.filter((p) => {
    return p < 2000;
});
console.log(budgetPrices);

const prices2 = [ '₹456.89', '₹2300.50', '₹88.10', '₹99.999' ];
const intPrices = prices2.map((p) => {
    return parseInt(p.slice(1));
})
console.log(intPrices);