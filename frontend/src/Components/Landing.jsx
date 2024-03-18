import Navbar from "./Navbar";
import img from "../assets/landing.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="bg-blue-800">
      {/* <Navbar /> */}
      <div className="flex justify-between pt-10 pb-28">
        <div>
          <div className="flex flex-col gap-8 px-20">
            <div class="text-orange-200 text-6xl font-bold leading-normal poppins">
              Introducing Diagnosify:
              <br />
              Your At-Home Disease
              <br />
              Diagnosis Companion
            </div>
            <div class="text-white text-2xl font-normal poppins">
              Your personal disease diagnosing tool on your palm!
            </div>
          </div>
          <div className="absolute right-[-100px] top-40">
            <img
              class="w-[630px] h-[630px] rounded-full border-8 border-white"
              src={img}
            />
          </div>
        </div>
      </div>
      <div className="px-20 absolute -mt-8">
        <Link to="./diagnose">
        <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold border-white border-4 text-xl">Try Diagnosify Now!</button>
     
        </Link>
      
        </div>
    
    </div>
  );
};

export default Landing;
