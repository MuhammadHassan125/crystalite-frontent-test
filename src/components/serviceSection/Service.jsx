import React, { Fragment } from "react";
import "./service.scss";
import { Reveal } from "../../utils/Reveal";
const Service = () => {
  const serviceCardData = [
    {
      heading: "Keyword Research and Strategy",
      text: "When it comes to SEO, one of the most important aspects is keyword research. Choosing the right keywords can make or break your entire campaign. Fortunately, we can help you with this process.",
      btnText: "Talk To An SEO Expert",
    },
    {
      heading: "On-page SEO",
      text: "When it comes to SEO, one of the most important aspects is keyword research. Choosing the right keywords can make or break your entire campaign. Fortunately, we can help you with this process.",
      btnText: "Talk To An SEO Expert",
    },
    {
      heading: "Link Building",
      text: "When it comes to SEO, one of the most important aspects is keyword research. Choosing the right keywords can make or break your entire campaign. Fortunately, we can help you with this process.",
      btnText: "Talk To An SEO Expert",
    },
  ];
  return (
    <Fragment>
      <main className="service-section">
        <div className="container">
          <div className="service-heading">
            <Reveal>
            <h3>Our SEO Services In Its Entirety</h3>
            </Reveal>
            <Reveal>
            <button>(833)-800-0083</button>
            </Reveal>
          </div>
        </div>
        <div className="service-card">
          <div className="container">
            <div className="cards-main">
            <div className="card" style={{ borderBottom: "1px solid white" }}>
              <Reveal>
              <h3>Keyword Research and Strategy</h3>
              </Reveal>
              <p>
                When it comes to SEO, one of the most important aspects is
                keyword research. Choosing the right keywords can make or break
                your entire campaign. Fortunately, we can help you with this
                process.
              </p>
              <button>Talk To An SEO Expert</button>
            </div>

            <div
              className="card"
              style={{
                backgroundColor: "white",
                color: "black",
                borderBottom: "1px solid white",
                borderRadius: "10px",
              }}
            >
              <Reveal>
              <h3>
                On-page <span>SEO</span>
              </h3>
              </Reveal>
              <p>
                When it comes to SEO, one of the most important aspects is
                keyword research. Choosing the right keywords can make or break
                your entire campaign. Fortunately, we can help you with this
                process.
              </p>
              <button>Talk To An SEO Expert</button>
            </div>

            <div className="card" style={{ borderBottom: "1px solid white" }}>
              <Reveal>
              <h3>Link Building</h3>
              </Reveal>
              <p>
                When it comes to SEO, one of the most important aspects is
                keyword research. Choosing the right keywords can make or break
                your entire campaign. Fortunately, we can help you with this
                process.
              </p>
              <button>Talk To An SEO Expert</button>
            </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Service;
