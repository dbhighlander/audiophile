import { TextInputProps } from "../../../../types/FORM_INPUT";
import './text-input.css'
const TextInput = ({placeholder,value,errors,onTextChange,label}:TextInputProps) => {

    return (
        <div className="text__input__wrapper">
            <p className={(typeof errors.title !== 'undefined')  ? "text__input__label text__input__label--error" : "text__input__label" }>{label}</p>
            {typeof errors.title !== 'undefined' ? <p className="text__input__error-msg">{errors.title}</p> : null }
            <input type="text" value={value} onChange={onTextChange}  className={((typeof errors.title !== 'undefined') ? "text__input  text__input--error": "text__input" ) + " "} placeholder={placeholder}/>
        </div>
    )
}

export default TextInput