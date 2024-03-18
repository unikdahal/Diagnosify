import React from "react";

function Stage2({
  formData,
  onFormDataChange,
  onNext,
  onPrevious,
  click,
  answeredQuestions,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };

  return (
    <div>
      <h2>Stage 2 Details</h2>
      <form className="px-20"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="p-4">
          <div className="mb-6">
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4">
              <label className="text-lg font-semibold mb-2 block">
                Are you having a headache?
              </label>
              <div className="flex space-x-4">
                <div
                  className={`px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.headache && "opacity-50"
                  }`}
                  onClick={() => click("headache", true)}
                >
                  Yes
                </div>
                <div
                  className={`px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.headache && "opacity-50"
                  }`}
                  onClick={() => click("headache", false)}
                >
                  No
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4">
              <label className="text-lg font-semibold mb-2 block">
                Are you suffering from fever?
              </label>
              <div className="flex space-x-4">
                <div
                  className={`px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.fever && "opacity-50"
                  }`}
                  onClick={() => click("fever", true)}
                >
                  Yes
                </div>
                <div
                  className={`px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.fever && "opacity-50"
                  }`}
                  onClick={() => click("fever", false)}
                >
                  No
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4">
              <label className="text-lg font-semibold mb-2 block">
                Are you fatigued?
              </label>
              <div className="flex space-x-4">
                <div
                  className={`px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.fatigue && "opacity-50"
                  }`}
                  onClick={() => click("fatigue", true)}
                >
                  Yes
                </div>
                <div
                  className={`px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.fatigue && "opacity-50"
                  }`}
                  onClick={() => click("fatigue", false)}
                >
                  No
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4">
              <label className="text-lg font-semibold mb-2 block">
                Are you having sharp abdominal pain?
              </label>
              <div className="flex space-x-4">
                <div
                  className={`px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.abdominalPain && "opacity-50"
                  }`}
                  onClick={() => click("abdominalPain", true)}
                >
                  Yes
                </div>
                <div
                  className={`px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.abdominalPain && "opacity-50"
                  }`}
                  onClick={() => click("abdominalPain", false)}
                >
                  No
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4">
              <label className="text-lg font-semibold mb-2 block">
                Are you feeling dizzy?
              </label>
              <div className="flex space-x-4">
                <div
                  className={`px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.dizzy && "opacity-50"
                  }`}
                  onClick={() => click("dizzy", true)}
                >
                  Yes
                </div>
                <div
                  className={`px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer ${
                    answeredQuestions.dizzy && "opacity-50"
                  }`}
                  onClick={() => click("dizzy", false)}
                >
                  No
                </div>
              </div>
            </div>
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
          Next
        </button>
      </div>
    </div>
  );
}

export default Stage2;
