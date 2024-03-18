import React, { useEffect, useState } from "react";

function Stage3({
  formData,
  onFormDataChange,
  onNext,
  onPrevious,
  setFormData,
}) {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFormData((prevFormData) => {
      const updatedSymptomList = [];

      // put only the symptoms in the selected symptoms in updatedSymptomList
      selectedSymptoms.forEach((symptom) => {
        if (!updatedSymptomList.includes(symptom)) {
          updatedSymptomList.push(symptom);
        }
      });

      // Remove elements from symptom_list that are not present in selectedSymptoms

      return {
        ...prevFormData,
        symptom_list: updatedSymptomList,
      };
    });
    console.log(formData.symptom_list);
  }, [selectedSymptoms]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://diagnosify-backend.vercel.app/api/v1/symptoms/getSymptoms"
      );
      const data = await response.json();
      const symptomsData = data[0].symptom;
      setSymptoms(symptomsData);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
    }
  };

  const handleSymptomClick = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form>
        <label>
          <div className="flex items-center mt-20 mx-20 justify-between">
            <h1 className="font-medium text-2xl mr-4">Choose Symptoms:</h1>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 border border-gray-400 rounded focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2 max-h-80 overflow-scroll overflow-x-hidden p-3 mx-20 mt-8 border-blue-800 border-2 rounded-xl">
            {filteredSymptoms.map((symptom, index) => (
              <div
                key={index}
                onClick={() => handleSymptomClick(symptom)}
                className={`h-fit p-2 rounded cursor-pointer ${
                  selectedSymptoms.includes(symptom)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                style={{ cursor: "pointer" }}
              >
                {symptom}
              </div>
            ))}
          </div>
        </label>
        <br />
        <div>
          <h1 className="ml-20 font-medium text-2xl">Selected Symptoms:</h1>

          <div className="flex flex-wrap gap-2 max-h-80 overflow-scroll overflow-x-hidden p-3 mx-20 mt-8 border-gray-400 border-2 rounded-xl">
            {selectedSymptoms.map((symptom, index) => (
              <div
                key={index}
                onClick={() => handleSymptomClick(symptom)}
                className="p-2 rounded cursor-pointer bg-blue-500 text-white"
              >
                {symptom}
              </div>
            ))}
          </div>
        </div>
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
