import { Reveal } from "../../utils/Reveal";
import "./contact.scss";

const InfoSection = () => {
  return (
    <div className="left-side">
      <div className="contact-heading-div">
        <Reveal>
        <h2>
          Consulting With <span>SEO Results Pro</span>
        </h2>
        </Reveal>

        <Reveal>
        <p>
          Improve leads and conversions from your Professional SEO and Website
          Design Services That ADD Clients, MULTIPLY Profit, Improve leads and
          conversions from your Professional SEO and Website Design Services
          That ADD Clients, MULTIPLY Profit,
        </p>
        </Reveal>
        <button>Get My Free 30 Minutes Strategy Session</button>
      </div>
      <div className="feature-div">
        <div className="feature-item">
          <img src="/contact/1.png" alt="contact-image-1" />
          <div>
            <h3>2,000+</h3>
            <p>SATISFIED ClIENTS</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="/contact/2.png" alt="contact-image-1" />
          <div>
            <h3>2MIL+</h3>
            <p>QUALIFIED LEADS</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="/contact/3.png" alt="contact-image-1" />
          <div>
            <h3>350+</h3>
            <p>TEAM MEMBERS</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="/contact/4.png" alt="contact-image-1" />
          <div>
            <h3>95%</h3>
            <p>RETENTION RATE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
