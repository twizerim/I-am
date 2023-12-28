
import React from "react";
import "../sass/main.scss";
import Header from "../component/headers";
import Button from "../component/button";


function Login(){

    return (
        <>
        <Header/>
        <div className="pages">
            <div className="regist">
                <h1>Login form</h1>
                <form action="">
                    <div className="grope">
                       <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className="grope">
                       <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password"/>
                    </div>
                    
                    <Button name="Submit"/>
                </form>
                
                <div className="back">
                    <button>Cancel</button>
                    <p>Forgot password</p>
                </div>
                <p>If you don't have any account <a href="/signup">SignUp</a></p>
            </div>
        </div>
        </>
    )
}
export default Login
