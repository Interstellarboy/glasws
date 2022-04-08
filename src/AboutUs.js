import React from "react";
import "./AboutUs.css";
import logo from "./assests/aboutus.jpg";

function AboutUs() {
  return (
    <div className="container">
      <img id="aboutImg" src={logo} alt="this" />
      <h1>About Us</h1>
      <section className="about-section1">
        <p>
          About The Startup Consultancy, a professional consulting services
          company offering business and other types of consulting services. Our
          goal is to help our clients be successful in business, supporting them
          through our various consulting services. To help them plan, execute,
          and manage startups, projects, and growth more efficiently. At the
          Startup Consultancy, we’re experts with over 10 years of experience,
          providing consulting services for startup businesses, small
          businesses, and established organizations. Our success is built on our
          client’s success. Our consultants provide support to clients through
          consultations in specific areas and for specific requirements. We
          create for our client's long-term results that continually drive
          improvement and value.
        </p>
      </section>
      <section className="about-section2">
        <p>
          At the Startup Consultancy, we’re experts with over 10 years of
          experience, providing consulting services for startup businesses,
          small businesses, and established organizations. Our success is built
          on our client’s success. Our consultants provide support to clients
          through consultations in specific areas and for specific requirements.
          We create for our client's long-term results that continually drive
          improvement and value.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
