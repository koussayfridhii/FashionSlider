import React, { useState, useRef } from "react";
import "./Slider.scss";

const Slider = () => {
  const [slides, setSlides] = useState([
    {
      title: "Nike",
      color: "#9E982D",
      active: 0,
      img: "https://fashion-slider.uiinitiative.com/images/nike.jpg",
      i: 1,
    },
    {
      title: "Puma",
      color: "#A097C2",
      active: 0,
      img: "https://fashion-slider.uiinitiative.com/images/puma.jpg",
      i: 2,
    },
    {
      title: "Yeeze",
      color: "#CF896D",
      active: 0,
      img: "https://fashion-slider.uiinitiative.com/images/yeeze.jpg",
      i: 3,
    },
  ]);
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const swipe = (dir) => {
    if (dir === "prev") {
      if (index > 0) {
        setIndex((prev) => prev - 1);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = `-${index * 101}%`;
          containerRef.current.style.backgroundColor = slides[index]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      } else {
        setIndex(slides.length - 1);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = index * 101 + "%";
          containerRef.current.style.backgroundColor = slides[index]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      }
    } else {
      if (index < slides.length - 1) {
        setIndex((prev) => prev + 1);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = `-${(index + 1) * 101}%`;
          containerRef.current.style.backgroundColor = slides[index + 1]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      } else {
        setIndex(0);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = "0%";
          containerRef.current.style.backgroundColor = slides[0]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      }
    }
  };
  return (
    <div className="slider">
      <div className="btn btn-prev" onClick={() => swipe("prev")}>
        <svg
          fill="#eee"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 242.13 242.13"
          xmlSpace="preserve"
          stroke="#eee"
          strokeWidth="0.001"
          transform="rotate(45)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.48426600000000003"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_6_"
              d="M237.739,4.394c-5.857-5.857-15.355-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15s-15,6.716-15,15 v53.033c0,8.284,6.716,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82L237.739,25.607 C243.598,19.75,243.598,10.252,237.739,4.394z"
            />{" "}
          </g>
        </svg>
      </div>
      <div className="btn btn-next" onClick={() => swipe("next")}>
        <svg
          fill="#eee"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 242.13 242.13"
          xmlSpace="preserve"
          stroke="#eee"
          strokeWidth="0.001"
          transform="rotate(45)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.48426600000000003"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_6_"
              d="M237.739,4.394c-5.857-5.857-15.355-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15s-15,6.716-15,15 v53.033c0,8.284,6.716,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82L237.739,25.607 C243.598,19.75,243.598,10.252,237.739,4.394z"
            />{" "}
          </g>
        </svg>
      </div>
      <div
        className="container"
        ref={containerRef}
        style={{ backgroundColor: "#9E982D" }}
      >
        {slides.map((slide) => {
          return (
            <div className="slide" key={slide.i}>
              <h1 className={active ? "active" : ""}>{slide.title}</h1>
              <img
                className={active ? "active" : ""}
                src={slide.img}
                alt={slide.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
