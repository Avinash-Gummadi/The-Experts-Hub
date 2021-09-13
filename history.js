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
    .ref("Invoice")
    .on("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        var name = CurrentRecord.val().fname;
        var phone = CurrentRecord.val().phone;
        var subject1 = CurrentRecord.val().subject1;
        var amount1 = CurrentRecord.val().amount1;
        var subject2 = CurrentRecord.val().subject2;
        var amount2 = CurrentRecord.val().amount2;
        var total = CurrentRecord.val().total;
        var date = CurrentRecord.val().date;
        AddItemsToTable(
          name,
          phone,
          subject1,
          amount1,
          subject2,
          amount2,
          total,
          date
        );
      });
    });
}

window.onload = SelectAllData;
var sno = 0;

function AddItemsToTable(
  name,
  phone,
  subject1,
  amount1,
  subject2,
  amount2,
  total,
  date
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
  td2.innerHTML = name;
  td3.innerHTML = phone;
  td4.innerHTML = subject1;
  td5.innerHTML = amount1;
  td6.innerHTML = subject2;
  td7.innerHTML = amount2;
  td8.innerHTML = total;
  td9.innerHTML = date;

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
