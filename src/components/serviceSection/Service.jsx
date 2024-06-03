import React, { Fragment } from "react";
import "./service.scss";
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
            <h3>Our SEO Services In Its Entirety</h3>
            <button>(833)-800-0083</button>
          </div>
        </div>
        <div className="service-card">
          
          <div className="card" style={{borderBottom:'1px solid white'}}>
            <h3>Keyword Research and Strategy</h3>
            <p>
              When it comes to SEO, one of the most important aspects is keyword
              research. Choosing the right keywords can make or break your
              entire campaign. Fortunately, we can help you with this process.
            </p>
            <button>Talk To An SEO Expert</button>
          </div>

          <div className="card" style={{backgroundColor:'white', color:'black',borderBottom:'1px solid white', borderRadius: '10px'}}>
            <h3>On-page <span>SEO</span></h3>
            <p>
              When it comes to SEO, one of the most important aspects is keyword
              research. Choosing the right keywords can make or break your
              entire campaign. Fortunately, we can help you with this process.
            </p>
            <button>Talk To An SEO Expert</button>
          </div>


          <div className="card" style={{borderBottom:'1px solid white'}}>
            <h3>Link Building</h3>
            <p>
              When it comes to SEO, one of the most important aspects is keyword
              research. Choosing the right keywords can make or break your
              entire campaign. Fortunately, we can help you with this process.
            </p>
            <button>Talk To An SEO Expert</button>
          </div>
        
        </div>
      </main>
    </Fragment>
  );
};

export default Service;
