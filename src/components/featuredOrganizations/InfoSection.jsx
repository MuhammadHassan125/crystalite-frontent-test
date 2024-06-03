import { Reveal } from "../../utils/Reveal";
import "./featuredOrg.scss";

const InfoSection = () => {
  return (
    <div className="left-side">
      <Reveal>
      <h2>
        Helping <span>50+ leading</span> organizations double their revenue
        growth organically.
      </h2>
      </Reveal>

      <Reveal>
      <p>
        Our results speak for themselves. It's one of the many reasons we're the
        #1 rated SEO company in the United States.
      </p>
      </Reveal>
      <button>Get My Free 30 Minutes Strategy Session</button>
    </div>
  );
};

export default InfoSection;
