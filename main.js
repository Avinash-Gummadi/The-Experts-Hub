// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUbXHyt6n_Dx1dsjjl3dMThhzlH2yd35c",
  authDomain: "theexperthub-b3a39.firebaseapp.com",
  databaseURL: "https://theexperthub-b3a39-default-rtdb.firebaseio.com",
  projectId: "theexperthub-b3a39",
  storageBucket: "theexperthub-b3a39.appspot.com",
  messagingSenderId: "604023315778",
  appId: "1:604023315778:web:689b92fe0ca239f2c33cdb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// invoice
function Invoice() {
  var fname = document.getElementById("name").value;
  var invoice = document.getElementById("invoice").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var rate = document.getElementById("rate").value;
  var quantity = document.getElementById("quantity").value;
  var subject2 = document.getElementById("subject2").value;
  var rate2 = document.getElementById("rate2").value;
  var quantity2 = document.getElementById("quantity2").value;
  var date = document.getElementById("date").value;
  var ddate = document.getElementById("ddate").value;

  var d = new Date(date);
  if (!!d.valueOf()) {
    year = d.getFullYear();
    month = monthNames[d.getMonth()];
  }

  firebase
    .database()
    .ref("Invoice/" + invoice)
    .set({
      invoice: invoice,
      fname: fname,
      phone: phone,
      subject1: subject,
      subject2: subject2,
      date: date,
      amount1: rate * quantity,
      amount2: rate2 * quantity2,
      total: rate * quantity + rate2 * quantity2,
    });

  sessionStorage.setItem("fname", fname);
  sessionStorage.setItem("invoice", invoice);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("subject", subject);
  sessionStorage.setItem("rate", rate);
  sessionStorage.setItem("quantity", quantity);
  sessionStorage.setItem("subject2", subject2);
  sessionStorage.setItem("rate2", rate2);
  sessionStorage.setItem("quantity2", quantity2);
  sessionStorage.setItem("date", date);
  sessionStorage.setItem("month", month);
  sessionStorage.setItem("ddate", ddate);

  setTimeout(() => {
    window.open("invoice.html", "_blank");
  }, 3000);
}
// payslip
function Slip() {
  var payslip = document.getElementById("payslip").value;
  var sname = document.getElementById("sname").value;
  var sphone = document.getElementById("sphone").value;
  var sphone2 = document.getElementById("sphone2").value;
  var semail = document.getElementById("semail").value;
  var ssubject = document.getElementById("ssubject").value;
  var srate = document.getElementById("srate").value;
  var tresponse = document.getElementById("tresponse").value;
  var tvresponse = document.getElementById("tvresponse").value;
  var bonus = document.getElementById("bonus").value;
  var sadvance = document.getElementById("sadvance").value;
  var sdate = document.getElementById("sdate").value;
  var net_amount =
    parseInt(tvresponse * srate) + parseInt(bonus) + parseInt(sadvance);

  var sd = new Date(sdate);
  if (!!sd.valueOf()) {
    syear = sd.getFullYear();
    smonth = monthNames[sd.getMonth()];
  }

  var ssubject1 = document.getElementById("ssubject1").value;
  var srate1 = document.getElementById("srate1").value;
  var tresponse1 = document.getElementById("tresponse1").value;
  var tvresponse1 = document.getElementById("tvresponse1").value;
  var bonus1 = document.getElementById("bonus1").value;
  var sadvance1 = document.getElementById("sadvance1").value;
  var net_amount1 =
    parseInt(tvresponse1 * srate1) + parseInt(bonus1) + parseInt(sadvance1);

  firebase
    .database()
    .ref("Payslip/" + payslip)
    .set({
      payslip: payslip,
      sname: sname,
      sphone: sphone,
      semail: semail,
      ssubject: ssubject,
      ssubject1: ssubject1,
      samount: net_amount,
      samount1: net_amount1,
      sdate: sdate,
    });

  sessionStorage.setItem("sname", sname);
  sessionStorage.setItem("payslip", payslip);
  sessionStorage.setItem("sphone", sphone);
  sessionStorage.setItem("sphone2", sphone2);
  sessionStorage.setItem("semail", semail);
  sessionStorage.setItem("ssubject", ssubject);
  sessionStorage.setItem("srate", srate);
  sessionStorage.setItem("tresponse", tresponse);
  sessionStorage.setItem("tvresponse", tvresponse);
  sessionStorage.setItem("bonus", bonus);
  sessionStorage.setItem("sadvance", sadvance);
  sessionStorage.setItem("sdate", sdate);
  sessionStorage.setItem("smonth", smonth);
  sessionStorage.setItem("syear", syear);

  sessionStorage.setItem("ssubject1", ssubject1);
  sessionStorage.setItem("srate1", srate1);
  sessionStorage.setItem("tresponse1", tresponse1);
  sessionStorage.setItem("tvresponse1", tvresponse1);
  sessionStorage.setItem("bonus1", bonus1);
  sessionStorage.setItem("sadvance1", sadvance1);

  setTimeout(() => {
    window.open("payslip.html", "_blank");
  }, 3000);
}
