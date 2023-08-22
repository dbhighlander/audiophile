import { RadioInputProps } from "../../../../types/FORM_INPUT";
import './radio.css'
const RadioInputItem = ({value,onClick,label,active}:RadioInputProps) => {

    return (
        <label onClick={onClick}  htmlFor={"radio__input--"+value}  className={active ? "radio__input__wrapper  radio__input__wrapper--active": "radio__input__wrapper"}>
            <span className={active ? "radio__input__custom  radio__input__custom--active": "radio__input__custom"}></span>
            <input name={"radio__input--"+value} type="radio" value={value} defaultChecked={active} className="radio__input"  />
            <p className="radio__input__label ">{label}</p>            
        </label>
    )
}

export default RadioInputItem