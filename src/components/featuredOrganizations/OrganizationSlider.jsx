import { Fragment } from "react";
import OrganizationCard from "./OrganizationCard";
import "./featuredOrg.scss";
import Slider from "react-slick";

const organizations = [
  {
    src: "/organizations/1.png",
    name: "Clutch",
    description: "Top SEO Company New York 2024",
  },
  {
    src: "/organizations/2.png",
    name: "Find Best SEO",
    description: "Top 10 SEO Companies 2024",
  },
  {
    src: "/organizations/1.png",
    name: "Clutch",
    description: "Top Ecommerce SEO Company New York 2024",
  },
];

const OrganizationSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="right-side">
      <OrganizationCard organization={organizations[0]} />
      <OrganizationCard organization={organizations[1]} />
      <OrganizationCard organization={organizations[2]} />

      {/* <div className="slider-container ">
        <Slider {...settings}>
          {organizations.map((org, index) => (
            <Fragment key={index}>
              <OrganizationCard organization={org} />
            </Fragment>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};
export default OrganizationSlider;
