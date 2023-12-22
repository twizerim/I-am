import Button from "./button"
import photo from "../assets/got.png"


function Home(){
    return (
        <div className="wecome-container">
            <div className="image">
                <img src={photo} alt="" />
                <i><p>Welcome to my websit see all about me</p></i>
            </div>
            <div className="welcome-text">
               <h5>
                  <span class="salutation">Hello, my name is </span><span class="name">TWIZERIMANA gedeon</span>
               </h5>
               <p>I'm a Full-Stack Software Developer. I can make a UI/UX Design,Front-End and Backend </p>
               <Button name="Let's work together!"/>
            </div>
        </div>
    )
}
export default Home