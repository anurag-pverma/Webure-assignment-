import React from "react";
import shop from "../img/shop.png";
import card from "../img/cards.png";
import fav from "../img/favorite-chart.png";

function Service() {
  return (
    <div className="container mx-auto p-10 ">
    <p className="text-orange-500 text-sm font-semibold text-base">
      SERVICES
    </p>
    <div className="flex gap-10">
      <div className="p-8 pl-0">
        <p className="font-bold text-2xl mb-5 ">Our Capabilities</p>
        <p>
          We will bring the breathe of our experience and industry <br />
          knowledge to help you succeed
        </p>
      </div>
      <div className="p-8">
        <img className="mb-3" src={shop} alt="" />
        <p className="font-semibold mb-5 ">Consult</p>
        <p>
          Leverage agile framework to provide a robust high level synopsys
          overviews
        </p>
        <p></p>
      </div>
      <div className="p-8">
        <img className="mb-3" src={card} alt="" />
        <p className="font-semibold mb-5 ">Create</p>
        <p>
          Bring to the table survival strategies to ensure proactive
          domination
        </p>
      </div>
      <div className="">
        <img className="mb-3" src={fav} alt="" />
        <p className="font-semibold mb-5 ">Collaborate </p>
        <p>Grow the holistic world view of disruptive innovation workspace</p>
      </div>
    </div>
  </div>
  )
}

export default Service