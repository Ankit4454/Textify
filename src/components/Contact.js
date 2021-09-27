import React from 'react';

export default function Contact(props){

    let theme = (props.mode).toString();

    return(
        
        <div className="contact-outer">
            <div className={`image-container ${theme}`}>

                <div className={`contact-inner ${theme}`}>
                    <h1>Contact Us</h1>
                    <form>
                        <label htmlFor="name">FULL NAME</label>
                        <input className="contact" type="text" id="name" placeholder="Your Full Name"></input>
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input className="contact" type="email" id="email" placeholder="Your Email Address"></input>
                        <label htmlFor="message">MESSAGE</label>
                        <textarea className="contact" id="message" placeholder="Your Message" rows="3" ></textarea>
                        <button>SEND</button>
                    </form>
                </div>
            </div>
        </div>

    )
}