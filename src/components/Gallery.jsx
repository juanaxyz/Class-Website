import { storage } from "../firebase.js";
import { ref, list, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HandleClick(link) {
  window.open(link);
}

function Gallery() {
  const [Images, setImages] = useState([]);

  const ImageRef = ref(storage, "Images/");
  useEffect(() => {
    listAll(ImageRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImages((prev) => [...prev, url]);
        });
      });
    });
  });

  return (
    <>
      <div className="container">
        <h1 className="heading text-white font-sans font-bold">
          WE ARE MIPA 2
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {Images.map((url) => {
            return (
              <SwiperSlide>
                <img src={url} alt="image-slide" className="swiper-lazy"/>
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>

              </SwiperSlide>
            );
          })}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
export default Gallery;
