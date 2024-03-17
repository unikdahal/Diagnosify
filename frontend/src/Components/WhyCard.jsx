
const WhyCard = (props)=>{
    return(
        <div>
            <div className="flex justify-center">
                <div className="w-3/4 px-20">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div>
                            <img src={props.img} className="w-20" />
                        </div>
                        <div>
                        <div className="text-2xl font-bold">{props.title}</div>
                        <div className="text-gray-500 mt-4">{props.text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyCard;