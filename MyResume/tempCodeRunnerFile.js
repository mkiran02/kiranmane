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
var contactFormDB = firebase.database().ref('contactform')

document.getElementById('contact').addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

 var name = getElementVal('Your Name'); 
 var emailid = getElementVal('Your Email');
 var msgcontent = getElementVal('Message');
 
 console.log(name, emailid, msgcontent);
}

const getElementVal = (id) => {
    return document.getElementById(id).value; 
};