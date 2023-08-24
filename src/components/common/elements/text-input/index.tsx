import { TextInputProps } from "../../../../types/FORM_INPUT";
import './text-input.css'
const TextInput = ({placeholder,value,errors,onTextChange,label,id}:TextInputProps) => {

    return (
        <div className="text__input__wrapper">
            <p className={(typeof errors.title !== 'undefined')  ? "text__input__label text__input__label--error" : "text__input__label" }>{label}</p>
            {typeof errors[id] !== 'undefined' ? <p className="text__input__error-msg">{errors[id]}</p> : null }
            <input type="text" id={id} value={value} onChange={onTextChange}  className={((typeof errors[id] !== 'undefined') ? "text__input  text__input--error": "text__input" ) + " "} placeholder={placeholder} />
        </div>
    )
}

export default TextInput