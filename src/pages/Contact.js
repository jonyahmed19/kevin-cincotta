import React from "react";
import Page from "../components/Page";
import "../styles.css";
import ContactInfo from "../components/ContactInfo";
import H1 from "../components/H1";
const Contact = (props) => (
  <Page {...props}>
    <div>
      <H1>Contact Me</H1>
      <p className="contact">
        If you are interested in showing or purchasing my work, please reach out
        to me and I'd be happy to provide additional details. My contact
        information is below.
      </p>
    </div>
    <footer className="main">
      <ContactInfo />
    </footer>
  </Page>
);

export default Contact;
