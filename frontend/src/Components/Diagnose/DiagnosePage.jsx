import Navbar from "../Navbar";
import React, { useRef, useState } from "react";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import arrow from "../../assets/arrow.svg";


const DiagnosePage = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    symptom_list: [],
  });

  const [answeredQuestions, setAnsweredQuestions] = useState({
    headache: false,
    fever: false,
    fatigue: false,
    abdominalPain: false,
    dizzy: false
  });

  const handleSymptomSelection = (symptom, status) => {
    if (status) {
      if (!formData.symptom_list.includes(symptom)) {
        setFormData(prevFormData => ({
          ...prevFormData,
          symptom_list: [...prevFormData.symptom_list, symptom]
        }));
        
      }
    } else {
      if (formData.symptom_list.includes(symptom)) {
        setFormData(prevFormData => ({
          ...prevFormData,
          symptom_list: prevFormData.symptom_list.filter(item => item !== symptom)
        }));
      }
    }
  };
  
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
        {/* <Navbar /> */}
        <div className="flex justify-between pt-10 pb-8">
          <div className="text-white text-4xl font-bold leading-normal poppins px-20">
            Fill your basic details
          </div>
        </div>
      </div>

      {formData.symptom_list}
      {stage === 1 && (
        <>
          <div className="flex w-full justify-between mt-6 px-40">
            <div className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center">
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center">
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center">
              Symptoms Selection
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center">
              Get your Report
            </div>
          </div>
          <Stage1
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
          />
        </>
      )}
      {stage === 2 && (
        <>
          <div className="flex w-full justify-between mt-6 px-40">
            <div className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center">
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center">
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center">
              Symptoms Selection
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center">
              Get your Report
            </div>
          </div>
          <Stage2
            answeredQuestions={answeredQuestions}
            click={handleSymptomSelection}
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </>
      )}
      {stage === 3 && (
        <>
          <div className="flex w-full justify-between mt-6 px-40">
            <div className="cursor-pointer px-6 py-2 opacity-50 text-lg bg-white rounded-lg border border-black justify-center items-center">
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 text-lg bg-white rounded-lg border border-black justify-center items-center">
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center">
              Symptoms Selection
            </div>

            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 text-lg bg-white rounded-lg border border-black justify-center items-center">
              Get your Report
            </div>
          </div>
          <Stage3
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </>
      )}
      {stage === 4 && (
        <>
          <div className="flex w-full justify-between mt-6 px-40">
            <div className="cursor-pointer px-6 py-2 opacity-50 text-lg bg-white rounded-lg border border-black justify-center items-center">
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 text-lg bg-white rounded-lg border border-black justify-center items-center">
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div className="cursor-pointer px-6 py-2 opacity-50 text-lg bg-white rounded-lg border border-black justify-center items-center">
              Symptoms Selection
            </div>

            <img src={arrow} alt="->" />

            <div className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center">
              Get your Report
            </div>
          </div>
          <Stage4 formData={formData} onPrevious={handlePrevious} />
        </>
      )}
    </div>
  );
};

export default DiagnosePage;
