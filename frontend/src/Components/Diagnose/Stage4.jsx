import React from 'react';

function Stage4({ formData, onPrevious }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle report generation
  };

  return (
    <div>
      <h2>Report</h2>
      <form onSubmit={handleSubmit}>
        {/* Display report based on formData */}
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="submit">Get Report Now</button>
      </form>
    </div>
  );
}

export default Stage4;
