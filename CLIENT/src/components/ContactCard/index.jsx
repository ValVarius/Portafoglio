import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Spinner from "../Spinner";

export default function ContactCard() {
  const [mailState, setMailState] = useState({
    name: "",
    email: "",
    message: "",
  });
  let sending = true;

  const [isloading, setIsLoading] = useState({
    status: false,
    messageSent:false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMailState({
      ...mailState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(mailState);
    setIsLoading({
      status: true,
    });

    axios
      .post("/api/form", {
        mailState,
      })
      .then((res) => {
        console.log(res);

        setMailState({
          name: "",
          email: "",
          message: "",
        });
        setIsLoading({
          status: false,
          messageSent:true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="valerio-varani-635ba31a1"><a className="LI-simple-link" href='https://www.linkedin.com/in/valerio-varani-635ba31a1?trk=profile-badge'>Valerio Varani</a></div> */}
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="dark"
        data-vanity="valerio-varani-635ba31a1"
      >
        <a
          className="LI-simple-link"
          href="https://www.linkedin.com/in/valerio-varani-635ba31a1?trk=profile-badge"
        >
          Valerio Varani
        </a>
      </div>
      <iframe
        id="gitbadge"
        src="https://githubbadge.appspot.com/valvarius"
        frameBorder="0"
      ></iframe>
      <br />

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={mailState.name}
            type="text"
            name="name"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={mailState.email}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            value={mailState.message}
            className="form-control"
            name="message"
            rows="4"
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
          disabled={isloading.status}
        >
          Submit
        </button> */}
        {/* isloading.status */}
        <button className="btn btn-primary" type="submit" onClick={handleFormSubmit} disabled={isloading.status}>
          {isloading.status && ( <Spinner/>)}
          {isloading.status && <span>Sending</span>}
          {!isloading.status && <span>Submit</span>}
        </button>
        <h1>{isloading.messageSent && <span>Thank you for your message!</span>}</h1>
      </form>

      <a href="tel:+1-206-650-8647">Call Me</a>
    </div>
  );
}
