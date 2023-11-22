import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import {database} from "../firebase";
import Aos from "aos";
import "aos/dist/aos.css"
import aos from "aos";
function Card() {
  const [menfessData, setMenfessData] = useState([]);

  useEffect(() => {
    const colref = collection(database, "Menfess");

    const unsubscribe = onSnapshot(colref, (snapshot) => {
      let menfessArray = [];
      snapshot.docs.forEach((doc) => {
        menfessArray.push({ ...doc.data(), id: doc.id });
      });
      setMenfessData(menfessArray);
    });

    // Unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      {menfessData.map((data) => (
        <div key={data.id} className="p-2 my-5 w-[200px] relative bg-white/30  z-10 backdrop-filter backdrop-blur-lg rounded-2xl text-white" data-aos="flip-down">
          <span className="font-sans text-4xl md:text-5xl font-extrabold">
            From <span className="text-sky-500">{data.NameFrom}</span>
          </span>
          <p className="font-sans text-3xl md:text-4xl font-bold">To <span className="text-blue-300">{data.NameTo}</span></p>
          <p className="font-sans text-2xl md:text-3xl">{data.Message}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
