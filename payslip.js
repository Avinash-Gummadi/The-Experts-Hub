var sname = sessionStorage.getItem("sname", sname);
var sphone = sessionStorage.getItem("sphone", sphone);
var sphone2 = sessionStorage.getItem("sphone2", sphone2);
var semail = sessionStorage.getItem("semail", semail);
var ssubject = sessionStorage.getItem("ssubject", ssubject);
var srate = sessionStorage.getItem("srate", srate);
var tresponse = sessionStorage.getItem("tresponse", tresponse);
var tvresponse = sessionStorage.getItem("tvresponse", tvresponse);
var bonus = sessionStorage.getItem("bonus", bonus);
var sadvance = sessionStorage.getItem("sadvance", sadvance);
var sdate = sessionStorage.getItem("sdate", sdate);
var smonth = sessionStorage.getItem("smonth", smonth);
var syear = sessionStorage.getItem("syear", syear);

var ssubject1 = sessionStorage.getItem("ssubject1", ssubject1);
var srate1 = sessionStorage.getItem("srate1", srate1);
var tresponse1 = sessionStorage.getItem("tresponse1", tresponse1);
var tvresponse1 = sessionStorage.getItem("tvresponse1", tvresponse1);
var bonus1 = sessionStorage.getItem("bonus1", bonus1);
var sadvance1 = sessionStorage.getItem("sadvance1", sadvance1);

document.getElementById("sname").innerHTML = sname;
document.getElementById("sphone").innerHTML = sphone;
document.getElementById("semail").innerHTML = semail;
document.getElementById("sphone2").innerHTML = sphone2;
if (
  ssubject.length != 0 &&
  tresponse.length != 0 &&
  tvresponse.length != 0 &&
  srate.length != 0
) {
  document.getElementById("smonth1").innerHTML = smonth;
  document.getElementById("syear1").innerHTML = syear;
  document.getElementById("ssubject").innerHTML = ssubject;
  document.getElementById("tresponse").innerHTML = tresponse;
  document.getElementById("tvresponse").innerHTML = tvresponse;
  document.getElementById("srate").innerHTML = "₹" + srate;
  document.getElementById("bonus").innerHTML = "₹" + bonus;
  document.getElementById("tearnings").innerHTML =
    tvresponse * srate + parseInt(bonus);
  document.getElementById("sadvance").innerHTML = "₹" + sadvance;
  var net_amount =
    parseInt(tvresponse * srate) + parseInt(bonus) + parseInt(sadvance);
  document.getElementById("netamount").innerHTML = "₹" + net_amount;
} else {
  document.getElementById("first_sub").style.display = "none";
}
if (
  ssubject1.length != 0 &&
  tresponse1.length != 0 &&
  tvresponse1.length != 0 &&
  srate1.length != 0
) {
  document.getElementById("smonth2").innerHTML = smonth;
  document.getElementById("syear2").innerHTML = syear;
  document.getElementById("ssubject1").innerHTML = ssubject1;
  document.getElementById("tresponse1").innerHTML = tresponse1;
  document.getElementById("tvresponse1").innerHTML = tvresponse1;
  document.getElementById("srate1").innerHTML = "₹" + srate1;
  document.getElementById("bonus1").innerHTML = "₹" + bonus1;
  document.getElementById("tearnings1").innerHTML =
    tvresponse1 * srate1 + parseInt(bonus1);
  document.getElementById("sadvance1").innerHTML = "₹" + sadvance1;
  var net_amount1 =
    parseInt(tvresponse1 * srate1) + parseInt(bonus1) + parseInt(sadvance1);
  document.getElementById("netamount1").innerHTML = "₹" + net_amount1;
} else {
  document.getElementById("second_sub").style.display = "none";
}
// print
function Print() {
  var printContents = document.getElementById("container").innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
