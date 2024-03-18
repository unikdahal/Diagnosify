import React, { useEffect, useState } from "react";

function Stage3({ formData, onFormDataChange, onNext, onPrevious }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };
  const [symptoms, setSymptoms] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

<<<<<<< HEAD
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
=======
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const data = [
    "Abdominal distention",
    "Abnormal appearing skin",
    "Abnormal appearing tongue",
    "Abnormal breathing sounds",
    "Abnormal involuntary movements",
    "Abnormal movement of eyelid",
    "Abnormal size or shape of ear",
    "Absence of menstruation"
  ];

  useEffect(() => {
    setSymptoms(data);
  }, []);

  const handleSymptomClick = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

>>>>>>> 38f2af2 (added symptoms function)
  return (
    <div>
      <h2>Stage 3 Details</h2>
      <form>
        <label>
          Choose Symptoms:
<<<<<<< HEAD
          {symptoms.map((data) => {
            return (
              <div key={data.id}>
                <input
                  type="checkbox"
                  name="symptoms"
                  value={data.id}
                  onChange={handleChange}
                />
                {data}
              </div>
            );
          })}
        </label>
        <br />
        {/* Add other fields */}
=======
          {symptoms.map((symptom, index) => (
            <div key={index} onClick={() => handleSymptomClick(symptom)} style={{ cursor: 'pointer' }}>
              {symptom}
            </div>
          ))}
        </label>
        <br />
        <div>
          Selected Symptoms:
          <ul>
            {selectedSymptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
>>>>>>> 38f2af2 (added symptoms function)
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="button" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Stage3;
