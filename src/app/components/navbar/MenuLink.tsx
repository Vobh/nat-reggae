'use client';

interface MenuLinkProps {
    label: string;
    onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    onClick
}) => {
    return (
        <div
            onClick={onClick} 
            className="px-6 py-4 cursor-pointer hover:bg-gray-100 transition"
        >
            {label}
        </div>
    )
}

export default MenuLink;