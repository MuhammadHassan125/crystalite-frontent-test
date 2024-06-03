import "./contact.scss";

const ContactForm = () => {
  return (
    <div className="right-side">
      <div className="contact-form-div">
        <h3>Talk To An SEO Expert!</h3>
        <form className="contact-form">
          <input className="input" type="text" placeholder="Full Name *" />
          <input className="input" type="number" placeholder="Phone *" />
          <input className="input" type="email" placeholder="Email Address *" />
          <input className="input" type="url" placeholder="Website *" />
          <div className="button-div">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
