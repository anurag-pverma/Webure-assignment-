import { Link } from "react-router-dom";
import "./App.css";
import { BsFillCheckCircleFill, BsFillPlayCircleFill, BsSlack } from "react-icons/bs";
import Service from "./Components/Service";

import girl2 from "./img/girl2.jpeg";
import girl3 from "./img/girl3.jpeg";
import back from "./img/1 (3).png";
import qa from "./img/1 (2).png";
import app from "./img/1 (1).png";
import a from "./img/1.png";
import b from "./img/2.png";
import c from "./img/3.png";
import d from "./img/4.png";
import e from "./img/5.png";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between px-4 py-3 bg-none border-gray-800">
        <div className="flex items-center">
          <div className="ml-4 text-lg font-medium italic font-bold text-[#FB3F6C] ">
            Webure Technologies
          </div>
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="px-3 py-2 font-medium text-[#747582]  hover:text-grey"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="px-3 py-2 font-medium text-[#747582] hover:text-grey"
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="px-3 py-2 font-medium text-[#747582] hover:text-grey"
          >
            Careers
          </Link>
          <Link
            to="/roi_story"
            className="px-3 py-2 font-medium text-[#747582] hover:text-grey"
          >
            ROI Stories
          </Link>
          <Link
            to="/blog"
            className="px-3 py-2 font-medium text-[#747582] hover:text-grey"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 font-medium text-[#747582] hover:text-grey"
          >
            Contact
          </Link>
        </div>
        <div>
          <button className="px-5 py-2 color-[#282c4b] rounded-3xl font-medium text-gray-600 border border-[rgb(137, 77, 234, 0.5)] bg-[#FFFFFF] ">
            Let's Talk
          </button>
        </div>
      </nav>

      <summary>
        <div className="flex items-center h-screen bg-[rgb(255, 100, 137, 0.04)] ">
          <div className="w-full max-w-xl mx-auto  bg-white rounded-l">
            <h1 className="text-5xl font-bold text-center text-gray-800">
              Reach Your Business Goal in Record Time
            </h1>
            <p className="text-[#747582] text-center my-5 text-[20px] text-align-[left]">
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.
            </p>
            <div className="flex flex-row items-center text-center ">
              <button className="bg-[#FF698D]  px-5 py-3 rounded-3xl text-white border border-[#FFFFFF] ">
                Get Started
              </button>
              <div className="flex flex-row m-auto">
                <span className="text-2xl ">
                  <BsFillPlayCircleFill />
                </span>
                <a href="" className="text-black-500 px-3 hover:text-blue-700 ">
                  Book a 30 Min Quick Meeting
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg mx-auto  bg-white">
            <img
              src="https://webure-tech.netlify.app/assets/Group%202052-bc210db1.png"
              alt="Business"
              className="rounded-lg"
            />
          </div>
        </div>
      </summary>
      {/* loogo is here  */}
      <div className="flex justify-around m-4">
        <div className="text-center flex justify-around text-[#B7C0CC]">
          <span className="text-3xl">
            <BsSlack />
          </span>
          <p className="text-[#B7C0CC] text-2xl px-2 font-semibold">Slack</p>
        </div>
        <div className="text-center flex justify-around text-[#B7C0CC]">
          <p className="text-[#B7C0CC] font-xl font-weight:900 text-2xl font-medium">
            Prudential
          </p>
        </div>

        <div class="text-center flex justify-around text-[#B7C0CC]">
          <img
            src="https://img.icons8.com/color/96/000000/microsoft.png"
            alt="Microsoft logo"
            className="w-10 h-10"
          />
          <p className="text-[black] text-2xl font-weight:900 font-medium ">
            Microsoft
          </p>
        </div>

        <div className="text-center flex justify-around text-[#B7C0CC]">
          <p className="text-[#B7C0CC] text-4xl  font-bold">Zoover</p>
        </div>
      </div>

      {/* SERVICES FOR WEBURE */}
      <div>
        <Service />
      </div>

      {
        // update some thing
      }

      <div className=" mt-auto h-[480px]">
        <div className="flex   mt-6 w-[90%] m-auto h-[450px] text-white bg-[#282C4B]">
          <div>
            <img className="h-24 min-h-full" src={girl2} alt="/" />
          </div>
          <div className="mt-5 ml-20">
            <h1 className="text-[#F17216]">WHY CHOOSE US</h1>

            <div className="mt-3 text-3xl  font-bold leading-normal text-left ... ">
              <p>
                Take on any Challenge of <br /> the Digital World
              </p>
            </div>

            <div >
              <div className="flex mt-5 ">
                <span className="text-[#CED1E6] text-xl px-3">
                  <BsFillCheckCircleFill />
                </span>
                <p>Corporate Financial Advisory</p>
              </div>

              <div className="flex  mt-5">
              <span className="text-[#CED1E6] text-xl px-3">
                  <BsFillCheckCircleFill />
                </span>
                <p>Development of Financial Models</p>
              </div>

              <div className="flex   mt-5">
              <span className="text-[#CED1E6] text-xl px-3">
                  <BsFillCheckCircleFill />
                </span>
                <div>Deal Structuring</div>
              </div>
            </div>
            <div className="mt-10">
              <input
                className="bg-[#282C4B] border-b-[#FFFFFF] text-[#FFFFFF] p-3 text-md font-bold border-2  border-[#282C4B]  w-half  focus:bg-[#282C4B]  leading-tight focus:outline-none focus:border-[#282C4B] focus:border-b-[#FFFFFF]"
                placeholder="Enter your email ID"
              />
              <button className="bg-[#FF698D]  px-5 py-3 rounded-3xl text-white border border-[#FFFFFF]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {

          our solution 
        } */}

      <div className=" mt-11 h-[480px]">
        <div className="flex justify-around rounded-full ... mt-6 w-[80%] m-auto h-[380px]">
          <div className="mt-5  text-left ...">
            <h1 className="font-bold text-sm text-blue-600">OUR SOLUTIONS</h1>

            <div className="mt-5 text-3xl w-[50%] text-bold  text-left ...">
              <p className="font-bold text-4xl text-[#00005C]">
                Launch and scale your
                <br /> marketing campaigns
              </p>
            </div>

            <div className=" mt-8 w-[50%] text-left ... ">
              <p className="font-bold text-1xl text-[#747582]">
                We start with a a kick-off call with the respective project
                owners, onboard the teams on the project management platforms
                and, take off!
              </p>
            </div>
            <div className=" mt-8 w-[40%]">
              <button className=" text-md text-white rounded-md ... bg-[#3532d6] h-[45px] w-[50%]">
                Learn more
              </button>
            </div>
          </div>
          <div className="ml-[-100px]">
            <img
              className="ml-[-100px] w-[800px] h-[450px]"
              src={girl3}
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className=" h-[280px]">
        <div className="flex justify-around text-center  mt-4 gap-20  w-[70%] m-auto h-[170px]">
          <div className="border rounded-lg ... bg-blue-700 text-white font-bold ">
            <h1 className="mt-7 text-4xl">96%</h1>

            <div>
              <p className="text-sm p-1">Client retetion </p>
              <p className="text-sm p-1 text-[#A1AABE]"> By Dailbor and Marino in Hong Kong</p>
            </div>
          </div>
          <div className=" bg-[#FB3F6C] rounded-lg ... text-white font-bold ">
            <h1 className="mt-7 text-4xl">10+</h1>
            <div>
              <p className="text-sm p-1">Year of Sevices</p>
              <p className="text-sm p-1 text-[#A1AABE]"> By Dailbor and Marino in Hong Kong</p>
            </div>
          </div>
          <div className=" border rounded-lg ... bg-[#FFC300] text-white font-bold ">
            <h1 className="mt-7 text-4xl">70+</h1>
            <p className="text-sm p-1">Professionals</p>
            <p className="text-sm p-1 text-[#A1AABE]"> By Dailbor and Marino in Hong Kong</p>
          </div>
          <div className="bg-[#627193] border rounded-lg ...  text-white font-bold ">
            <h1 className="mt-7 text-2xl">$40M</h1>
            <p className="text-sm p-1 text-[white]">In funding</p>
            <p className="text-sm p-1 text-[#A1AABE]"> By Dailbor and Marino in Hong Kong</p>
          </div>
        </div>
      </div>

      {/* grid items of list of items  */}
      <div>
        <div>
          <h1 className="text-5xl font-bold font-sans text-center">What We Do</h1>

          <div className="flex w-[70%] justify-around m-auto">
            <div className="mt-10 font-bold text-4xl ">Our Services</div>
            <div className=" w-[700px] text-left ... ">
              <p className="text-md  text-[#A9A9A9] mt-10 leading-relaxed ... text-[gray]">
                It has roots in a piece of classical latin literature from 45
                BC, making it over 2000 years old, Richard McClintock, o Latin
                professor at Homepden-Sydney College in Virginia, looked up one
                of the more obscure laatin words, consectetur, from a lorem
                ipsum passage, adn going through the cites of the word in
                classsical literature
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-4 gap-8 m-auto w-[70%] mt-10 ">
              <div className="p-3 w-[190px] rounded-lg ...   h-[230px] bg-[purple] shadow-md ...">
                <img
                  className="h-[100px]  rounded-full ... m-auto"
                  src="https://image.pngaaa.com/130/5119130-middle.png"
                  alt="/"
                />

                <div>
                  <p className="font-bold text-xl">Design</p>
                </div>
                <div className="text-center">
                  <p>Contrary to popular belief, Lorem ipsum dolor text</p>
                </div>
              </div>
              <div className="w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img
                  className="h-[100px] m-auto"
                  src="https://cdn.iconscout.com/icon/free/png-256/web-development-1876514-1588443.png"
                  alt="/"
                />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Front End Development</p>
                </div>
              </div>
              <div className=" w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img className="h-[100px] m-auto" src={back} alt="/" />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Back End Development</p>
                </div>
              </div>
              <div className=" w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img className="h-[100px] m-auto" src={app} alt="/" />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Application Development</p>
                </div>
              </div>
              <div className=" w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img
                  className="h-[100px] m-auto"
                  src="https://static.vecteezy.com/system/resources/previews/002/206/166/non_2x/cloud-computing-icon-free-vector.jpg"
                  alt="/"
                />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Cloud Services</p>
                </div>
              </div>
              <div className=" w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img
                  className="h-[100px] m-auto"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/analytics-980-621232.png"
                  alt="/"
                />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Analitics</p>
                </div>
              </div>
              <div className=" w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img className="h-[100px] m-auto" src={qa} alt="/" />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Q-A And <br/> Testing</p>
                </div>
              </div>
              <div className=" w-[190px] rounded-lg ...   h-[230px]  shadow-md ...">
                <img
                  className="h-[100px] m-auto"
                  src="https://cdn4.iconfinder.com/data/icons/engineering-56/64/10_Engineering_Service_handle_help_settings_support_fix_hand_repair_information_tech-512.png"
                  alt="/"
                />

                <div className="text-center">
                  <p className="font-bold text-md p-4">Back Office <br/> Support</p>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-8 m-auto w-[70%]  mt-10">
              <div className="  h-[180px] shadow-md  text-center">
                <img className="h-[150px] m-auto" src={a} alt="/" />

                <p className="font-bold text-1xl">Cosmetic Forcest Marketing</p>
              </div>
              <div className=" h-[180px] shadow-md text-center">
                <img className="h-[150px] m-auto" src={b} alt="/" />
                <p className="font-bold text-1xl">Sales Analytic</p>
              </div>
              <div className=" h-[180px] shadow-md text-center">
                <img className="h-[150px] m-auto" src={c} alt="/" />
                <p className="font-bold text-1xl">Fashion Store Mobile Apps</p>
              </div>
              <div className=" h-[180px] shadow-md text-center">
                <img className="h-[150px] m-auto" src={d} alt="/" />
                <p className="font-bold text-1xl">
                  Laura's Clore Branding Identity
                </p>
              </div>
              <div className=" h-[180px] shadow-md text-center">
                <img className="h-[150px] m-auto" src={e} alt="/" />

                <p className="font-bold text-1xl">SEO Marketing 4.0</p>
              </div>
              <div className=" h-[180px]">
                <h1 className=" text-sm text-[#F17216] text-2xl">PROJECTS</h1>

                <div className="mt-2 ">
                  <p className="font-bold text-2xl font-sans">Selected Works <br/> From Us</p>
                </div>
                <div>
                  <button className=" px-5 mt-4 py-2 color-[#282c4b] font-bold rounded-3xl font-medium text-gray-600 border border-[#F17216] bg-[#FFFFFF] ">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
