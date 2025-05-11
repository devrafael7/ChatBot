import BotProfile from "../components/BotProfile";
import SendMessage from "../components/SendMessage";
import DefaultInput from "../components/DefaultInput";
import UserBoxMessage from "../components/UserBoxMessage";
import BotBoxMessage from "../components/BotBoxMessage";
import { useEffect, useRef } from "react";

const Chat = () => {
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <div className="flex flex-col w-full min-h-screen items-center bg-gray-100 relative">
            <header className="bg-white fixed px-5 py-3 w-full auto justify-start flex">
                <BotProfile/>
            </header>

            <section className="pt-24 pb-20 w-full h-auto flex flex-col px-5 gap-5 overflow-y-auto max-h-screen">
                <UserBoxMessage>
                    Whats is up mate?
                </UserBoxMessage>
                <BotBoxMessage>
                    Whats is going on, Rafael?
                </BotBoxMessage>
                <div ref={bottomRef}/>
            </section>
     

            <div className="fixed bottom-0 left-0 w-full h-auto flex justify-between items-center px-3 gap-3 pb-4">
                <DefaultInput className="w-full h-16 px-7 text-lg rounded-2xl shadow-2xl bg-white" type="text" placeholder="Message"/>
                <SendMessage className="w-20 h-auto p-5 invert" src="https://cdn-icons-png.flaticon.com/128/10322/10322482.png"/>
            </div>
        </div>
    )
}

export default Chat;