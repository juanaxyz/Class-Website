import "./App.css"
import Background from "../image/bg.jpeg"
import InstaLogo from "../image/instagram.svg"
import Chat from "../image/chat.svg"
import MessageForm from "./message"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Image_Slide1 from "../image/image1.jpeg"
import Image_Slide2 from "../image/image2.jpeg"
import Image_Slide3 from "../image/image3.jpeg"
import Image_Slide4 from "../image/image4.jpeg"

function App(){
    return(
        <>
        <div className="bg bg-gradient-to-b from-sky-900 to-black">
        
            <div className="container flex justify-center items-center t-0">
                <h1 className="font-poppins text-6xl md:text-7xl lg:text-9xl text-white font-extrabold absolute ">XII MIPA 2</h1>
                <img src={Background} alt="Foto Bersama" className="w-full"/>

                {/* glassmorphism card */}
            </div>
            <div className="container-card flex justify-center ">
                <a className="card" href="https://instagram.com/satantaksoe">
                    <img src={InstaLogo} alt="instagram" className="w-1/4 m-1"/>
                    <h2 className="text-xl md:text-4xl m-1">
                        Our Instagram Class
                    </h2>
                </a>
                <a className="card" href="#">
                    <img src={Chat} alt="Anonymous Chat" className="w-1/4 m-1"/>
                    <h2 className="text-xl md:text-4xl m-1">
                        Send Anonym Message
                    </h2>
                </a>
            </div>

            {/* galery */}
            <div className="container">
                        <h1 className="heading text-white font-sans font-bold">WE ARE MIPA 2</h1>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
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
                            modules={[EffectCoverflow, Pagination, Navigation]}
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

            <div className="container">
                <div className="header bg-indigo-300 w-full h-fit">
                    <h2 className="text-5xl md:text-7xl text-white font-sans font-extrabold text-center py-2">PESAN KITA</h2>
                </div>
                <div className="Menfess-content grid grid-cols-2 gap-2 place-items-center py-3">
                    <div className="Message-Card p-2">
                        <span className="font-sans text-5xl md:text-7xl font-extrabold">Nama</span>
                        <p className="font-sans text-2xl md:text-3xl">Lorem ipsu</p>
                    </div>
                    <div className="Message-Card p-2">
                        <span className="font-sans text-5xl md:text-7xl font-extrabold">Nama</span>
                        <p className="font-sans text-2xl md:text-3xl">Lorem ipsu</p>
                    </div>
                </div>
            </div>
        </div>

            <MessageForm/>
        </>
    )
}

export default App