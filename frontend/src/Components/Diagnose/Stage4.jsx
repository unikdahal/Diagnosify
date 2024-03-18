import React from "react";

function Stage4({ formData, onPrevious }) {
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
          suffering from:
        </h1>

        <div class="my-8 px-10 py-3 w-fit mx-auto border-4 border-red-600 rounded-lg justify-center items-center gap-2">
          <div class="text-red-600 text-3xl font-semibold ">
            Seasonal allergies (hay fever)
          </div>
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

        <div className="text-lg">
          Seasonal allergies, also known as hay fever, are allergic reactions
          that happen during certain times of the year, usually when outdoor
          molds release their spores, and trees, grasses, and weeds release tiny
          pollen particles into the air to fertilize other plants.The immune
          systems of people who are allergic to mold spores or pollen treat
          these particles(called allergens) as invaders and release chemicals,
          including histamine, into the bloodstream to defend against them.It 's
          the release of these chemicals that causes allergy symptoms.
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-xl font-bold">
            The Preventive Measures of Seasonal allergies (hay fever) are:
          </h1>
          <ul className="list-disc mx-10">
            <li>Avoid allergens when possible. </li>
            <li>use air purifiers.</li>
            <li>take prescribed antihistamines..</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Stage4;
