import { thumbnails } from "../constants/constants";
import { NavLink } from "react-router-dom";

const PricingAndPortfolio = () => {
  return (
    <div className="bg-primary">
      <div className="text-[4rem] text-center py-5 text-white">
        Pricing & Portfolio
      </div>
      <div className="rounded-t-3xl bg-white py-8">
        {thumbnails.map((data, index) => (
          <NavLink key={index} to={data.route}>
            <div className="relative w-[75vw] h-80 mx-auto rounded-3xl mb-8">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50 text-white text-center text-3xl rounded-3xl hover:bg-opacity-75">
                {data.name}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PricingAndPortfolio;
