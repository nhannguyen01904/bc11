document.getElementById("btnClick").onclick = function () {

    var inputUser = document.getElementById("txtUser").value;
    console.log(inputUser);
    var tong = parseInt(inputUser) * 100000;
    document.getElementById("ShowInfo").innerHTML = "Tong la: " + tong;
    
    document.getElementById("ShowInfo").classList.add("alertShowInfo", "textUpper");
    }