
function SecondaryCard({title, image, text}) {
    return(
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            <div className="flex items-center justify-center mb-4">
                <img src={image} alt="" className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold">{text}</span>
            </div>
        </div>
    )
}

export default SecondaryCard;