import React from "react";
import shop from "../img/shop.png";
import card from "../img/cards.png";
import fav from "../img/favorite-chart.png";

function Service() {
  return (
    <div className="container mx-auto p-10 ">
      <p className="text-[#F17216] text-sm ">
        SERVICES
      </p>
      <div className="flex gap-10">
        <div className="p-8 pl-0">
          <p className="font-bold text-2xl mb-4 text-[#14183E] ">Our Capabilities</p>
          <p className="text-[#747582]">
            We will bring the breathe of our experience and industry knowledge to help you succeed
          </p>
        </div>
        <div className="p-8">
          <img className="mb-3" src={shop} alt="" />
          <p className="font-semibold mb-4 text-[#14183E] ">Consult</p>
          <p className="text-[#747582]">
            Leverage agile framework to provide a robust high level synopsys overviews
          </p>
          <p></p>
        </div>
        <div className="p-8">
          <img className="mb-3" src={card} alt="" />
          <p className="font-semibold mb-4 text-[#14183E]">Create</p>
          <p className="text-[#747582]">
            Bring to the table survival strategies to ensure proactive domination
          </p>
        </div>
        <div className="">
          <img className="mb-3" src={fav} alt="" />
          <p className="font-semibold mb-4 text-[#14183E] ">Collaborate </p>
          <p className="text-[#747582]">Grow the holistic world view of disruptive innovation workspace</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
