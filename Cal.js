function addfunc() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = +x + +y;
    document.getElementById("ans").value=z;
}
function minfunc() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x - y;
    document.getElementById("ans").value=z;
}
function mulfunc() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x * y;
    document.getElementById("ans").value=z;
}
function divfunc() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x / y;
    document.getElementById("ans").value=z;
}
function clr() {
    document.getElementById("ans").value = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}