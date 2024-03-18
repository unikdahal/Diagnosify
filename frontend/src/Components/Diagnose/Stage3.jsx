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
  return (
    <div>
      <h2>Stage 3 Details</h2>
      <form>
        <label>
          Choose Symptoms:
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
