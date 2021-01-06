import React, { useState, useEffect } from "react";
import "./NewHeader.css";
import zenscroll from "zenscroll";

import { Animated } from "react-animated-css";
import { Fade } from "react-awesome-reveal";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";

export default function NewHeader() {
  // const [inView, setInView] = useState(true);
  // const [fetchVideo, invokeFetchVideo] = useState([]);
  // const [visible, setVisible] = useState(true);
  // const [classSet, setClassSet] = useState("fade-out-onLoad");

  // useEffect(() => {
  //   const apiCall = async () => {
  //     const data = await axios.get(
  //       "https://api.airtable.com/v0/appVey7bH2bLRXZsC/VideoForLogo?view=Grid%20view",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //         },
  //       }
  //     );
  //     invokeFetchVideo(data.data.records);
  //     // console.log(fetchVideo[0].fields.link);
  //   };
  //   apiCall();
  // }, []);

  // const [imgHeight, newImgHeight] = useState("new-header-logo");
  // var chi = document.getElementById("chi");
  // const Chi = document.getElementById("chi");

  let pageHeight = window.innerHeight;

  const DownArrowCell = () => {
    zenscroll.toY(pageHeight);
    // zenscroll.intoView(chi);
    // zenscroll.to(chi);
    // window.scrollBy(0, pageHeight);
    console.log(pageHeight);
  };

  const DownArrowClick = () => {
    document.getElementById("chi").scrollIntoView();
    // setInView(false);
    // newImgHeight("new-header-logo-clicked");
    // setTimeout(() => {
    //   setInView(true);
    //   newImgHeight("new-header-logo");
    // }, 1000);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("This will run after 3 seconds!");
  //     setClassSet("fade-out");
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {window.innerWidth > 770 ? (
        <div>
          <div className="new-header-container" onClick={DownArrowClick}>
            <div className="vid-logo-container">
              <Fade delay={1000}>
                <video
                  className="vid-about"
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1609886317/Cherry/Cherry%20Clients/Logos/AdobeStock_326483459_Video_HD_Preview_vahjce.mp4"
                />
              </Fade>
              <img
                alt="logo"
                src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1609959569/Cherry/Cherry%20Clients/Logos/Cherry_Logo_KO4_z46it6.png"
                className="about-logo"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="new-header-container">
            <div className="cell-down-arrow-container" onClick={DownArrowCell}>
              <FiChevronDown
                className="cell-down-arrow"
                color="white"
                alt="cell-down"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
