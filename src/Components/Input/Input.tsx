import './Input.css';

interface IInput {
    type: "submit" | "reset" | "button" | undefined,
    placeholder: string,
    isDisable: boolean,
    onChange: () => void
}

const Input = ({ type, onChange, placeholder, isDisable }: IInput) => {
    return (
        <input
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            disabled={isDisable ? isDisable : false}
        />
    )
}
export default Input