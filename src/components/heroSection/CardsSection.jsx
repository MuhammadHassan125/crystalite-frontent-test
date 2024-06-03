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
        {/* <div className='card-one'>

                {
                    cardsImagesOne.map((item, index) => (
                        <div key={index}>
                            <img src={item.images}/>
                        </div>
                    ))
                }
            </div> */}

        {/* <div className='card-two'>
                {
                    cardsImagesTwo.map((item, index) => (
                        <div key={index}>
                            <img src={item.images}/>
                        </div>
                    ))}
            </div> */}
        <div className="left-side">

          <div className="card-one">
            <img src="/dashboard1.png" />
          </div>

          <div className="card-two">
            <img src="/dashboard2.png" />
          </div>
          
        </div>

        <div className="right-side">
            
          <div className="card-three">
            <img src="/dashboard3.png" />
          </div>

          
          <div className='card'>
                <img src='/dashboard4.png'/>
            </div>

            
            <div className='card'>
                <img src='/dashboard5.png'/>
            </div>
        </div>
      </main>
    </>
  );
};

export default CardsSection;
