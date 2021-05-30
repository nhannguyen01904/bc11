document.getElementById("btnTrungBinh").onclick = function () {
    var inputUser1 = document.getElementById("num1").value;
    console.log(inputUser1);
    var inputUser2 = document.getElementById("num2").value;
    console.log(inputUser2);
    var inputUser3 = document.getElementById("num3").value;
    console.log(inputUser3);
    var inputUser4 = document.getElementById("num4").value;
    console.log(inputUser4);
    var inputUser5 = document.getElementById("num5").value;
    console.log(inputUser5);


    var trungbinh = (parseInt(inputUser1) + parseInt(inputUser2) + parseInt(inputUser3) + parseInt(inputUser4) +parseInt(inputUser5))/5;
    document.getElementById("ShowInfo2").innerHTML = "Tong la: " + trungbinh;

    document.getElementById("ShowInfo2").classList.add("alertShowInfo", "textUpper");


}
