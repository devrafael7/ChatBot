import type React from "react";

type SendMessageProps = {
    src: string;
    className: string;
    onClick: ()=> void;
}

const SendMessage: React.FC<SendMessageProps> = ({onClick, src = "", className = ""}) => {
    return (
        <div className="bg-blue-500 w-max h-max rounded-2xl flex justify-center items-center hover:bg-blue-600 transition-all" onClick={onClick}>
            <img className={`${className}`} src={src} alt="" />
        </div>
    )
}

export default SendMessage;