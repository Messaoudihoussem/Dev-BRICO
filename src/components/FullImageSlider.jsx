import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FullImageSlider() {
  const sliderImages = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/3.jpg',
    '/slider/4.jpg',
  ];

  return (
    <div className="w-full h-[500px] bg-white">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="h-full"
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
