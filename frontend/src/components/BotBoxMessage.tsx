import type { ReactNode } from "react";

type BotBoxMessageProps = {
    children: ReactNode;
}

const BotBoxMessage:React.FC<BotBoxMessageProps> = ({ children}) => {
    return (
        <div className="max-w-xs w-auto rounded-t-xl rounded-br-xl bg-white shadow-lg text-black text-md px-4 py-2 self-start break-words whitespace-pre-wrap">
            {children}
        </div>
    )
}

export default BotBoxMessage;