import { useState, useEffect, useRef } from "react";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  logoBigWhite,
} from "../assets/images";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [carousel1, carousel2, carousel3, carousel4];
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length),
      3000
    );

    return () => resetTimeout();
  }, [currentIndex, slides.length]); // Added slides.length to the dependency array

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        className="flex transition-transform duration-1000 ease-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[90vh] ">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white p-2"
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white p-2"
      >
        Next
      </button> */}

      {/* Cover Layer */}
      <div className="absolute inset-0 flex items-center justify-center text-white bg-primary bg-opacity-50 z-10">
        <img src={logoBigWhite} alt="logo" className=" w-80" />
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-white" : " border-white border-2"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
