import { useState } from "react";
import { cancel, leftArrow, rightArrow } from "../../assets/icons";
import { images } from "../../constants/constants";

const AdminPannel = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  };
  return (
    <div className=" max-w-[88vw] mx-auto  ">
      {/* to show section  */}
      <div className=" grid grid-cols-2   my-5">
        <div className=" bg-slate rounded-2xl p-10 ml-5">
          <div className=" text-3xl">Hello Sir!</div>
          <div className="">It is good to see you again.</div>
        </div>
        <div className="flex flex-col justify-evenly ">
          <div className="grid grid-cols-2 mb-3  ">
            <div className=" bg-slate flex justify-start items-center px-5 py-5 ml-3 ">
              <span className="text-3xl">1100</span>
              <div className="flex flex-col ml-3">
                <span>Photos</span>
                <span>Uploaded</span>
              </div>
            </div>
            <div className=" bg-slate flex justify-start items-center px-5 py-5 ml-3">
              <span className="text-3xl">1100</span>
              <div className="flex flex-col ml-3">
                <span>Photos</span>
                <span>Uploaded</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-evenly items-center">
            <div className=" text-2xl">PreWedding</div>
            <div className="">{images.length} photos</div>
            {showDelete ? (
              <div
                onClick={handleShowDelete}
                className=" bg-danger py-2 px-4 text-center rounded-xl text-white"
              >
                Cancel
              </div>
            ) : (
              <div
                onClick={handleShowDelete}
                className=" bg-danger py-2 px-4 text-center rounded-xl text-white"
              >
                Delete
              </div>
            )}
            <div className="flex ">
              <img
                src={leftArrow}
                alt="leftarrow"
                className=" bg-black rounded-full w-8 p-2 ml-2"
              />
              <img
                src={rightArrow}
                alt="rightarrow"
                className=" bg-black rounded-full w-8 p-2 ml-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* photo section  */}

      <div className=" columns-3 md:columns-4 lg:columns-5 gap-2  ">
        {images.map((image, index) => (
          <div key={index} className="mb-2 break-inside-avoid relative ">
            {showDelete && (
              <img
                src={cancel}
                alt=""
                className=" absolute top-2 right-2 w-8 h-8"
              />
            )}
            <img
              src={image.image}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPannel;
