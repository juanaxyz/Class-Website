import "./App.css";
import Background from "../../public/gallery/image (1).jpeg";
import InstaLogo from "../image/instagram.svg";
import Chat from "../image/chat.svg";
import { useState } from "react";
import Aos from "aos";

import Swal from "sweetalert2";
import { database } from "../firebase";
import {
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  collection,
} from "firebase/firestore";
import Card from "./Card";
import { useEffect } from "react";
import Gallery from "./Gallery";

//  kirim data message

async function SendMessagePopUp() {
  Swal.fire({
    title: "Kirim Pesan",
    html:
      '<input type="text" id="NameTo" placeholder="Untuk Siapa ?" autoComplete="off" class="swal2-input"> <input type="text" id="NameFrom" placeholder="dari Siapa ?" autoComplete="off" class="swal2-input"> <input type="textArea" id="Message" placeholder="Pesan Anda" autoComplete="off" class="swal2-input">',
    confirmButtonText: "Kirim",
    focusConfirm: false,
    preConfirm: () => {
      const NameTo = Swal.getPopup().querySelector("#NameTo").value;
      const NameFrom = Swal.getPopup().querySelector("#NameFrom").value;
      const Message = Swal.getPopup().querySelector("#Message").value;
      if (!NameTo || !NameFrom || !Message) {
        Swal.showValidationMessage(`Mohon Mengisi Pesan Terlebih Dahulu`);
      }

      return { NameTo: NameTo, NameFrom: NameFrom, Message: Message };
    },
  }).then(async (result) => {
    const DocRef = await addDoc(collection(database, "Menfess"), {
      NameTo: result.value.NameTo,
      NameFrom: result.value.NameFrom,
      Message: result.value.Message,
    });
  });
}

function App() {
  // init aos
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="bg bg-gradient-to-b from-sky-900 to-black">
        <div className="container flex justify-center items-center t-0">
          <svg
            className="w-full h-full font-header absolute"
            data-aos="fade-up"
          >
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className="animate-[stroke_5s_infinite_alternate] stroke-2 stroke-[#365FA0] text-[8vh]  font-black"
            >
              XII MIPA 2
            </text>
          </svg>
          <img
            src={Background}
            alt="Foto Bersama"
            className="h-full md:h-[50vh]  bg-cover"
          />

          {/* glassmorphism card */}
        </div>
        <div className="container-card flex justify-center ">
          <a
            className="card glow"
            href="https://instagram.com/satantaksoe"
            data-aos="fade-up"
          >
            <img src={InstaLogo} alt="instagram" className="w-1/4 m-1" />
            <h2 className="text-3xl font-bold md:text-4xl m-1">
              Our Instagram Class
            </h2>
          </a>
          <div
            className="card cursor-pointer"
            href="#"
            data-aos="fade-up"
            onClick={() => SendMessagePopUp()}
          >
            <img src={Chat} alt="Anonymous Chat" className="w-1/4 m-1" />
            <h2 className="text-3xl font-bold md:text-4xl m-1">
              Send Anonym Message
            </h2>
          </div>
        </div>

        {/* GALLERY comp */}
        <Gallery />

        {/* Menfess */}

        <div className="container min-h-screen">
          <div className="header " data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl text-white font-sans font-extrabold text-center py-2">
              PESAN
            </h2>
          </div>
          <div className="flex justify-center py-3">
            <Card />
          </div>
        </div>

        <div className="comingSoon container min-h-[25vh] text-white font-extrabold text-5xl flex justify-center items-center">
                <h1>COMING SOON</h1>
        </div>
      </div>
    </>
  );
}

export default App;
