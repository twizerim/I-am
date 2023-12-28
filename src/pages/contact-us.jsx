import React from "react";
import "../sass/main.scss";
import Header from "../component/headers";
import Button from "../component/button";
import ABAA from "../assets/abb.png"
import { HomeOutlined } from '@ant-design/icons';
import { WhatsAppOutlined} from '@ant-design/icons';
import { MediumOutlined } from '@ant-design/icons';
import { GithubOutlined} from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { FacebookOutlined } from '@ant-design/icons';
import { YoutubeOutlined } from '@ant-design/icons';

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
                    <HomeOutlined  className="top"/>
                        <div className="media-chat">
                            <h5>Chat to us</h5>
                            <p>Chat to us Our friendly team is here to help you<span>twizerimanagedeon273@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="media-icon">
                    <WhatsAppOutlined className="top"/>
                        <div className="media-chat">
                            <h5>Chat to us</h5>
                            <p>Chat to us Our friendly team is here to help you<span>twizerimanagedeon273@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="media-icon">
                    <MediumOutlined className="top"/>
                        <div className="media-chat">
                            <h5>Chat to us</h5>
                            <p>Chat to us Our friendly team is here to help you<span>twizerimanagedeon273@gmail.com</span></p>
                        </div>
                    </div>
                   
                </div>
                <div className="chat-link">
                <GithubOutlined  className="tope"/>
                <LinkedinOutlined  className="tope"/>
                <FacebookOutlined  className="tope"/>
                <YoutubeOutlined  className="tope"/>
                </div>
            </div>
            <div className="conatct-me">
                <div className="letter">
                    <div className="image">
                        <img src={ABAA} alt="" />
                    </div>
                    <p>If you have questions or just want to get in touch, us the form bellow. we look forward to hearing from you!</p>
                </div>
                <div className="message">
                    <h1>Contact Us</h1>
                    <form action="">
                        <input type="text" name="names" id="names" placeholder="Your names"/>
                        <input type="email" name="email" id="email" placeholder="User email"/>
                        <textarea name="message" id="message" cols="" rows="5" placeholder="Message"></textarea>
                        <Button name="Send"/>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Contact