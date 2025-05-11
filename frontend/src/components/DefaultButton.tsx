import type { ReactNode } from "react";

type DefaultButtonProps = {
    type?: "button" | "submit" | "reset";
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    onMouseEnter?: () => void; 
    onMouseLeave?: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ type = "button", className = "", children, onClick, onMouseEnter, onMouseLeave}) => {
    return (
        <button className={`cursor-pointer flex justify-center items-center font-semibold rounded-sm ${className}`} type={type} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </button>
    )   
}


export default DefaultButton;