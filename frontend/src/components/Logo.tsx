import type React from "react";

type LogoProps = {
    className: string;
}

const Logo: React.FC<LogoProps> = ( {className = ""} ) => {
    return (
         <div className="flex flex-col justify-center items-center gap-1">
            <img className={`${className}`} src="/icons/main_logo.png" alt="" />
            <h4 className="text-white text-lg font-mono pl-3">CHAT BOT</h4>
        </div>
    )
}

export default Logo;