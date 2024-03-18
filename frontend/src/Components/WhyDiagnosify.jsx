import WhyCard from "./WhyCard";
import img1 from "../assets/why/img1.png";
import img2 from "../assets/why/img2.png";
import img3 from "../assets/why/img3.png";

const WhyDiagnosify = () => {
  return (
    <div className="bg-sky-100 pb-20">
      <div class="pt-20 px-20 text-sky-800 text-6xl font-bold poppins" id="About-Us">
        Why Diagnosify?
      </div>

    <div className="flex gap-8 flex-col mt-20">
        <WhyCard
        img={img1}
        title="Fast and Accurate Diagnosis:"
        text="Worried about those nagging symptoms? Diagnosify uses advanced AI algorithms and machine learning to analyze your symptoms quickly and accurately. Within minutes, you'll receive a comprehensive and 96.5% reliable assessment of potential health conditions."
      />

      <WhyCard
        img={img2}
        title="Accessible from Anywhere:"
        text="Forget about long commutes or scheduling appointments. Diagnosify can be accessed from any device with an internet connection. Whether you're at home, work, or on-the-go, your health is just a click away."
      />

      <WhyCard
        img={img3}
        title="User-Friendly Interface:"
        text="No medical jargon or complicated processes. Diagnosify is designed with simplicity in mind. Just answer a few questions about your symptoms, and our intuitive interface will guide you through the rest."
      />
      </div>
    </div>
  );
};

export default WhyDiagnosify;
