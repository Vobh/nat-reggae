interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <div 
            onClick={onClick}
            className={`${className}`}
        >
            {label}
        </div>
    )
}

export default CustomButton;