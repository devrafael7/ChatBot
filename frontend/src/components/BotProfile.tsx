
const BotProfile = () =>{
    return (
        <div className="flex gap-3 items-center justify-center">
            <div className="w-13 h-13 p-2.5 bg-blue-500 rounded-full">
                <img className="invert rounded-full" src="/icons/main_logo.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-start">   
                <h5 className="font-semibold text-gray-900 text-lg">Luiz Robot</h5>
                <p className="text-sm font-medium text-gray-400">Chat Bot</p>
            </div>
        </div>
    )
}

export default BotProfile;