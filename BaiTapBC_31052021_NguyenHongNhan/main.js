document.getElementById("btnTong").onclick = function () {
    var inputUser1 = document.getElementById("ten").value;
    console.log(inputUser1);
    var inputUser2 = document.getElementById("sotien").value;
    console.log(inputUser2);
    var inputUser3 = document.getElementById("soluong").value;
    console.log(inputUser3);
    var tong = 0;

    if(inputUser3 > 49 && inputUser3 <101){
        tong = (parseInt(inputUser2) * parseInt(inputUser3)) * 0.08;
     } else if (inputUser2 > 100) {
        tong = (parseInt(inputUser2) * parseInt(inputUser3)) * 0.12; 
    } else {
        tong = (parseInt(inputUser2) * parseInt(inputUser3)); 
       
    }

    
    
    document.getElementById("ShowInfo").innerHTML = "Tên: " + inputUser1;
    document.getElementById("ShowInfo2").innerHTML = "Tổng: " + tong;
    document.getElementById("ShowInfo").classList.add("alertShowInfo", "textUpper");
    document.getElementById("ShowInfo2").classList.add("alertShowInfo", "textUpper");

}