import logo from '../assets/logo.svg';
const Footer = () => {
  return (
    <div class="w-full h-64 relative">
      <div class="w-full h-64 left-0 top-0 absolute bg-blue-800"></div>
      <div class="left-[72px] top-[48px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div class="w-full justify-between items-center inline-flex pr-20">
            <img src={logo} alt="Diagnosify" />
          <div class="text-white text-xl font-normal font-['Poppins'] leading-loose">
            Made with 💗 by Team 8848 | Copyright 2023, Team 8848
          </div>
        </div>
        <div class="w-full text-white text-base font-normal font-['Poppins'] leading-relaxed">
          This disease prediction model is based on Random forest algorithm with
          almost 95% accuracy. This is a minor project. Please don’t rely fully upon this for your diagnose as there’s more to evolve for
          this project to give accurate information related to the disease. We suggest to consult with doctors if the symptoms are quite serious.
        </div>
      </div>
    </div>
  );
};

export default Footer;
