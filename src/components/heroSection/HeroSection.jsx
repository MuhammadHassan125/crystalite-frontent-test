import React from 'react'
import Header from '../header/Header'
import './hero.scss'
import CardsSection from './CardsSection';
import { Reveal } from '../../utils/Reveal';
const HeroSection = () => {

  const heroSliderImages = [
    {
      image: '/amazon.png',
    },
    {
      image:"/partner.png",
    },
    {
      image:"/cloud-logo (2).png",
    },
    {
      image:'/microsoft-logo.png'
    },
    {
      image:'/fb-logo.png'
    }
  ];
  return (
    <>
    <main className='hero-section'>
      <div className='container'>
          <Header/>

          {/* hero main  */}
          <div className='hero-main'>
            <div className='hero-text'>
              <Reveal>
              <h4>#1 SEO Digital Marketing Agency Guarantees To You</h4>
                </Reveal>
              <h2>Boost Your Website Ranking With Our Organic Approach.</h2>
              <h2 className=''>More Traffic. More Sales. More Customers</h2>
              <div>
                  <Reveal>
                <p>
                Improve leads and conversions from your Professional SEO and Website Design Services That ADD Clients, MULTIPLY Profit, and SUBTRACT the chances of being ignored by GOOGLE and Potential Customers!
                </p>
                </Reveal>
              </div>

              </div>

              

            <div className='brand-logos-slider'>
                {
                  heroSliderImages.map((item, index) => (
                      <>
                        <div className='brand-logo'>
                          <img src={item.image} alt='brand'/>
                        </div>
                      </>
                  ))
                }
            </div>

            <div className='talk-export-btn'>
              <button>Talk To An SEO Expert</button>
            </div>
            
          </div>

      </div>
    </main>

    <CardsSection/>
    </>
  )
}

export default HeroSection