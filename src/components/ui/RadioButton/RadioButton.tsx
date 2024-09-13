import { FC, InputHTMLAttributes } from 'react'
import { classNames } from '../../../helpers/classNames'
import cls from './RadioButton.module.scss'


interface IOptions {
    value: string
    label?: string
}
 
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    name: string
    options: IOptions[]
    defChecked?: number
    wrapperStyle?: string
    inputStyle?: string
    labelStyle?: string
    onChange: (e: any) => void
}
 
const RadioButton: FC<RadioButtonProps> = ({ 
    className, 
    name, 
    options, 
    defChecked,
    wrapperStyle,
    inputStyle,
    labelStyle,
    onChange, 
    ...otherProps 
}) => {
    
    return (
        <div className={classNames(cls.wrapped, {}, [wrapperStyle])}>
            {options.map((option, id) => (
                <div className='w-[100%]' key={id}>
                    <input
                        id={option.value}
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={id === defChecked }
                        onChange={(e) => onChange(e.target.value)}
                        className={classNames(cls.radio_input, {}, [inputStyle])}
                        {...otherProps}
                    />
                    <label className={classNames(cls.radio_label, {}, [labelStyle])} htmlFor={option.value}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )
}
 
export default RadioButton