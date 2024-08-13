import { ReactNode } from 'react';
import './Button.css';

interface IButton {
    children: ReactNode,
    type: "submit" | "reset" | "button" | undefined,
    isDisable: boolean | undefined,
    onClick: () => void
}

const Button = ({ children, isDisable, onClick, type }: IButton) => {
    return (
        <button
            disabled={isDisable}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    )
}
export default Button;