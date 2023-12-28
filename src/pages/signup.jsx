import Header from "../component/headers"
import Button from "../component/button"
import React from "react";
import "../sass/main.scss";


function Signip(){

    return (
        <>
        <Header/>
        <div className="pages">
            <div className="regist">
                <h1>Registration form</h1>
                <form action="">
                    <div className="grope">
                       <label htmlFor="firstname">Firstname</label>
                        <input type="text" name="firstname" id="firstname"/>
                    </div>
                    <div className="grope">
                       <label htmlFor="lastname">Lastname</label>
                        <input type="text" name="lastname" id="lastname"/>
                    </div>
                    <div className="grope">
                       <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className="grope">
                       <label htmlFor="phone">Phone</label>
                        <input type="Number" name="phone" id="phone"/>
                    </div>
                    <div className="grope">
                       <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password"/>
                    </div>
                    <div className="grope">
                       <label htmlFor="confirmpassword">Confirmpassword</label>
                        <input type="text" name="confirmpassword" id="confirmpassword"/>
                    </div>
                    
                    <Button name="Submit"/>
                </form>
            </div>
        </div>
        </>
    )
}
export default Signip