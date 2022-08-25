import Logo from "../assets/images/incentive1.png";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Data = [
  {
    title: "Investors",
    items: ["Log In", "Invest"],
  },
  {
    title: "StartUp",
    items: ["Log In", "Raise"],
  },
  {
    title: "Fine Print",
    items: ["Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Get In Touch",
    items: ["Qustions or Feedback", "We'd love to hear from you"],
    icons: true,  
  },
];

const Footer = () => {
  return (
    <div className="bg-[#EEF1FE] py-10">
      <div className=" w-[90%] mx-auto flex flex-col sm:flex-row flex-wrap justify-around py-7  items-center">
        <div className="sm:mr-[10rem] flex justify-center flex-col items-center sm:items-start">
          <img className="h-[100px] placeholder" src={Logo} alt="" />
          <div>Auctic Solutions Pvt Ltd © 2021</div>
          <div>All Rights Reserved</div>
        </div>
        <div className="flex flex-wrap gap-5 sm:justify-between justify-evenly py-7 flex-1 ">
        {Data.map((data, i) => (
            <div key={i} className="leading-9">
            <h2 className="text-[20px]">{data.title}</h2>
            <ul>
              <li>{data.items[0]}</li>
              <li>{data.items[1]}</li>
              {data.icons && (
                  <div className="flex gap-2">
                  <BsLinkedin />
                  <BsFacebook />
                  <BsInstagram />
                  <HiMail />
                </div>
              )}
            </ul>
          </div>
        ))}
        </div>
      </div>
      <hr className="w-[90%] m-auto mb-10 border-1 border-[#D2D4DF]" />
      <div className="w-[90%] m-auto">
        <div>
          Auctic Solutions Pvt Ltd (Sateeq) is neither a stock exchange nor does
          it intend to get recognized as a stock exchange under the Securities
          Contracts Regulation Act, 1956. Auctic Solutions Pvt Ltd is not
          authorized by the capital markets regulator to solicit investments.
          The securities traded on these platforms are not traded on any
          regulated exchange. Sateeq also provides that it does not facilitate
          any online or offline buying, selling, or trading of securities.
        </div>
        <div className="my-10">
          This Site will be updated on a regular basis.
        </div>
        <div className="">
          <div>
            Auctic Solutions Private Limited (CIN-: U74999DL2021PTC386817)
          </div>
          <div>Registered Address -: A-6 New Govind Pura, Delhi - 110051</div>
          <div>Contact: +91 9319533382 (Support@Sateeq.com)</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
