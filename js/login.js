// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkvdeFRM2B097ovGxsoQIRkZf2fBkwNv8",
    authDomain: "soilfarmingagent-7feb25.firebaseapp.com",
    projectId: "soilfarmingagent-7feb25",
    storageBucket: "soilfarmingagent-7feb25.firebasestorage.app",
    messagingSenderId: "249491755364",
    appId: "1:249491755364:web:10cec17841a2220bd76a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    // Input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Loged in
            const user = userCredential.user;
            alert("Login Account...")
            console.log("Login Account")
            window.location.href = "userdashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            console.log("Error: ", errorMessage)
        });
})