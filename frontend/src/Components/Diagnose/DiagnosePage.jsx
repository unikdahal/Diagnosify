import Navbar from "../Navbar";
import { useState } from "react";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import arrow from "../../assets/arrow.svg";

const DiagnosePage = () => {
  const [stage, setStage] = useState(2);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    healthQuestions: [],
    symptoms: [],
  });

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  const handleFormDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };


  return (
    <div>
      <div className="bg-blue-800">
        <Navbar />
        <div className="flex justify-between mt-10 pb-8">
          <div class="text-white text-4xl font-bold leading-normal poppins px-20">
            Fill your basic details
          </div>
        </div>
      </div>
      <div>
        <div>Personal Information</div>
        <img src={arrow} alt="->" />
      </div>
      {stage}
      {stage === 1 && (
        <Stage1
          formData={formData}
          onFormDataChange={handleFormDataChange}
          onNext={handleNext}
        />
      )}
      {stage === 2 && (
        <Stage2
          formData={formData}
          onFormDataChange={handleFormDataChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {stage === 3 && (
        <Stage3
          formData={formData}
          onFormDataChange={handleFormDataChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {stage === 4 && (
        <Stage4 formData={formData} onPrevious={handlePrevious} />
      )}
    </div>
  );
};

export default DiagnosePage;
