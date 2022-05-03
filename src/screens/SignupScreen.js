import React, { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import "./SignupScreen.css";

function SignupScreen() {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);

        const register = (e) => {
            e.preventDefault();

            createUserWithEmailAndPassword(
                auth, 
                emailRef.current.value, 
                passwordRef.current.value)
            .then((userCredential) => {
                console.log("register userCredential.user");
            })
            .catch((error) => {
                alert(error.message);
            })
        };

        const signIn = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
            .then((userCredential) => {
                console.log("signIn userCredential.user")
            })
            .catch((error) => alert(error.code, error.message));
        };


  return (
    <div className="signupScreen">
        <form>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={signIn}>Sign In</button>

            <h4>
                <span className="signupScreen__gray">New to Netflix? </span> 
                <span className="signupScreen__link" onClick={register}>Sign Up now</span>
            </h4>
                
        </form>
    </div>
  );
}
 

export default SignupScreen