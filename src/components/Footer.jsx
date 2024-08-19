import { logoHWhite } from "../assets/images";

const Footer = () => {
  return (
    <div className=" bg-primary  px-10 py-5 text-white ">
      <div className=" py-3 border-b-2 border-b-white border-opacity-80 flex flex-col items-center justify-center">
        <img src={logoHWhite} alt="logo" className=" w-36" />
        <div className="">+959111222333</div>
        <div className="">141/1+2 Moe Shwe Street, Yangon, Myanmar(Burma)</div>
        <div className="">myartstudio@gmail.com</div>
      </div>
      <div className="flex flex-col items-center justify-center pt-3">
        <div className="">@2024 My Art Studio. All Rights Reserved.</div>
        <div className="">Powered By Toward Web Studio</div>
      </div>
    </div>
  );
};

export default Footer;
