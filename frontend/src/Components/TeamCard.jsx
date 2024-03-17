const TeamCard = (props) => {
  return (
    <div className="bg-sky-100 rounded-2xl shadow flex-col justify-center items-center gap-7 inline-flex w-[300px] py-8">
      <div className="rounded-full overflow-hidden">
        <img src={props.img} />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">{props.name}</div>
        <div className="text-gray-500 mt-4 w-[65%] text-center text-lg">{props.role}</div>
      </div>
    </div>
  );
};

export default TeamCard;
