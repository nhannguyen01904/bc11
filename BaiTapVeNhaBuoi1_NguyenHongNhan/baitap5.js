document.getElementById("btnkyso").onclick = function () {
    var so = document.getElementById("kyso").value;
    console.log(so);
   


    var donvi = parseInt(so) / 10  ;
    var chuc = parseInt(so) % 10;

    var tong2 = Math.floor(donvi + chuc);
    document.getElementById("ShowInfo6").innerHTML = "Ký Số: " + tong2;
    document.getElementById("ShowInfo6").classList.add("alertShowInfo", "textUpper");

   
}
