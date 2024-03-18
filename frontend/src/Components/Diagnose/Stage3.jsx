import React, { useEffect, useState } from "react";

function Stage3({ formData, onFormDataChange, onNext, onPrevious }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };

  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://diagnosify-backend.vercel.app/api/v1/symptoms/getSymptoms"
    );

    const res = await data.json();
    const res1 = res[0].symptom;
    console.log(res1);
    setSymptoms(res1);
  };
  if (symptoms == null) {
    return <div></div>;
  }


  const handleSymptomClick = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <div>
      <h2>Stage 3 Details</h2>
      <form>
        <label>
          Choose Symptoms:
          <div className="flex flex-wrap gap-2 h-40 overflow-scroll overflow-x-hidden p-2 m-10">
          {symptoms.map((symptom, index) => (
            <div className="p-2 bg-gray-300 w-fit rounded" key={index} onClick={() => handleSymptomClick(symptom)} style={{ cursor: 'pointer' }}>
              {symptom}
            </div>
          ))}
          </div>
        </label>
        <br />
        <div>
          Selected Symptoms:
          
          <div className="flex flex-wrap gap-2 h-40 overflow-scroll overflow-x-hidden p-2 m-10">
            {selectedSymptoms.map((symptom, index) => (
              <div className="p-2 bg-gray-300 w-fit h-fit rounded cursor-pointer" key={index} onClick={() => handleSymptomClick(symptom)}>{symptom}</div>
            ))}
       </div>
        </div>
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="button" onClick={onNext}>
          Next
        </button>
      </form>

      <div className="flex gap-20 px-20">
        <button
          className="mt-4 mb-8 border-2 border-red-600 text-lg text-red-600 font-bold px-10 py-2 rounded-md hover:bg-red-600 hover:text-white"
          type="button"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          className="mt-4 mb-8 border-2 border-red-600 text-lg text-red-600 font-bold px-10 py-2 rounded-md hover:bg-red-600 hover:text-white"
          type="button"
          onClick={onNext}
        >
          Get Report Now!
        </button>
      </div>
    </div>
  );
}

export default Stage3;
