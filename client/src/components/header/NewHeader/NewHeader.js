import React, { useState, useEffect } from "react";
import "./NewHeader.css";
import zenscroll from "zenscroll";

import { Animated } from "react-animated-css";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";

export default function NewHeader() {
  const [inView, setInView] = useState(true);
  const [fetchQuotes, invokeFetchQuotes] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/headertext?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      invokeFetchQuotes(data.data.records);
      // console.log(fetchQuotes);
    };
    apiCall();
  }, [invokeFetchQuotes]);
  // const [imgHeight, newImgHeight] = useState("new-header-logo");

  var chi = document.getElementById("chi");

  //

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
    setInView(false);
    // newImgHeight("new-header-logo-clicked");
    setTimeout(() => {
      setInView(true);
      // newImgHeight("new-header-logo");
    }, 1000);
  };

  return (
    <>
      {window.innerWidth > 770 ? (
        <div>
          <div className="new-header-container" onClick={DownArrowClick}>
            <div className="new-header-text-container">
              {fetchQuotes.length ? (
                <Animated
                  animationIn="fadeIn"
                  animationInDuration={3000}
                  animationOut="fadeOut"
                  animationOutDuration={300}
                  isVisible={inView}
                >
                  <p className="new-header-text">
                    {fetchQuotes[0].fields.paragraph1}
                    <br />
                    <br />
                    {fetchQuotes[0].fields.paragraph2}
                    <br /> <br />
                    <span className="hi-email">
                      {fetchQuotes[0].fields.paragraph3}
                    </span>
                  </p>
                </Animated>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="new-header-container">
            <div className="new-header-text-container">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={100}
                isVisible={inView}
              >
                {fetchQuotes.length ? (
                  <p className="new-header-text">
                    {fetchQuotes[0].fields.paragraph1}
                    <br />
                    <br />
                    {fetchQuotes[0].fields.paragraph2}
                    <br /> <br />
                    <span className="hi-email">
                      {fetchQuotes[0].fields.paragraph3}
                    </span>
                  </p>
                ) : (
                  <p></p>
                )}
              </Animated>
            </div>
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
