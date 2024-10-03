import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="form-container">
        <h1>Send a message to us!</h1>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
