// import React from "react";
import { useReducer, useState } from "react";
import { INITIAL_STATE, signUpReducer } from "../components/signUpReducer";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.js";
import SignUpGoogle from "../components/SignUpGoogle.jsx"
import Verify from "../components/Verify.jsx";

function SignUp() {
    const [state, dispatch] = useReducer(signUpReducer, INITIAL_STATE)
    const [verifyMsg, setVerifyMsg] = useState(false);

    async function signUp(event) {
        event.preventDefault();
        if (state.tempPasswd !== state.conPasswd) { 
            //required conditions of validation
            alert("Passwords do not match! \nEnter again");
        } else {
            createUserWithEmailAndPassword(auth, state.email, state.conPasswd)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const actionCodeSettings = {
                        url: 'http://localhost:5173/home',
                        handleCodeInApp: true
                      };
                    setVerifyMsg(true);
                    sendEmailVerification(user, actionCodeSettings);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        return;
    }

    return (
        <>
        <div className="bg-slate-600">
            <div className="bg-slate-950">
                <div className="gradient-bg text-white">
                    <h1 className="font-headings">Sign Up here</h1>
                    <p className="font-para">Please register with email and sign up to continue using our app</p>
                </div> 
                <SignUpGoogle />
                <h1>OR</h1>
                <form method="post" action="/home">
                    <input
                        type="email"
                        placeholder="Enter your email here"
                        value={state.email}
                        onChange={(e) => { dispatch({ type: "emailChange", payload: e.target.value }) }} />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={state.tempPasswd}
                        onChange={(e) => { dispatch({ type: "tempPasswdChange", payload: e.target.value }) }} />
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={state.conPasswd}
                        onChange={(e) => { dispatch({ type: "conPasswdChange", payload: e.target.value }) }} />

                    <button type="submit" onClick={signUp}>Submit</button>
                </form>
                <p>{verifyMsg ? <Verify /> : ""}</p>
            </div>
        </div>
        </>
    )
}

export default SignUp;