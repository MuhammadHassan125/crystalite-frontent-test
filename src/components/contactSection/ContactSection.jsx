import ContactForm from "./ContactForm";
import InfoSection from "./InfoSection";
import "./contact.scss";

const ContactSection = () => {
  return (
    <main className="contact-section">
      <div className="container">
        <div className="contact-parent">
          <InfoSection />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
