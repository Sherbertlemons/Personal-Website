import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyALGhF9CFo3vDFiIkfSWJe-IpCoOqjflx8",
    authDomain: "personal-website-e1aca.firebaseapp.com",
    projectId: "personal-website-e1aca",
    storageBucket: "personal-website-e1aca.appspot.com",
    messagingSenderId: "168997010558",
    appId: "1:168997010558:web:884758bbf9e54fff106c2f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('reg-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
});

document.getElementById('log-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
    
});

document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            // document.getElementById("result-box").style.display="inline";
            // document.getElementById("login-div").style.display="none";
            // document.getElementById("result").innerHTML="Welcome back<br>" + loginEmail + " was login sucessfully";
            sessionStorage.setItem("loggedIn", loginEmail);
            window.location.href="index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("result-box").style.display="inline";
            document.getElementById("login-div").style.display="none";
            document.getElementById("result").innerHTML="Sorry!<br>" + errorMessage;
        });
});

document.getElementById("register-btn").addEventListener('click', function(){
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById("result-box").style.display="inline";
            document.getElementById("register-div").style.display="none";
            document.getElementById("result").innerHTML="Welcome <br>" + registerEmail + " was registered sucessfully"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("result-box").style.display="inline";
            document.getElementById("register-div").style.display="none";
            document.getElementById("result").innerHTML="Sorry!<br>" + errorMessage;
        });
});

document.getElementById("log-out-btn").addEventListener('click', function(){
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById("login-div").style.display="inline";
    }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry! <br>"+errorMessage;
    });
})
