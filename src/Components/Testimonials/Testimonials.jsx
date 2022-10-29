import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Bhondu Sharma",
    review:
      "i really thanks jalaj sir to support me pass my exam with good marks.fully satisfied."
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Nirahua yadav",
    review:
      "i found helpful jalaj academy tution. it has been one of the best tutor providing in our village."
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Kalua",
    review: "Seriously a good tution. Thanks for giving such best education."
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "suman kumar",
    review:
      "yes, it is best place that i was looking for. jalaj sir really dedicatted to help."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from </h5>
      <h2>Students</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avtr" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
