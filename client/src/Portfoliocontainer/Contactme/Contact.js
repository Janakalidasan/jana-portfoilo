import React, { useRef, useState } from "react";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const createWhatsAppLink = () => {
    const { name, email, company, phone, message } = formData;
    const whatsappText = `Name: ${name} Email: ${email} Company: ${company} Phone: ${phone} Message: ${message}`;
    const whatsappURL = `https://wa.me/+919626998945?text=${encodeURIComponent(whatsappText)}`;
    return whatsappURL;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = createWhatsAppLink();
    window.open(whatsappURL, '_blank').focus();
  }

  return (
    <div className="profile" id="contacts">
      <br></br>
      <h3>Contact</h3>
      <h6 className="lin"></h6>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
              <h2>Let's Chat</h2>
              <p>Whether you have a question, want to start a project, or simply want to connect.</p>
              <br></br>
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div className="right-container">
            <div className="right-inner-container">
              <form onSubmit={handleSubmit} id="whatsappForm">
                <h2 className="lg-view">Contact</h2>
                <h2 className="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <div className="social-container">
                  <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Contact;
