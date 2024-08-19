import { images } from "../constants/constants";
import { useState } from "react";
import { cancel } from "../assets/icons";

const PreWedding = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openLightbox = (image) => {
    setSelectedImage(image);
  };
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  return (
    <div className="p-4 max-w-[80vw] mx-auto">
      <div className=" text-6xl text-center mb-8 ">Pre-Wedding</div>
      <div className="grid grid-cols-3 gap-5 px-10 mb-10">
        <div className=" bg-primary rounded-3xl p-5 text-white">
          <div className=" text-4xl">Basic</div>
          <div className="">Price: $300</div>
          <div className="">Duration: 2 Hours</div>
          <div className="">Includes:</div>
          <div className="">20 edited high-resolution images</div>
          <div className="">online gallery for viewing and sharing</div>
          <div className="">1 location</div>
          <div className="">1 outfit change</div>
        </div>
        <div className=" bg-primary rounded-3xl p-5 text-white">
          <div className=" text-4xl">Standard</div>
          <div className="">Price: $300</div>
          <div className="">Duration: 2 Hours</div>
          <div className="">Includes:</div>
          <div className="">20 edited high-resolution images</div>
          <div className="">online gallery for viewing and sharing</div>
          <div className="">1 location</div>
          <div className="">1 outfit change</div>
        </div>
        <div className=" bg-primary rounded-3xl p-5 text-white">
          <div className=" text-4xl">Basic</div>
          <div className="">Price: $300</div>
          <div className="">Duration: 2 Hours</div>
          <div className="">Includes:</div>
          <div className="">20 edited high-resolution images</div>
          <div className="">online gallery for viewing and sharing</div>
          <div className="">1 location</div>
          <div className="">1 outfit change</div>
        </div>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mb-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.image}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center  relative mb-5 ">
        <div className=" w-full flex justify-center items-center">
          <div className="">
            <a href=""></a>
          </div>
        </div>

        <div className="absolute right-0">Page 1 of 3</div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50">
          <button
            className="absolute top-8 right-20 text-white "
            onClick={closeLightbox}
          >
            <img src={cancel} alt="" className=" w-10" />
          </button>
          <div className="relative">
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreWedding;
