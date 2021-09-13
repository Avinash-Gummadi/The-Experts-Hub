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

function SelectAllData() {
  firebase
    .database()
    .ref("Payslip")
    .on("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        var sname = CurrentRecord.val().sname;
        var sphone = CurrentRecord.val().sphone;
        var semail = CurrentRecord.val().semail;
        var ssubject = CurrentRecord.val().ssubject;
        var samount = CurrentRecord.val().samount;
        var ssubject1 = CurrentRecord.val().ssubject1;
        var samount1 = CurrentRecord.val().samount1;
        var sdate = CurrentRecord.val().sdate;
        AddItemsToTable(
          sname,
          sphone,
          semail,
          ssubject,
          samount,
          ssubject1,
          samount1,
          sdate
        );
      });
    });
}

window.onload = SelectAllData;
var sno = 0;

function AddItemsToTable(
  sname,
  sphone,
  semail,
  ssubject,
  samount,
  ssubject1,
  samount1,
  sdate
) {
  var tbody = document.getElementById("tbody1");
  var trow = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");

  td1.innerHTML = ++sno;
  td2.innerHTML = sname;
  td3.innerHTML = sphone;
  td4.innerHTML = semail;
  td5.innerHTML = ssubject;
  td6.innerHTML = samount;
  td7.innerHTML = ssubject1;
  td8.innerHTML = samount1;
  td9.innerHTML = sdate;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  tbody.appendChild(trow);
}
