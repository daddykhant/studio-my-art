import PropTypes from "prop-types";

import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className=" md:flex justify-center items-center  ">
      <Sidebar />
      <div className=" w-[90vw] absolute right-0 top-0 overflow-auto ">
        {children}
      </div>
    </div>
  );
};
AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
