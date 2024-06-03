import React from "react";
import "./hero.scss";

const CardsSection = () => {
  const cardsImagesOne = [
    {
      images: "/dashboard1.png",
    },
    {
      images: "/dashboard2.png",
    },
  ];

  const cardsImagesTwo = [
    {
      images: "/dashboard3.png",
    },
    {
      images: "/dashboard4.png",
    },
    {
      images: "/dashboard5.png",
    },
  ];

  return (
    <>
      <main className="card-section">
        <div className="left-side">

          <div className="card-one">
          </div>

          <div className="card-two">
          </div>
          
        </div>

        <div className="right-side">
            
          <div className="card-three">
          </div>

          
          <div className='card-four'>
            </div>

            
            <div className='card-fifth'>
            </div>
        </div>
      </main>
    </>
  );
};

export default CardsSection;
