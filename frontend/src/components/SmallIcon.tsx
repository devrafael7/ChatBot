
type SmallIconProps = {
    src: string;
    alt: string;
    className?: string;
}

const SmallIcon: React.FC<SmallIconProps> = ({src = "", alt = "", className = ""}) => {
    return (
        <img className={`bg-gray-100 p-2 rounded-full cursor-pointer hover:scale-120 ${className}`} src={src} alt={alt} />
    )
}

export default SmallIcon;