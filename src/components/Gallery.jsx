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
import Modal from "react-modal";
import { useState } from "react";
const ImagesPaths = [
  "/gallery/image (1).jpeg",
  "/gallery/image (2).jpeg",
  "/gallery/image (3).jpeg",
  "/gallery/image (4).jpeg",
  "/gallery/image (5).jpeg",
  "/gallery/image (6).jpeg",
  "/gallery/image (7).jpeg",
  "/gallery/image (8).jpeg",
  "/gallery/image (9).jpeg",
  "/gallery/image (10).jpeg",
  "/gallery/image (11).jpeg",
  "/gallery/image (12).jpeg",
  "/gallery/image (13).jpeg",
  "/gallery/image (14).jpeg",
  "/gallery/image (15).jpeg",
  "/gallery/image (16).jpeg",
  "/gallery/image (17).jpeg",
  "/gallery/image (18).jpeg",
  "/gallery/image (19).jpeg",
  "/gallery/image (20).jpeg",
  "/gallery/image (21).jpeg",
  "/gallery/image (22).jpeg",
  "/gallery/image (23).jpeg",
  "/gallery/image (24).jpeg",
  "/gallery/image (25).jpg",
  "/gallery/image (26).jpg",
];

function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
    
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
    
  };
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
          {ImagesPaths.map((url, index) => {
            // console.log(url);
            return (
              <>
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    className="swiper-lazy"
                    onClick={() => openModal(url)}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
              </>
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          style={{
            overlay: {
              zIndex: 1000, // Atur nilai zIndex overlay modal
              
            },
            content: {
              backgroundColor:"rgba(42, 53, 71,.8)",
              height:"fit-content",
              borderRadius:"10px",
              margin:"auto",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
                      
            },}}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Image"
              style={{
                width:"100%",
                height:"auto",
                marginBottom:"15px",
                borderRadius:"10px"
              }}
            />
          )}

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

          <button onClick={closeModal} style={{
            alignSelf:"center",
            backgroundColor: "white",
            border:"none",
            color:"gray",
            textAlign: "center",
            textDecoration: "none",
            fontSize:"16px",
            padding:"5px",
            borderRadius:"5px",
            boxShadow:" -1px 10px 28px -4px rgba(0,0,0,0.75)"
            }}>CLOSE</button>
             <a href={selectedImage} download>
          <button style={{ flex: '1', marginLeft: '8px',alignSelf:"center",
            backgroundColor: "white",
            border:"none",
            color:"gray",
            textAlign: "center",
            textDecoration: "none",
            fontSize:"16px",
            padding:"5px",
            borderRadius:"5px",
            boxShadow:" -1px 10px 28px -4px rgba(0,0,0,0.75)" }}>Download</button>
        </a>
        </div>
        </Modal>
      </div>
    </>
  );
}
export default Gallery;
