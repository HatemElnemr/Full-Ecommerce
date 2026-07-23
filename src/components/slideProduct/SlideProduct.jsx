import Product from "./Product";
import "./slideProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import SlideProductLoading from "./SlideProductLoading";

export default function SlideProduct({ title, productsData, isLoading }) {
  return (isLoading ? (
    <SlideProductLoading isLoading={isLoading} />
  ) : (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Add bestselling products to weekly line up</p>
        </div>
        <Swiper
          loop={productsData > 5}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          className="mySwiper"
        >
          {
            productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  ))
}
