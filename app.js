function getUpdateValue(product,price,inCrease) {
    //get value
    const productNumber = document.getElementById(product+'-number');
    let productValue = parseInt(productNumber.value);
    if (inCrease == true) {
        productValue = productValue + 1;
        
    }
    else if (productValue > 0) {
        productValue = productValue - 1;
        
    }

    // set value
    productNumber.value = productValue;

    //set total
   const productTotal= document.getElementById(product +'-total');
    productTotal.innerText = productValue*price;

    calculate();

}

function getTotal(product){
    const productInput = document.getElementById(product + '-number');
    const productValue = parseInt(productInput.value);
    return productValue;
}

function calculate(product)
{
    const caseValue = getTotal('case')*59;
    const phoneValue = getTotal('phone')*1219;
    


    const subTotal = caseValue + phoneValue;
    const tax = subTotal /5;
    const totalAmount = subTotal+tax;

     document.getElementById('sub-total').innerText=subTotal;
     document.getElementById('tax-amount').innerText=tax;
     document.getElementById('total-amount').innerText=totalAmount;

}

//handel event case 
document.getElementById('case-pluse').addEventListener('click', function () {
//case-input filed---->disply
    getUpdateValue('case',59,true);
   

});


document.getElementById('case-minus').addEventListener('click', function () {
//case-input filed---->disply
    getUpdateValue('case',59,false);


});


//handel event phone 
document.getElementById('phone-plus').addEventListener('click',function(){
    getUpdateValue('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    getUpdateValue('phone',1219,false);
});