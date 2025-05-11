import type React from "react";

type DefaultInputProps = {
    placeholder: string;
    type: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput: React.FC<DefaultInputProps> = ({placeholder = "", type = "", className = "", value = "", onChange}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            className={`flex items-center outline-none border-none ${className}`}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default DefaultInput;
