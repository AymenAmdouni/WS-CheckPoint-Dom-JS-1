// console.log("JS file linked succesfully");



// Select the HTML elements

var likes = Array.from(document.querySelectorAll(".fa-heart"));
// console.log(likes);
var deletesBtn = Array.from(document.querySelectorAll(".fa-trash-alt"));
// console.log(deletesBtn);
var cards = Array.from(document.querySelectorAll(".card"));
// console.log(cards);
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var munisBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));
//  console.log(plusBtns) 
// console.log(munisBtns)


// add events listener to the heart icons 
for (let like of likes) {
like.addEventListener("click",function(){
if (like.style.color != "red"){
    like.style.color = "red";
} else{
    like.style.color = "black";
}

});
}
//  add events listeners to the trash icons
for (let i in deletesBtn) {
deletesBtn[i].addEventListener("click",function(){
    cards[i].remove();
    total();
});
}

//  add events listeners to the plus icons

for(let plus of plusBtns) {
plus.addEventListener("click",function(){
plus.nextElementSibling.innerHTML ++ ;
total();
});
}

//  add events listeners to the minus icons

for (let minus of munisBtns) {
minus.addEventListener("click", function () {
(minus.previousElementSibling.innerHTML >0) &&(minus.previousElementSibling.innerHTML--)
total();
});
}

// total price 

function total(){
let quantites = Array.from(document.querySelectorAll(".quantity"));
let price = Array.from(document.querySelectorAll(".unit-price"));
let totalPrice =0;

for(i=0; i<quantites.length; i++){
totalPrice = totalPrice +price[i].innerHTML*quantites[i].innerHTML

}
document.getElementById("total-price").innerHTML = totalPrice;
}







