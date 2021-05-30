document.getElementById("btnUSD").onclick = function () {

    var inputUser6 = document.getElementById("nhapUSD").value;
    console.log(inputUser6);
    var USD = parseInt(inputUser6) * 23500;
    document.getElementById("ShowInfo3").innerHTML = "Tong la: " + USD;
    
    document.getElementById("ShowInfo3").classList.add("alertShowInfo", "textUpper");
    }