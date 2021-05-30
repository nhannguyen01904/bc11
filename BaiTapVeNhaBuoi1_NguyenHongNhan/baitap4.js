document.getElementById("btnDT").onclick = function () {
    var dai = document.getElementById("dai").value;
    console.log(dai);
    var rong = document.getElementById("rong").value;
    console.log(rong);
    


    var DT = parseInt(dai) * parseInt(rong)  ;
    document.getElementById("ShowInfo4").innerHTML = "Diện Tích: " + DT;
    document.getElementById("ShowInfo4").classList.add("alertShowInfo", "textUpper");

    
    var CV = (parseInt(dai) + parseInt(rong)) * 2  ;
    document.getElementById("ShowInfo5").innerHTML = "Chu Vi: " + CV;
    document.getElementById("ShowInfo5").classList.add("alertShowInfo", "textUpper");

}
