var fname = sessionStorage.getItem("fname", fname);
var invoice = sessionStorage.getItem("invoice", invoice);
var phone = sessionStorage.getItem("phone", phone);
var subject = sessionStorage.getItem("subject", subject);
var rate = sessionStorage.getItem("rate", rate);
var quantity = sessionStorage.getItem("quantity", quantity);
var subject2 = sessionStorage.getItem("subject2", subject2);
var rate2 = sessionStorage.getItem("rate2", rate2);
var quantity2 = sessionStorage.getItem("quantity2", quantity2);
var date = sessionStorage.getItem("date", date);
var ddate = sessionStorage.getItem("ddate", ddate);
var month = sessionStorage.getItem("month", month);

var final_amt = rate * quantity + rate2 * quantity2;
document.getElementById("invoice1").innerHTML = invoice;
document.getElementById("date1").innerHTML = date;
document.getElementById("date2").innerHTML = ddate;
document.getElementById("amount").innerHTML = "₹" + final_amt;
document.getElementById("name1").innerHTML = fname;
document.getElementById("phone1").innerHTML = phone;

if (subject.length != 0 && rate.length != 0 && quantity.length != 0) {
  document.getElementById("subject1").innerHTML = subject;
  document.getElementById("month1").innerHTML = month;
  document.getElementById("rate1").innerHTML = "₹" + rate;
  document.getElementById("quantity1").innerHTML = quantity;
  document.getElementById("tamount").innerHTML =
    "₹" + parseInt(rate * quantity);
} else {
  document.getElementById("row2").style.display = "none";
}
if (subject2.length != 0 && rate2.length != 0 && quantity2.length != 0) {
  document.getElementById("subject2").innerHTML = subject2;
  document.getElementById("month2").innerHTML = month;
  document.getElementById("rate2").innerHTML = "₹" + rate2;
  document.getElementById("quantity2").innerHTML = quantity2;
  document.getElementById("tamount2").innerHTML =
    "₹" + parseInt(rate2 * quantity2);
} else {
  document.getElementById("row3").style.display = "none";
}

document.getElementById("amount2").innerHTML = "₹" + final_amt;

document.getElementById("amount3").innerHTML = "₹" + final_amt;
// print
function Print() {
  var printContents = document.getElementById("container").innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
