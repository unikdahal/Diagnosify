import React from 'react';

function Stage1({ formData, onFormDataChange, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <form onSubmit={(e)=>{e.preventDefault()}} >
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </label>
        <br />
        {/* Add other fields */}
        <button type="button" onClick={onNext}>Next</button>
      </form>
    </div>
  );
}

export default Stage1;
