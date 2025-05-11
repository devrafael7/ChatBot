import type React from "react";


type DefaultInputProps = {
    placeholder: string;
    type: string;
    className?: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({placeholder = "", type="", className=""}) => {
    return (
        <input className={`flex items-center shadow-md outline-none border-none font-medium rounded-sm ${className}`} placeholder={placeholder} type={type} />
    )
}

export default DefaultInput;