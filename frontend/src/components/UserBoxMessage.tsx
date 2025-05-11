import type { ReactNode } from "react";

type UserBoxMessageProps = {
    children: ReactNode;
}

const UserBoxMessage:React.FC<UserBoxMessageProps> = ({ children}) => {
    return (
        <div className="max-w-xs w-auto rounded-t-xl rounded-bl-xl bg-blue-500 text-white text-md px-4 py-2 h-auto self-end break-words whitespace-pre-wrap">
            {children}
        </div>
    )
}

export default UserBoxMessage;