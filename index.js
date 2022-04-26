// Write your solution in this file!

var customerName = "bob";
const leastFavoriteCustomer = "Tom";

function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
}

function setBestCustomer()
{
    globalThis.bestCustomer = "not bob";
}

function overwriteBestCustomer()
{
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer()
{
    leastFavoriteCustomer = 'definitely bob';
}