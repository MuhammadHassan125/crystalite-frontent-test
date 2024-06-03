import "./featuredOrg.scss";
const OrganizationCard = ({ organization }) => {
  console.log(organization);
  return (
    <div className="organization-card">
      <img src={organization.src} alt={organization.name} />
      <h4>{organization.name}</h4>
      <p>{organization.description}</p>
    </div>
  );
};

export default OrganizationCard;
