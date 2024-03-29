import React, { useEffect, useState } from "react";

function Stage4({ formData, onPrevious }) {
  const [disease, setDisease] = useState(null);
  const [prevention, setPrevention] = useState([]);
  useEffect(() => {
    let { symptom_list, question_list } = formData;
    symptom_list = symptom_list.concat(question_list);
    const reqJson = JSON.stringify({ symptom_list });
    console.log(reqJson);
    fetchData(reqJson);
  }, []);
  const fetchData = async (reqJson) => {
    try {
      const response = await fetch(
        "https://diagnosify-backend.vercel.app/api/v1/symptoms/predict_disease",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: reqJson,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from server:", data);
      setDisease(data.disease_names);
      const preventionString = data.Prevention;
      const preventionString1 = JSON.stringify(preventionString);
      const trimmedStr = preventionString1.substring(
        3,
        preventionString1.length - 3
      );
      console.log("Prevention String1 " + preventionString1);
      console.log(typeof preventionString1);
      console.log("Trimmed " + trimmedStr);
      const arrayFromStr = trimmedStr.split(",");
      setPrevention(arrayFromStr);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
    }
  };
  if (!disease) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pb-20">
      <div className="flex flex-col p-8 mx-20 my-8  justify-between gap-4 font-medium text-xl bg-white rounded-lg">
        <h2>Name: {formData.fullName}</h2>
        <div className="flex justify-between w-full">
          <h2>Gender: {formData.gender}</h2>
          <h2>Age: {formData.age}</h2>
          <h2>Height: {formData.height}</h2>
          <h2>Weight: {formData.weight}</h2>
        </div>
      </div>
      <div className="mx-20 bg-white rounded-lg  p-8 flex flex-col gap-8">
        <h1 className="text-xl">
          As per the symptoms you added, the system predicts that you might be
          suffering from :
        </h1>

        <div class="my-8 px-10 py-3 w-fit mx-auto border-4 border-red-600 rounded-lg justify-center items-center gap-2">
          <div class="text-red-600 text-3xl font-semibold ">{disease}</div>
        </div>

        <div className="flex p-4 bg-red-200 gap-4 rounded-md items-center">
          <h1>⚠️</h1>
          <h1>
            Please don’t rely fully upon this for your diagnose as there’s more
            to evolve for this project to give accurate information related to
            the disease. We suggest to consult with doctors if the symptoms are
            quite serious.
          </h1>
        </div>

        {prevention.length > 1 && (
          <div className="flex flex-col gap-8">
            <h1 className="text-xl font-bold">
              The Preventive Measures of {disease} are:
            </h1>
            <ul className="list-disc mx-10">
              {prevention.map((item, index) => (
                <li key={index}>{item.substring(1, item.length - 1)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stage4;
