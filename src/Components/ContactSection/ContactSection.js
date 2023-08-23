import React, { useState } from "react";
import "../ContactSection/ContactSection.css";
import Card from "../Card/Card";
import Title from "../Title/Title";

const ContactSection = (props) => {
  const [contact, setContact] = useState({ name: "", email: "", msg: "" })

  const handleContact = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/contact/addcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        message: contact.msg,
      }),
    });
    const json = await response.json();

    // Alert
    if (json.Success) {
      props.showAlert(
        "Message Send Successfully",
        "success",
        "fa-solid fa-circle-check text-success"
      );
    } else {
      props.showAlert(
        "Message Not Sended",
        "danger",
        "fa-solid fa-triangle-exclamation text-danger"
      );
    }
  }

  const change = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  return (
    <div className="contact">
      <div className="pad-56">
        <div className="row body">
          <div className="col-md-3 box">
            <Card
              icon="fa-location-dot"
              title="923 W.Marshall Lane Marshalltown, IA 50186, Los Angeles"
            />
          </div>
          <div className="col-md-3 box">
            <Card
              icon="fa-envelope"
              title="foodhub@gmail.com"
              text="Lorem ipsum dolor sit"
            />
          </div>
          <div className="col-md-3 box">
            <Card
              icon="fa-phone"
              title="(414) 857 - 0107"
              text="Et netus et malesuada"
            />
          </div>
          <div className="col-md-3 box">
            <Card
              icon="fa-clock"
              title="Monday - Saturday"
              text="8:00 AM – 5:00 PM"
            />
          </div>
        </div>
        <div className="form">
          <Title h6="Send Message" h2="Get in touch with us" />
          <form className="form-body" onSubmit={handleContact}>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={contact.name}
                onChange={change}
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                name="email"
                value={contact.email}
                onChange={change}
                required
              />
            </div>
            <div>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter your message"
                name="msg"
                value={contact.msg}
                onChange={change}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
