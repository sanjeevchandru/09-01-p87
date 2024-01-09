document.write("51. to convert a given number into hours and minutes."+"<br>");
function test51(n){
    var h=Math.floor(n/60);
    var m=n%60;
    return h+" : "+m;
}
document.write("The number is :70 ,Ans :"+test51(70)+"<br><br>");