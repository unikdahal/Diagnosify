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
    question_list: [],
    symptom_list: [], // Add elements from selectedSymptoms that are not already present in
  });

  const [answeredQuestions, setAnsweredQuestions] = useState({
    headache: false,
    fever: false,
    fatigue: false,
    abdominalPain: false,
    dizzy: false,
  });

  const handleSymptomSelection = (symptom, status) => {
    if (status) {
      if (!formData.question_list.includes(symptom)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          question_list: [...prevFormData.question_list, symptom],
        }));
      }
    } else {
      if (formData.question_list.includes(symptom)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          question_list: prevFormData.question_list.filter(
            (item) => item !== symptom
          ),
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

  const handleTitleClick1 = () => {
    setStage(1);
  };
  const handleTitleClick2 = () => {
    setStage(2);
  };
  const handleTitleClick3 = () => {
    setStage(3);
  };
  const handleTitleClick4 = () => {
    setStage(4);
  };

  return (
    <div className="bg-sky-100">
      <div className="bg-blue-800">
        <div className="flex justify-between pt-10 pb-8">
          <div className="text-white text-4xl font-bold leading-normal poppins px-20">
            Fill your basic details
          </div>
        </div>
      </div>

      {stage === 1 && (
        <>
          <div className="flex w-full justify-between mt-6 px-40">
            <div
              className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center"
              onClick={handleTitleClick1}
            >
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick2}
            >
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick3}
            >
              Symptoms Selection
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick4}
            >
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
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick1}
            >
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center"
              onClick={handleTitleClick2}
            >
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick3}
            >
              Symptoms Selection
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick4}
            >
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
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick1}
            >
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick2}
            >
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center"
              onClick={handleTitleClick3}
            >
              Symptoms Selection
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick4}
            >
              Get your Report
            </div>
          </div>
          <Stage3
            setFormData={setFormData}
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
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick1}
            >
              Personal Information
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick2}
            >
              Questionnaire
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 opacity-50 bg-white rounded-lg border border-black justify-center items-center"
              onClick={handleTitleClick3}
            >
              Symptoms Selection
            </div>
            <img src={arrow} alt="->" />
            <div
              className="cursor-pointer px-6 py-2 bg-blue-800 rounded-md text-lg text-white justify-center items-center"
              onClick={handleTitleClick4}
            >
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
