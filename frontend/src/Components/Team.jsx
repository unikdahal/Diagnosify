import TeamCard from "./TeamCard";
import img1 from "../assets/team/img1.png";
import img2 from "../assets/team/img2.png";
import img3 from "../assets/team/img3.png";
import img4 from "../assets/team/img4.png";
import img5 from "../assets/team/img5.png";

const Team = () => {
  return (
    <div className="pb-40" id="our-team">
      <div class="text-sky-800 text-6xl font-bold poppins px-20 py-20">
        Meet Our Team
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        <TeamCard
          img={img1}
          name="Ajay Khatri"
          role="UI/UX Designer & FrontEnd Developer"
        />
        <TeamCard img={img3} name="Bipin Ghimire" role="ML/AI Developer" />
        <TeamCard img={img2} name="Unik Dahal" role="BackEnd Developer" />
        <TeamCard img={img4} name="Aayush Sinha" role="FrontEnd Developer" />
        <TeamCard
          img={img5}
          name="Shivam Tripathi"
          role="Research & Documentation"
        />
      </div>
    </div>
  );
};

export default Team;
