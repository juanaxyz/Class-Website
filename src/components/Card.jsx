import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import "./card.css";
import db from "../firebase";

function Card() {
  const [menfessData, setMenfessData] = useState([]);

  useEffect(() => {
    const colref = collection(db, "Menfess");

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

  return (
    <div>
      {menfessData.map((data) => (
        <div key={data.id} className="p-2 my-5 w-[200px] relative bg-white/30  z-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <span className="font-sans text-4xl md:text-5xl font-extrabold">
            From {data.NameFrom}
          </span>
          <p className="font-sans text-3xl md:text-4xl font-bold">To {data.NameTo}</p>
          <p className="font-sans text-2xl md:text-3xl">{data.Message}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
