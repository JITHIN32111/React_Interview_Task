import React from "react";
import img from "../public/Main.png";
import box1 from "../public/box1.png";
import box2 from "../public/box2.png";
import box3 from "../public/box3.png";

const App = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="text-white text-center mt-8">
        <h1 className="mb-4 sm:text-xl text-base">
          Epic Games: An American video game and software developer <br /> and
          publisher based in Cary, North Carolina.
        </h1>
        <div className="flex justify-center items-center mb-4">
          <img src={img} className="w-full max-w-[900px]" alt="" />
        </div>
        <p className="px-4 sm:px-10 md:px-36 text-sm">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator-made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button className="w-[200px]  bg-white text-black p-2  sm:mt-4 rounded hover:bg-gray-200 transition duration-300">
          Visit Website
        </button>

        <div className="text-lg mt-28 sm:flex items-center justify-between px-4">
          <div className="sm:w-1/3 mx-10 mb-4 flex flex-col items-center">
            <img src={box3} alt="" className="w-full max-w-[300px] h-auto mx-auto" />
            <p className="mt-2">
              Explore large, destructible environments where no two games are ever the same.
            </p>
          </div>
          <div className="sm:w-1/3 mx-10 mb-4 flex flex-col items-center">
            <img src={box1} alt="" className="w-full max-w-[300px] h-auto mx-auto overflow-hidden" />
            <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
              Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
            </p>
          </div>
          <div className="sm:w-1/3 mx-10 mb-4 flex flex-col items-center">
            <img src={box2} alt="" className="w-full max-w-[300px] h-auto mx-auto overflow-hidden" />
            <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
              Discover even more ways to play across thousands of creator-made game genres
            </p>
          </div>
        </div>

        <div className="mt-20 mx-2">
          <h1 className="text-3xl">Our Contribution</h1>
          <p className=" mt-2 px-6 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className="text-lg mt-32 flex flex-row items-center justify-between px-16">
          <div className="sm:w-1/3 mx-10 mb-4 overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl xl:text-9xl">
              5M
            </h1>
            <p className="mt-2">Daily User <br /> Engagements </p>
          </div>
          <div className="sm:w-1/3 mx-10 mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl xl:text-9xl">
              $500K
            </h1>
            <p className="mt-2  text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
              Revenue Surge for an <br /> Platform
            </p>
          </div>
          <div className="sm:w-1/3 mx-10 mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl xl:text-9xl">
              10X
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
              ROAS on all our <br /> marketing campaign
            </p>
          </div>
        </div>

        <div className="mt-20 mx-16 ">
          <h1 className="text-3xl">Interested in delving deeper into the project?</h1>
          <p className=" mt-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl">
            If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.
          </p>
          <div className="flex flex-col lg:flex-row items-center mt-4 justify-center gap-4">
            <button className="hover:bg-gray-200 hover:text-black transition duration-300 w-full lg:w-auto bg-black text-white border border-white p-2">
              Ring us on Skype
            </button>
            <button className="hover:bg-gray-200 transition duration-300 w-full lg:w-auto bg-white text-black p-2">
              Contact Us
            </button>
          </div>
          <p className="mt-20 mb-10 text-sm sm:text-base ">2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default App;
