import React from "react";
import Page from "../components/Page";
import ContactInfo from "../components/ContactInfo";
import ExampleImages from "../components/ExampleImages";
import YoutubeEmbed from "../components/YoutubeEmbed";
import H1 from "../components/H1";
import { Link } from "@reach/router";

const Recentmages = () => {
  const clementinePark = require("../images/examples/ClementinePark.jpg");
  const whyNotRoam = require("../images/examples/WhyNotRoam.jpg");

  return <div className="flexImages">
    <img className="blurEdge" src={clementinePark} width="75%" alt="" />
    <img className="blurEdge" src={whyNotRoam} width="75%" alt="" />
  </div>
};

const Commissions = (props) => (
  <Page {...props}>
    <div>
      <H1>Commissions</H1>
      <div className="commissions">
        <p>
          If you like my style, but want something more specific to your life, business, or home — feel free to ask! I
          work with a few different styles, sizes, and mediums. So, if you have something in mind, we can talk about how
          to bring that idea to life.
        </p><p>Some examples of my commissioned work are shown below with more at{" "}
          <a href="https://www.instagram.com/1ndr.works/" alt="">@1ndr.works</a> and you can find my general guidelines for pricing custom work <Link to="/customwork">here</Link>.
        </p>

        <h2>Commissioned Paintings</h2>
        <p>A couple recent commissioned works are:</p>
        <ul>
          <li>“Clementine Park” &mdash; celebrating a big wedding anniversary</li>
          <li>"Why Not Roam" &mdash; capturing the freedom of van life.</li>
        </ul>
        <Recentmages />
        <p>&nbsp;<br />Here are some examples of earlier commissioned works for individuals, bands, and events.</p>
        <ExampleImages />
        <p>&nbsp;<br />I've also created a couple animated videos.</p>
        <YoutubeEmbed embedId="AHWa1sXkUF8" />
      </div>
    </div>
    <p className="contact">Please reach out if you'd like me to create something for you.</p>
    <footer className="main">
      <ContactInfo />
    </footer>
  </Page>
);

export default Commissions;
