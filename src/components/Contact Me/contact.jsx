import React, { useEffect, useState } from "react";
import PageHeading from "../PageHeading/pageHeading";
import emailjs from "emailjs-com";
import Footer from "../Footer/footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  // saves the user's name entered to state
  const nameChange = (event) => {
    setName(event.target.value);
  };

  // saves the user's email entered to state
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  // saves the user's message entered to state
  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  //onSubmit of email form
  const handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "template_52NW8ggb";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    sendFeedback(templateId, {
      message: message,
      name: name,
      email: email,
    });
  };

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  //Custom EmailJS method
  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables, "user_mw76DhFtsAt6ZI2swfh5z")
      .then(
        (result) => {
          console.log(result.text);

          setMessage("");
          setName("");
          setEmail("");
          setResponse("Thanks For Contacting me");
          setTimeout(() => {
            setResponse("");
          }, 3000);
        },
        (error) => {
          alert("Something went wrong");
        }
      );
  };

  return (
    <div>
      <PageHeading title="contact me" />

      <div className="container mt-5 pb-5 mb-5">
        <div className="row">
          <div
            data-aos="fade-up"
            className="col-md-6 offset-md-3"
            style={{
              backgroundColor: "#126e82",
              borderRadius: "10px",
            }}
          >
            <form className="test-mailing px-4 py-5" onSubmit={handleSubmit}>
              <br />
              <div style={{ fontSize: "1.2rem" }}>
                <div>
                  <input
                    className="form-control email-inputs"
                    name="user_name"
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    onChange={nameChange}
                    value={name}
                    required
                  />
                </div>

                <br />

                <div>
                  <input
                    className="form-control email-inputs"
                    name="user_email"
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    onChange={emailChange}
                    value={email}
                    required
                  />
                </div>

                <br />

                <div>
                  <textarea
                    id="message"
                    name="message"
                    onChange={messageChange}
                    placeholder="Leave Your Message"
                    required
                    value={message}
                    className="email-text-area form-control"
                    rows="5"
                    cols="10"
                  />
                </div>
              </div>

              <br />
              {response && (
                <div>
                  <h3
                    style={{
                      color: "#fca311",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    {response}
                  </h3>
                </div>
              )}

              <br />

              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="btn hire-me"
                  style={{ background: "#51c4d3" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
