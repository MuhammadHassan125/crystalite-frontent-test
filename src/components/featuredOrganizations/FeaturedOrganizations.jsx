import InfoSection from "./InfoSection";
import OrganizationSlider from "./OrganizationSlider";
import "./featuredOrg.scss";

const FeaturedOrganizations = () => {
  return (
    <main className="featured-organizations">
      <div className="featured-org-parent">
        <InfoSection />
        <OrganizationSlider />
      </div>
    </main>
  );
};
export default FeaturedOrganizations;
