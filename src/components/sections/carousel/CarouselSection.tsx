"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const images = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
];

const CarouselSection = (props: Props) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <img src={images[idx]} className="w-full rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSection;
