import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product from "./Product";

export default function SlideProductLoading({ isLoading }) {
  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>
            <Skeleton />
          </h2>
          <p>
            <Skeleton />
          </p>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={5}
          className="mySwiper"
        >
          <SwiperSlide>
            <Product isLoading={isLoading} />
          </SwiperSlide>
          <SwiperSlide>
            <Product isLoading={isLoading} />
          </SwiperSlide>
          <SwiperSlide>
            <Product isLoading={isLoading} />
          </SwiperSlide>
          <SwiperSlide>
            <Product isLoading={isLoading} />
          </SwiperSlide>
          <SwiperSlide>
            <Product isLoading={isLoading} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
