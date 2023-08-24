import { ChangeEventHandler } from "react"

export type TextInputProps = {
    label: string,
    placeholder: string,
    value: string,
    onTextChange:ChangeEventHandler<HTMLInputElement>,
    errors:Record<string, string>,
    id:string,
}



export type RadioInputProps = {
    label: string,
    value: string,
    active:boolean,
    onClick: React.MouseEventHandler<HTMLLabelElement>
}

export type RadioGroupProps = {
    value: string,
    onChange:Function,
}