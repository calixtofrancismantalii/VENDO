function modeofpayment(){
    var bottleOrCash, bottle, cash;
    bottleOrCash = document.getElementById("bottleOrCash");
    bottle = document.getElementById("bottle");
    cash = document.getElementById("cash");
    
    if(bottleOrCash.value == "bottle"){
        bottle.style.display = "block";
        cash.style.display = "none"
    }
    else if(bottleOrCash.value == "cash"){
        cash.style.display = "block";
        bottle.style.display = "none";
    }
    
}




function loadIt(){
    var fullname, selectnetwork, mobilenumber, bottleOrCash, bottleNumber, cashAmount, modal, a, b, c, d, e, f;
    fullname = document.getElementById("fullname");
    selectnetwork = document.getElementById("selectnetwork");
    mobilenumber = document.getElementById("mobilenumber");
    bottleOrCash = document.getElementById("bottleOrCash");
    bottleNumber = document.getElementById("bottleNumber");
    cashAmount = document.getElementById("cashAmount");
    
    a = document.getElementById("a");
    b = document.getElementById("b");
    c = document.getElementById("c");
    d = document.getElementById("d");
    e = document.getElementById("e");
    f = document.getElementById("f");
    
    modal = document.getElementById("modal");
    
    
    name = fullname.value;
    network = selectnetwork.value;
    number = mobilenumber.value;
    payment = bottleOrCash.value;
    bottleNumSelected = bottleNumber.value;
    cashAmountInputed = cashAmount.value;
    
    
    if(name == ""){
        window.alert("Please fill out the following details")  
    }
    else if(name == name){
        modal.style.display = "block";
        a.innerHTML = "Hi! " + name + " you've successfully loaded";
        b.innerHTML = "to your " + network;
        c.innerHTML = "number " + number;
        d.innerHTML = "using " + payment;
        e.innerHTML = bottleNumSelected;
        f.innerHTML = cashAmountInputed;
        
    }
    
    
    

    
}







function closeModal(){
    var modal, fullname, selectnetwork, mobilenumber, bottleOrCash, bottleNumber, cashAmount, bottle;
    modal = document.getElementById("modal");
    fullname = document.getElementById("fullname");
    selectnetwork = document.getElementById("selectnetwork");
    mobilenumber = document.getElementById("mobilenumber");
    bottleOrCash = document.getElementById("bottleOrCash");
    bottleNumber = document.getElementById("bottleNumber");
    cashAmount = document.getElementById("cashAmount");
    bottle = document.getElementById("bottle");
 
    modal.style.display = "none";
    
    fullname.value = "";
    selectnetwork.value = "--select network--";
    mobilenumber.value = "";
    bottleOrCash.value = "--select payment--";
    bottleNumber.value = "";
    cashAmount.value = "";
    
    bottle.style.display = "none";
    
    
    
}

