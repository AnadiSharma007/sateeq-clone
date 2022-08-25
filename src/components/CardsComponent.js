import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Card from "./Card";
import group432 from "../assets/images/Group432.png";
import group430 from "../../src/assets/images/Group430.png";
import group428 from "../../src/assets/images/Group428.png";
import group424 from "../../src/assets/images/Group424.png";
import group419 from "../../src/assets/images/Group419.png";
import grp19 from "../../src/assets/images/grp19.png";
import tm from "../../src/assets/images/1-TM.jpg";
import tms from "../../src/assets/images/1-tms.jpg";
import hives from "../../src/assets/images/hives.png";
import hive from "../../src/assets/images/hive.png";
import notwp from "../../src/assets/images/notwp.jpeg";
import notwps from "../../src/assets/images/notwps.jpeg";
import zapp from "../../src/assets/images/zapp.png";
import zapps from "../../src/assets/images/zapps.png";
import conthe from "../../src/assets/images/Connectingthe.png";
import pubnex from "../../src/assets/images/PublicNextlogo.jpg";

const data = [
  {
    img: group432,
    smallImg: group430,
    heading: "Lets Dress Up",
    desc: " LDU offers custom-made designer clothes delivered straight to your doorstep. It provides a platform where individua... ",
    tags: ["Others"],
    raised: "818.0%",
    close: "5 days",
    invest: "₹5000",
    finished: false,
  },
  {
    img: group428,
    smallImg: group424,
    heading: "Gold Setu",
    desc: " Gold Setu is a mobile-first SaaS platform for jewellery retailers that helps them to automate their workflows and d... ",
    tags: ["SaaS"],
    raised: "818.0%",
    close: "5 days",
    invest: "₹5000",
    finished: true,
  },
  {
    img: tm,
    smallImg: tms,
    heading: "Truly Madly",
    desc: " TrulyMadly is a new, modern way to find true, mad love. A platform that brings singles together based on common int... ",
    tags: ["Others", "Artificial"],
    raised: "377.0%",
    close: "5 days",
    invest: "₹10000",
    finished: false,
  },
  {
    img: hive,
    smallImg: hives,
    heading: "BHIVE Alts",
    desc: " BHIVE is a fintech platform which provides retail investors access to institutional quality Real Estate investment ...  ",
    tags: ["Fintech"],
    raised: "1506.7%",
    close: "5 days",
    invest: "₹10000",
    finished: true,
  },
  {
    img: notwp,
    smallImg: notwps,
    heading: "Incluzon",
    desc: " Incluzon is a two-part AI product designed to consolidate the scattered pool of high potential graduates (across re... ",
    tags: ["Artificial", "Others"],
    raised: "140.5%",
    close: "5 days",
    invest: "₹10000",
    finished: true,
  },
  {
    img: zapp,
    smallImg: zapps,
    heading: "Zappfresh",
    desc: " Zappfresh is a fresh meat brand and we ensure healthy meaty goodness to you, without any hassles whatsoever. ",
    tags: ["D2C"],
    raised: "341.8%",
    close: "5 days",
    invest: "₹10000",
    finished: true,
  },
  {
    img: group419,
    smallImg: grp19,
    heading: "Saarthi",
    desc: "Saarthi.ai is a multilingual Contact Center AI company focused on Collections. It's the first of its kind collectio...",
    tags: ["Artificial"],
    raised: "223.4%",
    close: "5 days",
    invest: "₹10000",
    finished: true,
  },
  {
    img: conthe,
    smallImg: pubnex,
    heading: "Saarthi",
    desc: "Saarthi.ai is a multilingual Contact Center AI company focused on Collections. It's the first of its kind collectio...",
    tags: ["Artificial"],
    raised: "223.4%",
    close: "5 days",
    invest: "₹10000",
    finished: true,
  },
];

const CardsComponent = ({show}) => {

  const [viewshow, setViewShow] = useState(0);


  const showCard = (show) => {
    if(show){
      setViewShow(6)
    }
    else {
      setViewShow(8)
    }
  }

  useEffect(() => {
    showCard(show);
  }, [show]);

  return (
    <div>
      <div className="flex flex-col items-center my-10">
        <div className="flex flex-col items-center mb-10">
          <div className="header-font">Latest Deals</div>
          <div>
            Access highly-vetted investment opportunities in startups across the
            various sectors.
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly  mx-[] gap-7 gap-y-12">
          {data.slice(0, viewshow).map((d, i) => (
            <Card
              key={i}
              img={d.img}
              smallImg={d.smallImg}
              heading={d.heading}
              desc={d.desc}
              tags={d.tags}
              raised={d.raised}
              close={d.close}
              invest={d.invest}
              finished={d.finished}
            />
          ))}
        </div>
        <div className="my-8 mt-[5rem]">
          {show && (
            <Link to='/invest'>
          <a className="blue-button px-16 py-5 text-[1rem]">
            View All
          </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
