import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
   
const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");
  
  try {
    const formData = new FormData(event.target);
    formData.append("access_key", "ace969b7-af2d-4bb9-899c-0eef597036b1"); // REPLACE THIS

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message || "Failed to submit form");
    }
  } catch (error) {
    console.error("Network error:", error);
    setResult("Network error. Please try again.");
  }
};


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
           <p>We're here to support your child's learning journey. 
            Whether you have questions, need more details, or simply
             want to speak to our team — we’re just a message away.
            Feel free to reach out through the contact form or use the
             contact information below.
             Your queries and suggestions help us serve you better and 
            build a stronger academic future for your child.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +123456789</li>
                <li><img src={location_icon} alt="" /> delhi dwarka sector 16c flatno. 108</li>
            </ul>
        </div>
         <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text"  name='name' placeholder='Enter your name' 
                required />
                <label>Phone Number </label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                 <label>Write your message here</label>
                 <textarea name="message" rows="6" placeholder='enter your message' required>  </textarea>
                 <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact
