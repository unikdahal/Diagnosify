import React from "react";

function Stage1({ formData, onFormDataChange, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };

  return (
    <div className="px-20 mt-20" >
      <form
        className="flex flex-wrap gap-[17px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="w-[99%] px-3 py-3 bg-white rounded-md border border-zinc-800"
          value={formData.fullName}
          onChange={handleChange}
        />

        <br />

        <select
          placeholder="Gender"
          name="gender"
          className="w-[49%] px-3 py-3 bg-white rounded-md border border-zinc-800"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="number"
          placeholder="Age"
          name="age"
          className="w-[49%] px-3 py-3 bg-white rounded-md border border-zinc-800"
          value={formData.age}
          onChange={handleChange}
        />

        <br />
        <input
          type="number"
          placeholder="Height (cm)"
          name="height"
          className="w-[49%] px-3 py-3 bg-white rounded-md border border-zinc-800"
          value={formData.height}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          name="weight"
          className="w-[49%] px-3 py-3 bg-white rounded-md border border-zinc-800"
          value={formData.weight}
          onChange={handleChange}
        />

        <button
          className="mt-4 mb-8 border-2 border-red-600 text-lg text-red-600 font-bold px-10 py-2 rounded-md hover:bg-red-600 hover:text-white"
          type="button"
          onClick={onNext}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Stage1;
