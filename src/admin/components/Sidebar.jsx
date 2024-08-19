import { NavLink } from "react-router-dom";
import { home, logOut, update, upload } from "../../assets/icons";
import { logoSmallWhite } from "../../assets/images";

const Sidebar = () => {
  return (
    <div className=" fixed left-5 top-10 ">
      <div className=" py-5 relative w-[6vw] h-[90vh] bg-black rounded-3xl flex flex-col items-center ml-5 ">
        <div className="flex flex-col items-center">
          <div className=" w-14 h-14 overflow-hidden mb-10 ">
            <img
              src={logoSmallWhite}
              alt="logo"
              className=" w-full h-full object-contain"
            />
          </div>
          <NavLink to="/admin/home">
            <img src={home} alt="home" className=" mb-8" />
          </NavLink>
          <NavLink to="/admin/uploadfile">
            <img src={upload} alt="upload" className=" mb-8" />
          </NavLink>
          <NavLink to="/admin">
            <img src={update} alt="updatePackage" className=" mb-8" />
          </NavLink>
        </div>
        <NavLink to="/" className="absolute bottom-5">
          <img src={logOut} alt="log out" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
