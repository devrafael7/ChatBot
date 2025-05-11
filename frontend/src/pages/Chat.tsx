import BotProfile from "../components/BotProfile";

const Chat = () => {
    return (
        <div className="flex flex-col w-full h-min-screen items-center px-5 pt-5">
            <header className="w-full auto justify-start flex">
                <BotProfile/>
            </header>
        </div>
    )
}

export default Chat;