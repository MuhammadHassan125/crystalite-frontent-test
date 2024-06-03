// src/TestimonialsSlider.js
import React, { useState, useEffect, useRef, Fragment } from "react";
import "./testimonial.scss";
import ReviewsSlider from "./ReviewsSlider";

const testimonials = [
  {
    name: "Stefano P.",
    city: "Newyork City",
    img: "/avatar.png",
    testimony:
      "Improve leads and conversions from your Professional SEO and Website Design Services That ADD Clients, MULTIPLY Profit, and SUBTRACT the chances of being ignored by GOOGLE",
    reviews: "/testimonials.png",
  },
  {
    name: "Stefano P.",
    city: "Newyork City",
    img: "/avatar.png",
    testimony:
      "Improve leads and conversions from your Professional SEO and Website Design Services That ADD Clients, MULTIPLY Profit, and SUBTRACT the chances of being ignored by GOOGLE",
    reviews: "/testimonials.png",
  },
  {
    name: "Stefano P.",
    city: "Newyork City",
    img: "/avatar.png",
    testimony:
      "Improve leads and conversions from your Professional SEO and Website Design Services That ADD Clients, MULTIPLY Profit, and SUBTRACT the chances of being ignored by GOOGLE",
    reviews: "/testimonials.png",
  },
];

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    stopSlideShow();
    startSlideShow();
  };

  const getSlideClass = (index) => {
    const middleSlide = (currentSlide + 1) % testimonials.length;
    if (index === middleSlide) return "slide active";
    return "slide";
  };

  return (
    <>
      <main className="testimonials-section">
        <div className="container">
          <div className="testimonial-heading">
            <h3>Our Opinions May Not Matter</h3>
            <h3>
              To You; But Can You Deny Our <span>Customer's Sayings?</span>
            </h3>

            <p>
              It's enough to say good words about our brand. We thought of
              sharing our client's happy and honest reviews with you so that you
              can be unbiased with us!
            </p>
          </div>

          <div className="testimonial-slider">
            <div
              className="slides"
              // style={{ transform: `translateX(-${currentSlide * (50 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Fragment>
                  <div key={index} className={getSlideClass(index)}>
                    <p>{testimonial.position}</p>
                    <blockquote>{testimonial.testimony}</blockquote>

                    <div className="bottom-info">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={testimonial.img}
                          style={{
                            width: "50px",
                            height: "auto",
                            marginTop: "30px",
                          }}
                        />

                        <div
                          style={{
                            marginLeft: "10px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <h3 style={{ fontSize: "16px" }}>
                            {" "}
                            {testimonial.name}
                          </h3>
                          <p>{testimonial.city}</p>
                        </div>
                      </div>

                      <div>
                        <img
                          src={testimonial.reviews}
                          style={{
                            width: "100px",
                            marginTop: "40px",
                            height: "auto",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          <ReviewsSlider/>
        </div>
      </main>


    </>
  );
};

export default TestimonialsSlider;
