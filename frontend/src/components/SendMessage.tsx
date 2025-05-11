import type React from "react";

type SendMessageProps = {
    src: string;
    className: string;
}

const SendMessage: React.FC<SendMessageProps> = ({src = "", className = ""}) => {
    return (
        <div className="bg-blue-500 w-max h-max rounded-2xl flex justify-center items-center">
            <img className={`${className}`} src={src} alt="" />
        </div>
    )
}

export default SendMessage;