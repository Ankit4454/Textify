import React from "react";

export default function About(props){

    let theme = (props.mode).toString();

    return(
        
        <div className="contact-outer">
            <div className={`image-container ${theme}`}>

                <div className={`contact-inner ${theme}`}>
                    <h1>About Us</h1>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                    </p>
                    <div className="skills">
                        <span>Web Design</span>
                        <span>Photoshop & Illustrator</span>
                        <span>Coding</span>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}