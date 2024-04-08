let price = 200;
let creditCard = document.getElementById('creditCardInformation');
let paypal = document.getElementById('paypalInformation');
function total(value){
    var total = value*price;
    var newTotal = total - 50;
    document.getElementById('total').innerHTML =`<del class="text-red-500">${total}DH</del> <ins class="text-color1">${newTotal}DH</ins>`;
}
/* display credit card information and hidden paypal information*/
document.getElementById('creditCard').onclick=function creditCardInformation(){
    creditCard.classList.remove('hidden');
    paypal.classList.add('hidden');
}
/* hidden credit card information and display paypal information*/
document.getElementById('paypal').onclick=function paypalInformation(){ 
    creditCard.classList.add('hidden');
    paypal.classList.remove('hidden');
}