import React from "react";
import CardsComponent from "../components/CardsComponent";
import SearchBar from "../components/SearchBar";

const Invest = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col gap-3 mt-8">
      <div className="text-[40px] font-bold">Invest Now</div>
      <div className="text-xl font-semibold">
        Browse latest inves tment opportunities on Sateeq. All companies are
        vetted & pass due diligence.
      </div>

      <SearchBar />
      <CardsComponent />
    </div>
  );
};

export default Invest;
