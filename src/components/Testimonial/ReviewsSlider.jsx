import React, { Fragment } from 'react';
import './testimonial.scss';

const ReviewsSlider = () => {

    const reviewsLogos = [
        {
            image:'/review3.png'
        },
        {
            image:'/google.png'
        },
        {
            image:'/review.png'
        }
    ];

    

  return (
    <Fragment>

        <div className='brands-logos-section'>
            {reviewsLogos.map((item, index) => (
                <>
                    <div key={index} className='brand-card'>
                        <img src={item.image} alt='review'/>
                    </div>
                </>
            ))}
        </div>
    </Fragment>
  )
}

export default ReviewsSlider