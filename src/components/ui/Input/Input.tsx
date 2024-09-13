import { FC, InputHTMLAttributes, useRef, useState } from 'react'
import cls from './Input.module.scss'
import { classNames } from '../../../helpers/classNames'
 
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    containerStyle?: string;
    errors?: boolean;
    disabled?: boolean;
    inputStyle?: string;
    name?: string;
    onChange?: (props?: any) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: string;
    value?: string;
    wrapperStyle?: string;
    icon?: string;
    iconLabel?: string;
    label?: string;
}
 
const Input: FC<InputProps> = ({ 
    className,
    containerStyle,
    errors,
    disabled,
    icon,
    iconLabel,
    inputStyle,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    type,
    value,
    wrapperStyle,
    label
}) => {

    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef && inputRef.current) inputRef.current.focus();
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {        
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [wrapperStyle, 'relative'])}>
            <div onClick={handleClick} className={'flex flex-col text-base w-[100%]'}>
                {label ? <label className='text-base mb-[10px]'>{label}</label> : null}
                <input
                    ref={inputRef}
                    aria-label={name}
                    data-testid={name}
                    tabIndex={0}
                    type={type}
                    name={name}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    value={value}
                    className={classNames(cls.input, {}, [className])}
                    disabled={disabled}
                    readOnly={readOnly}
                    style={{paddingRight: icon || iconLabel ? '55px' : null}}
                />
                {icon ? <img className='h-[28px] w-fit absolute right-[24px] top-[25%]' src={icon} alt="input icon" /> : null}
                {iconLabel ? <p className='absolute right-[24px] top-[27%] text-[#85A5FF]'>{iconLabel}</p> : null}
            </div>
        </div>
    )
}
 
export default Input