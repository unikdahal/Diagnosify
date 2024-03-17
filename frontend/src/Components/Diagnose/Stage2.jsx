import React from 'react';

function Stage2({ formData, onFormDataChange, onNext, onPrevious}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };

  return (
    <div>
      <h2>Stage 2 Details</h2>
      <form>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </label>
        <br />
        {/* Add other fields */}
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="button" onClick={onNext}>Next</button>
      </form>
    </div>
  );
}

export default Stage2;
