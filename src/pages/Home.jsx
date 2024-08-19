import { NavLink } from "react-router-dom";
import { Carousel } from "../components";

import { thumbnails } from "../constants/constants";
import { aboutBg, aboutLogo } from "../assets/images";

const Home = () => {
  return (
    <div className=" bg-white">
      <div className="">
        <Carousel />
      </div>

      {/* About Section  */}

      <div className="">
        <div className="relative w-full h-[75vh] ">
          <img
            src={aboutBg}
            alt="about-background"
            className=" w-full h-full object-cover hover:scale-50"
          />
          <div className="absolute top-0 w-full h-full grid grid-cols-2 ">
            <img src={aboutLogo} alt="" className="  w-80 m-auto " />
            <div className="  text-white text-xl text-left my-auto">
              MyArt Studio Photography transforms special moments into <br />
              timeless memories with our team of professional photographers.
              <br />
              We combine creativity and technical expertise to deliver stunning,
              <br />
              High-Quality images for weddings,portraits,events,and more. <br />
              Our friendly approach ensures an enjoyable experience, <br />
              resulting in photos you will cherish forever.
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section  */}
      <div className="relative py-8 lg:pb-24 ">
        <div className=" text-[4rem] text-center text-primary mb-8 ">
          Portfolio
        </div>
        <div className="relative grid grid-cols-3 gap-4  ">
          <div className=" absolute w-full h-96 bg-primary top-10"></div>
          {thumbnails.map((data, index) => (
            <div
              key={index}
              className="relative w-96 h-64 bg-white rounded-2xl mb-8 mx-auto "
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute bottom-0 text-center w-full bg-gradient-to-t from-primary to-transparent py-5 rounded-b-2xl">
                <div className="text-center text-2xl text-white mb-2">
                  {data.name}
                </div>
                <NavLink
                  to={data.route}
                  className="bg-white py-1 px-3 rounded-full text-sm text-primary "
                >
                  More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className=" absolute bg-primary w-[80vw] h-0.5 bottom-5 left-[10vw]"></div>
      </div>
    </div>
  );
};

export default Home;
