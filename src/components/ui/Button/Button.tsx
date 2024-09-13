import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from '../../../helpers/classNames'
import { title } from 'process'

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}
 
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    title?: string
}
 
const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        theme,
        children,
        title,
        ...otherProps
    } = props
 
    return (
        <button 
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {title ? title : children}
        </button>
    )
}
 
export default Button