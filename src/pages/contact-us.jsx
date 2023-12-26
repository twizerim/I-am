import React from "react";
import "../sass/main.scss";
import Header from "../component/headers";
import Button from "../component/button";
import ABAA from "../assets/abb.png"

function Contact(){

    return (
        <>
        <Header/>
        <div className="contact-container">
            <div className="line-tochart">
                <h2>Get in Touch</h2>
                <p class="text-welcome">
                    We love to hear from you. Our friendly team <span>is always here to chat</span>
                </p>
                <div className="sociol-media">
                    <div className="media-icon">
                        <div className="media-chat">
                            <h5>Chat to us</h5>
                            <p>Chat to us Our friendly team is here to help you<span>twizerimanagedeon273@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="media-icon">
                        <div className="media-chat">
                            <h5>Chat to us</h5>
                            <p>Chat to us Our friendly team is here to help you<span>twizerimanagedeon273@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="media-icon">
                        <div className="media-chat">
                            <h5>Chat to us</h5>
                            <p>Chat to us Our friendly team is here to help you<span>twizerimanagedeon273@gmail.com</span></p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="conatct-me">
                <div className="letter">
                    <div className="image">
                        <img src={ABAA} alt="" />
                    </div>
                    <p>If you have questions or just want to get in touch, us the form bellow. we look forward to hearing from you!</p>
                </div>
                <div className="forms">
                    <h2>Contact Us</h2>
                    <form action="">
                        <input type="text" placeholder="Your names"/>
                        <input type="text" placeholder="User email"/>
                        <textarea name="" id="" cols="40" rows="7" placeholder="Message"></textarea>
                        <Button name="Send"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact