import React, { useState, useEffect } from "react";
import axios from "axios";
// Use state to set the set
const Picture = () => {
  const [picUrl, setPicUrl] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explain, setExplain] = useState("");
// wrap axios in useEffect dont forget array @ end
  useEffect(() => {
    function getPhoto() {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        )
        .then(res => {
          console.log(res.data);
          setPicUrl(res.data.url);
          setDate(res.data.date);
          setTitle(res.data.title);
          setExplain(res.data.explanation);
        })

        .catch(err => console.log(err));
    }
    getPhoto();
  }, []);

  return (
    <div>
      <p style={{ color: "Black", "fontSize": "16px;" }}> Today is: {date}</p>
      <img
        src={picUrl}
        alt="Nasa astronomy pic of the day"
        style={{ width: "60%", height: "300px",  }}
      />
      <p style={{ color: "Black", "fontWeight": "bold" }}>{title}</p>
      <p style={{ color: "Black", "width": "60%", "margin": "auto", "fontSize": "1rem" }}>{explain}</p>
    </div>
  );
};
export default Picture; 