import React from "react";
import logo from "./assests/logo.png";
import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <div className="main-container">
        <div className="banner">
          <img id="log" src={logo}></img>
          <h2 className="banner-h1">Green Loan African Startup</h2>
          <p className="banner-h1">
            GLASW is dedicated to offer their expertise to woman-led start-ups
            getting the necessary finances via our green loan initiatives
            programme offered by our partnered financial institutions globally.
          </p>
          <button type="button" class="btn">
            Our Services
          </button>
        </div>
        <section className="section1">
          <p>
            Getting started can be a complex task, so many unknown factors to
            consider as an entrepreneur. The startup consultancy services
            provide assistance to newer ventures. Having expert advice available
            can significantly improve the chances of success. It can be a time
            saver and highly reduce budget requirements. Just by avoiding costly
            mistakes alone. As a business startup, consulting services come with
            invaluable benefits.
          </p>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
