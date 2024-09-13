import { FC, useEffect, useState } from 'react'
import cls from './HomePage.module.scss'
import { classNames } from '../../helpers/classNames'
import Button, { ThemeButton } from '../../components/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import Checkbox from '../../components/ui/Checkbox/Checkbox'
import Dropdown from '../../components/ui/Dropdown/Dropdown'
import Block from '../../components/Block'
import CheatBlock from '../../components/mainBlock/CheatBlock'
 
interface HomePageProps {
    className?: string
}
 
const HomePage: FC<HomePageProps> = ({ className }) => { 

    const navigate = useNavigate();
    const [currentSize, setCurrentSize] = useState<string>('fullscreen')

    const sizeOpt = [
        {
            label: 'fullscreen',
            value: 'fullscreen'
        },
        {
            label: '16:9',
            value: '16:9'
        },
        {
            label: '12:10',
            value: '12:10'
        },
    ]

    return (
        <div className={classNames(cls.HomePage, {}, [className, 'h-[100%] flex flex-col items-center'])}>
            <div className='h-[70px] w-[100%] bg-orange p-[15px] flex'>
                <Checkbox title='localhost' />
                <Dropdown className='ml-[20px]' label='size' options={sizeOpt}  value={currentSize} onChange={(val) => setCurrentSize(val)}/>
            </div>
            <div>
                <iframe
                    src="http://127.0.0.1:3001/api/signature/?type=WL&currency=USD&amount=1005" // Адрес второго проекта или любой другой URL
                    style={{ width: '100%', height: '90vh', border: 'none' }} // Настройки стилей
                    title="Второй проект"
                />
            </div>
            <CheatBlock className='w-[100%]' />
        </div>
    )
}
 
export default HomePage

function useStaet<T>(arg0: null): [any, any] {
    throw new Error('Function not implemented.')
}
