import { FC } from 'react'
import cls from './NotFoundPage.module.scss'
import { classNames } from '../../helpers/classNames'
 
interface NotFoundPageProps {
    className?: string
}
 
const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
 
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            Page not found
        </div>
    )
}
 
export default NotFoundPage