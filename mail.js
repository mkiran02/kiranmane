const firebaseConfig = {
  apiKey: "AIzaSyC6wFYLEqRULY88WfX5_AagDt7MifmG1lM",
  authDomain: "contactform-dea3a.firebaseapp.com",
  databaseURL: "https://contactform-dea3a-default-rtdb.firebaseio.com",
  projectId: "contactform-dea3a",
  storageBucket: "contactform-dea3a.appspot.com",
  messagingSenderId: "66888124441",
  appId: "1:66888124441:web:71a9884a82e87d5169c288",
  measurementId: "G-GT3T8TN30V"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};