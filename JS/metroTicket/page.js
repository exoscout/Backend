let childrenCount=0;
let childWCount=0;
let babyCount=0;
let adultsCount=0;
let adultsWCount=0;
let seniorsCount=0;

let totalPrice=0;
const ticketPrice=100;
const babydisc=100;
const childdisc=20;
const seniordisc=100;
const womanDisc=50;

function showTicket(){
    calculatePrice();
    document.getElementById("totalPrice").innerText="$" + totalPrice;
}

document.getElementById("babyMinus").addEventListener("click",function(){
    if(babyCount>0){
        babyCount--;
        document.getElementById("babyCount").innerText=babyCount;
    }
});

document.getElementById("babyPlus").addEventListener("click",function(){
    babyCount++;
    document.getElementById("babyCount").innerText=babyCount;
});

document.getElementById("childMinus").addEventListener("click",function(){
    if(childrenCount>0){
        childrenCount--;
        document.getElementById("childrenCount").innerText=childrenCount;
    }
});

document.getElementById("childPlus").addEventListener("click",function(){
    childrenCount++;
    document.getElementById("childrenCount").innerText=childrenCount;
});

document.getElementById("childWMinus").addEventListener("click",function(){
    if(childWCount>0){
        childWCount--;
        document.getElementById("childWCount").innerText=childWCount;
    }
});

document.getElementById("childWPlus").addEventListener("click",function(){
    childWCount++;
    document.getElementById("childWCount").innerText=childWCount;
});

document.getElementById("adultMinus").addEventListener("click",function(){
    if(adultsCount>0){
        adultsCount--;
        document.getElementById("adultsCount").innerText=adultsCount;
    }
});

document.getElementById("adultPlus").addEventListener("click",function(){
    adultsCount++;
    document.getElementById("adultsCount").innerText=adultsCount;
});

document.getElementById("adultWMinus").addEventListener("click",function(){
    if(adultsCount>0){
        adultsWCount--;
        document.querySelector("adultsWCount").innerText=adultsWCount;
    }
});

document.getElementById("adultWPlus").addEventListener("click",function(){
    adultsWCount++;
    document.getElementById("adultsWCount").innerText=adultsWCount;
});

document.getElementById("seniorMinus").addEventListener("click",function(){
    if(seniorsCount>0){
        seniorsCount--;
        document.getElementById("seniorsCount").innerText=seniorsCount;
    }
});

document.getElementById("seniorPlus").addEventListener("click",function(){
    seniorsCount++;
    document.getElementById("seniorsCount").innerText=seniorsCount;
});


function calculatePrice(){
    totalPrice=(adultsCount*ticketPrice+(adultsWCount*(womanDisc/100*ticketPrice)))+(seniorsCount*(ticketPrice-seniordisc/100*ticketPrice))+((childWCount)*(ticketPrice-Math.max(childdisc, womanDisc)/100*ticketPrice))+((childrenCount)*(ticketPrice-childdisc/100*ticketPrice))+(babyCount*(ticketPrice-babydisc/100*ticketPrice));
    document.getElementById("totalPrice").innerText="Total Price: "+totalPrice+"$";
}