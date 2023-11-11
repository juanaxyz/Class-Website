import "./App.css"
import Background from "../image/bg.jpg"
import InstaLogo from "../image/instagram.svg"
import Chat from "../image/chat.svg"
import Aos, { AOS } from "aos"
import 'aos/dist/aos.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Image_Slide1 from "../image/image1.jpeg"
import Image_Slide2 from "../image/image2.jpg"
import Image_Slide3 from "../image/image3.jpg"
import Image_Slide4 from "../image/image4.jpg"
import Image_Slide5 from "../image/image5.jpg"
import Image_Slide6 from "../image/image6.jpg"
import Image_Slide7 from "../image/image7.jpg"
import Image_Slide8 from "../image/image8.jpg"
import Image_Slide9 from "../image/image9.jpg"
import Image_Slide10 from "../image/image10.jpg"
import Image_Slide11 from "../image/image11.jpg"
import Image_Slide12 from "../image/image12.jpg"
import { useState } from "react"


import Swal from "sweetalert2";
import db from "../firebase";
import {getDocs,addDoc, doc, onSnapshot, collection} from "firebase/firestore"
import Card from "./Card";
import { useEffect } from "react"


//  kirim data message

async function SendMessagePopUp(){
    
  Swal.fire({
    title: "Kirim Pesan",
    html : '<input type="text" id="NameTo" placeholder="Untuk Siapa ?" autoComplete="off" class="swal2-input"> <input type="text" id="NameFrom" placeholder="dari Siapa ?" autoComplete="off" class="swal2-input"> <input type="textArea" id="Message" placeholder="Pesan Anda" autoComplete="off" class="swal2-input">',
    confirmButtonText: "Kirim",
    focusConfirm: false,
    preConfirm: ()=> {
      const NameTo = Swal.getPopup().querySelector("#NameTo").value
      const NameFrom = Swal.getPopup().querySelector("#NameFrom").value
      const Message = Swal.getPopup().querySelector("#Message").value
      if (!NameTo || !NameFrom || !Message) {
        Swal.showValidationMessage(`Mohon Mengisi Pesan Terlebih Dahulu`)
      }

      return {NameTo : NameTo,NameFrom : NameFrom,Message : Message}
    }
  }).then(async (result)=>{
    const DocRef =  await addDoc(collection(db,"Menfess"),{
        NameTo: result.value.NameTo,
        NameFrom : result.value.NameFrom,
        Message : result.value.Message
    });
});

}
 
 


function App(){

    // init aos
    useEffect(()=>{
        Aos.init();
    })
    return(
        <>

        <div className="bg bg-gradient-to-b from-sky-900 to-black">
        
            <div className="container flex justify-center items-center t-0">
                <svg className="w-full h-full font-header absolute" data-aos="fade-up">
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle" className="animate-[stroke_5s_infinite_alternate] stroke-2 stroke-[#365FA0] text-[10vh] font-black">
                        XII MIPA 2
                    </text>
                </svg>
                <img src={Background} alt="Foto Bersama" className="h-[50vh] border-2 border-red-500 bg-cover"/>

                {/* glassmorphism card */}
            </div>
            <div className="container-card flex justify-center ">
                <a className="card" href="https://instagram.com/satantaksoe" data-aos="fade-up">
                    <img src={InstaLogo} alt="instagram" className="w-1/4 m-1"/>
                    <h2 className="text-3xl font-bold md:text-4xl m-1">
                        Our Instagram Class
                    </h2>
                </a>
                <div className="card cursor-pointer" href="#" data-aos="fade-up" onClick={()=> SendMessagePopUp()}>
                    <img src={Chat} alt="Anonymous Chat" className="w-1/4 m-1"/>
                    <h2 className="text-3xl font-bold md:text-4xl m-1">
                        Send Anonym Message
                    </h2>
                </div>
            </div>

            {/* galery */}
            <div className="container">
                        <h1 className="heading text-white font-sans font-bold">WE ARE MIPA 2</h1>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                              }}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="swiper_container">

                            <SwiperSlide>
                            <img src={Image_Slide1} alt="slide_image" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={Image_Slide2} alt="slide_image" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={Image_Slide3} alt="slide_image" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={Image_Slide4} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide5} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide6} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide7} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide8} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide9} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide10} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide11} alt="slide_image" />
                            </SwiperSlide>  
                            <SwiperSlide>
                            <img src={Image_Slide12} alt="slide_image" />
                            </SwiperSlide>  

                            <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                            </div>
                        </Swiper>
                    </div> 
                
        {/* Menfess */}

            <div className="container min-h-screen">
                <div className="header " data-aos="fade-up">
                    <h2 className="text-5xl md:text-7xl text-white font-sans font-extrabold text-center py-2">PESAN</h2>
                </div>
                <div className="flex justify-center py-3">
                    <Card/>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default App