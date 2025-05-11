import type React from "react";


type DefaultInputProps = {
    placeholder: string;
    type: string;
    className?: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({placeholder = "", type="", className=""}) => {
    return (
        <input className={`flex items-center outline-none border-none ${className}`} placeholder={placeholder} type={type} />
    )
}

export default DefaultInput;