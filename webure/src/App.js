import { Link } from "react-router-dom";
import "./App.css";
import { BsFillPlayCircleFill, BsSlack } from "react-icons/bs";
import Service from "./Components/Service";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between px-4 py-3 bg-none border-gray-800">
        <div className="flex items-center">
          <div className="ml-4 text-lg font-medium text-[#FB3F6C] ">
            Webure Technologies
          </div>
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="px-3 py-2 font-medium text-gray-600 hover:text-grey"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="px-3 py-2 font-medium text-gray-600 hover:text-grey"
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="px-3 py-2 font-medium text-gray-600 hover:text-grey"
          >
            Careers
          </Link>
          <Link
            to="/roi_story"
            className="px-3 py-2 font-medium text-gray-600 hover:text-grey"
          >
            ROI Stories
          </Link>
          <Link
            to="/blog"
            className="px-3 py-2 font-medium text-gray-600 hover:text-grey"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 font-medium text-gray-600 hover:text-grey"
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
              <div classNameName="flex flex-row m-auto">
                <span classNameName="text-2xl ">
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
              classNameName="rounded-lg"
            />
          </div>
        </div>
      </summary>
      {/* loogo is here  */}
      <div className="flex justify-around m-4">
        
        <div className="text-center flex justify-around text-[#B7C0CC]">
          <span className="text-3xl"><BsSlack/></span>
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
        <Service/>
      </div>
     
      
    </div>
  );
}

export default App;
