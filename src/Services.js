import React from "react";
import ser1 from "./assests/ser1.jpg";
import ser2 from "./assests/ser2.jpg";
import ser3 from "./assests/ser3.jpg";
import service from "./assests/service.jpg";
import "./Services.css";

function Services() {
  return (
    <div className="service-main-container">
      <img id="sImg" src={service} alt="" />
      <h2>Our Services</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Scores</th>
            <th scope="col">Loan Features</th>
            <th scope="col">Loan Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img src={ser1} alt="" className="imgs" />
            </th>
            <td>Mark</td>
            <td>
              <ul>
                <li> Time in business: 12+ months </li>
                <li> $10K in monthly revenue</li>
                <li> Minimum credit score: 580</li>
              </ul>
            </td>
            <td>@mdo</td>
            <td>
              <button type="button" class="btn btn-warning">
                Apply Now
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img src={ser2} alt="" className="imgs" />
            </th>
            <td>Mark</td>
            <td>
              <ul>
                <li> Time in business: 12+ months </li>
                <li> $10K in monthly revenue</li>
                <li> Minimum credit score: 580</li>
              </ul>
            </td>
            <td>@mdo</td>
            <td>
              <button type="button" class="btn btn-warning">
                Apply Now
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <img src={ser3} alt="" className="imgs" />
            </th>
            <td>Mark</td>
            <td>
              <ul>
                <li> Time in business: 12+ months </li>
                <li> $10K in monthly revenue</li>
                <li> Minimum credit score: 580</li>
              </ul>
            </td>
            <td>@mdo</td>
            <td>
              <button type="button" class="btn btn-warning">
                Apply Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Services;
