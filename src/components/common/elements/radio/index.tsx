import './radio.css'
import RadioInputItem from "./radio-item";
import { RadioGroupProps } from '../../../../types/FORM_INPUT';
const RadioInput = ({onChange,value}:RadioGroupProps) => {

    return (
        <div className="radio__input__group">
            <RadioInputItem label='Paypal' value='paypal' active={value === 'paypal' ? true : false} onClick={() => onChange('paypal')}/>
            <RadioInputItem label='Cash on Delivery' value='cash' active={value === 'cash' ? true : false} onClick={() => {onChange('cash')}}/>
        </div>
    )
}

export default RadioInput